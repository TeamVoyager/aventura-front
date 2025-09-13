import * as S from './style'
import SvgEdit from '@assets/icon/components/SvgEdit'
import { useState } from "react";
import axios from "axios";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [message, setMessage] = useState("");

  const handleProfileUpdate = async () => {
    try {
      const token = localStorage.getItem("accessToken"); // 로그인 때 저장했던 토큰

      const res = await axios.put(
        "http://localhost:8080/users/profile", // 실제 API 주소 확인 필요
        {
          name,
          birthdate,
          travel_style: travelStyle,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("프로필 수정 성공:", res.data);
      setMessage("프로필이 성공적으로 수정되었습니다 ✅");

    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) {
        setMessage("로그인이 필요합니다 ❌");
      } else {
        setMessage("수정 중 오류가 발생했습니다 ❌");
      }
    }
  };

  return (
    <S.Container>
      <S.Main>
        <S.Content>
          <S.Nav>
            <S.Text>프로필 설정</S.Text>
          </S.Nav>

          <S.ProfileSection>
            <S.ProfileImageContainer>
              <S.ProfileImageBorder />
              <S.ProfileImage />
              <S.EditButton>
                <SvgEdit />
              </S.EditButton>
            </S.ProfileImageContainer>
            <S.UserName>사용자_1</S.UserName>
          </S.ProfileSection>

          <S.Content>
            <S.InputSection>
              <S.Text>이름</S.Text>
              <S.InputContainer>
                <S.Input
                  placeholder="이름을 입력해주세요"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </S.InputContainer>
            </S.InputSection>

            <S.InputSection>
              <S.Text>생년월일</S.Text>
              <S.InputContainer>
                <S.Input
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </S.InputContainer>
            </S.InputSection>

            <S.InputSection>
              <S.Text>여행 스타일</S.Text>
              <S.InputContainer>
                <S.Input
                  placeholder="여행 스타일을 입력해주세요"
                  value={travelStyle}
                  onChange={(e) => setTravelStyle(e.target.value)}
                />
              </S.InputContainer>
            </S.InputSection>
          </S.Content>

          <S.InputSection>
            <S.SubmitButton onClick={handleProfileUpdate}>
              수정
            </S.SubmitButton>
          </S.InputSection>

          {message && (
            <S.FooterNav>
              <S.BelowText>{message}</S.BelowText>
            </S.FooterNav>
          )}
        </S.Content>
      </S.Main>

      <S.GestureBar>
        <S.HomeIndicator />
      </S.GestureBar>
    </S.Container>
  );
};

export default ProfileEdit;