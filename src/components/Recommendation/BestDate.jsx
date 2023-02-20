import React from 'react';
import styled from 'styled-components';
import yeonbuk from '../../assets/yeonbuk.avif';
import buseok from '../../assets/buseok.avif';
import dmz from '../../assets/dmz.avif';
import dongsung from '../../assets/dongsung.avif';
import TapHeart from '../../assets/TapHeart.avif';

export default function MyChild() {
  const goyeonbuk = () => {
    window.location.href = 'spot/126463';
  };

  const gobuseok = () => {
    window.location.href = '/spot/127669';
  };

  const godmz = () => {
    window.location.href = '/spot/2353577';
  };

  const godongsung = () => {
    window.location.href = '/spot/250331';
  };

  return (
    <Container>
      <MyChildTopText>베스트 데이트 코스</MyChildTopText>
      <MyChildListBox>
        <MyChildList>
          <MyChildImg src={yeonbuk} alt="" />
          <MyCildTextBox>
            <MyChildTexth3>연북정</MyChildTexth3>
            <MyChildTextp>제주 제주시 조천읍 조천리 2690번지</MyChildTextp>
            <LikeBox>
              <LikeImg src={TapHeart} alt="" />
              <p>972</p>
            </LikeBox>
            <GoButton onClick={goyeonbuk}>바로가기</GoButton>
          </MyCildTextBox>
        </MyChildList>
        <MyChildList>
          <MyChildImg src={buseok} alt="" />
          <MyCildTextBox>
            <MyChildTexth3>부석사</MyChildTexth3>
            <MyChildTextp>경상북도 영주시 부석면 부석사로</MyChildTextp>
            <LikeBox>
              <LikeImg src={TapHeart} alt="" />
              <p>788</p>
            </LikeBox>
            <GoButton onClick={gobuseok}>바로가기</GoButton>
          </MyCildTextBox>
        </MyChildList>
        <MyChildList>
          <MyChildImg src={dmz} alt="" />
          <MyCildTextBox>
            <MyChildTexth3>DMZ생태평화공원</MyChildTexth3>
            <MyChildTextp>강원도 철원군 481-1</MyChildTextp>
            <LikeBox>
              <LikeImg src={TapHeart} alt="" />
              <p>451</p>
            </LikeBox>
            <GoButton onClick={godmz}>바로가기</GoButton>
          </MyCildTextBox>
        </MyChildList>
        <MyChildList>
          <MyChildImg src={dongsung} alt="" />
          <MyCildTextBox>
            <MyChildTexth3>전주전동성당</MyChildTexth3>
            <MyChildTextp>전라북도 전주시 완산구 태조로 51</MyChildTextp>
            <LikeBox>
              <LikeImg src={TapHeart} alt="" />
              <p>329</p>
            </LikeBox>
            <GoButton onClick={godongsung}>바로가기</GoButton>
          </MyCildTextBox>
        </MyChildList>
      </MyChildListBox>
    </Container>
  );
}

const Container = styled.div`
  width: 65%;
  height: 580px;
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  border: 1.5px solid white;
  border-radius: 50px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const MyChildTopText = styled.p`
  margin-left: 40px;
  color: #6478ff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
`;

const MyChildListBox = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const MyChildList = styled.div`
  width: 280px;
  height: 413px;
  background-color: white;
  box-shadow: 5px 5px #d1d1d1;
  border: 1px solid #6478ff;
  border-radius: 13px;
  overflow: hidden;
  position: relative;
`;

const MyChildImg = styled.img`
  width: 280px;
  height: 250px;
`;

const MyCildTextBox = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;

const MyChildTexth3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #333333;
`;

const MyChildTextp = styled.p`
  color: #7f7f7f;
  margin-top: 5px;
`;

const LikeBox = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
  align-items: center;
`;

const LikeImg = styled.img`
  width: 20px;
  height: 20px;
`;

const GoButton = styled.button`
  background-color: white;
  border: 1px solid #6478ff;
  color: #6478ff;
  border-radius: 3px;
  width: 100px;
  height: 30px;
  margin-left: 140px;
  margin-top: 20px;
  &:hover {
    background-color: #6478ff;
    border: 1px solid #6478ff;
    color: white;
  }
`;
