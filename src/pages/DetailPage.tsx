import { useQuery } from 'react-query';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  fetchSpotDetailData,
  fetchNearStayData,
  fetchNearRestaurantData,
  FetchedStayDataType,
} from '../apis/publicAPI';
import styled from 'styled-components';
import Loader from '../components/Loader/Loader';
import { useEffect } from 'react';
import { doc, setDoc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../apis/firebase';
import RestaurantInfo from '../components/RestaurantInfo';
import Liked from '../components/Liked';
import StayInfo from '../components/StayInfo';

const DetailPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { data: spotData, isLoading: isLoadingSpot } = useQuery(
    ['spot_detail', param],
    () => fetchSpotDetailData({ param })
  );

  const getRecCnt = async () => {
    if (param.id) {
      const data = await getDoc(doc(db, 'recommendation', `${param.id}`));
      return data.data();
    } else {
      return;
    }
  };

  const updateRecCnt = async () => {
    if (param.id) {
      await updateDoc(doc(db, 'recommendation', param.id), {
        viewCnt: increment(1),
      });
    }
  };

  const saveNewRecCnt = async (spotData: FetchedStayDataType) => {
    if (param.id) {
      await setDoc(doc(db, 'recommendation', param.id), {
        ...spotData,
        viewCnt: 1,
      });
    }
  };

  useEffect(() => {
    const getFirestoreRecCnt = async () => {
      const res = await getRecCnt();
      if (res) {
        updateRecCnt();
      } else {
        if (spotData) saveNewRecCnt(spotData);
      }
    };
    getFirestoreRecCnt();
  }, [spotData]);

  const { data: stayData, isLoading: isLoadingStay } = useQuery(
    ['stay_detail', spotData],
    () => fetchNearStayData({ mapx: spotData.mapx, mapy: spotData.mapy }),
    {
      enabled: !!spotData,
    }
  );

  const { data: restaurantData, isLoading: isLoadingRestaurant } = useQuery(
    ['restaurant_detail', spotData],
    () =>
      fetchNearRestaurantData({
        mapx: spotData.mapx,
        mapy: spotData.mapy,
      }),
    {
      enabled: !!spotData,
    }
  );

  return (
    <Container>
      <div>
        {isLoadingSpot ? (
          <Loader />
        ) : (
          <>
            {spotData ? (
              <div key={param.id}>
                <Link to={'/'}>메인으로</Link>
                <div>{spotData.title}</div>
                <img src={spotData.firstimage} alt='관광지 사진' />
                <div>주소 : {spotData.addr1}</div>
                <Link to={`/${param.id}/map`}>지도보기</Link>
                {/* <div>{e.homepage}</div> */}
                <Liked spotData={spotData} />
                <div>{spotData.overview}</div>
              </div>
            ) : (
              <div>찾으시는 정보가 없습니다</div>
            )}
          </>
        )}

        <SideInfoWrapper>
          {/* 일단 이부분 주석은 지우지 말아주세요!! */}
          {/* <StayInfoWrapper>
            <div>주변 숙박정보</div>
            <div>
              {isLoadingStay ? (
                <Loader />
              ) : (
                <>
                  {stayData ? (
                    <>
                      <StayImage
                        src={stayData[0]?.firstimage}
                        alt='주변숙소 이미지'
                      />
                      <div>{stayData[0]?.title}</div>
                    </>
                  ) : (
                    <>
                      <div>주변 숙박정보가 없습니다.</div>
                    </>
                  )}
                </>
              )}
            </div>
          </StayInfoWrapper> */}
          {/* <RestaurantInfoWrapper> */}
          {/* <div>주변 맛집정보</div>
            <div>
              {isLoadingRestaurant ? (
                <Loader />
              ) : (
                <>
                  {restaurantData ? (
                    <>
                      <StayImage
                        src={restaurantData[0]?.firstimage}
                        alt='주변맛집 이미지'
                      />
                      <div>{restaurantData[0]?.title}</div>
                    </>
                  ) : (
                    <>
                      <div>주변 맛집정보가 없습니다.</div>
                    </>
                  )}
                </>
              )}
            </div> */}

          <StayInfoWrapper>
            <StayInfo spotData={spotData} />
          </StayInfoWrapper>
          <RestaurantInfoWrapper>
            <RestaurantInfo spotData={spotData} />
          </RestaurantInfoWrapper>
        </SideInfoWrapper>
      </div>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SideInfoWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const StayInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RestaurantInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StayImage = styled.img`
  width: 300px;
  height: 200px;
`;
