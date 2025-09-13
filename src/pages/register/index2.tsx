import * as S from './style.ts'
import SvgDoubleAvata from "@assets/icon/components/SvgDoubleAvata.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register2 = () =>{
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email, password } = location.state || {};

  const [birthdate, setBirthdate] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email,
          password,
          name,
          birthdate,
          travel_style: travelStyle
        })
      });

      if(res.ok){
        const data = await res.json();
        console.log("가입 성공:", data);
        navigate("/login"); // 로그인 페이지로 이동
      } else {
        const err = await res.json();
        setError(err.message || "회원가입 실패");
      }
    } catch (e) {
      setError("네트워크 오류");
    }
  }

  return (
    <S.Container>
      <S.Main>
        <S.Content>
          <SvgDoubleAvata />
          <S.Title>Sign up</S.Title>
        </S.Content>

        <S.Content>
          <S.InputSection>
            <S.Text>생년월일</S.Text>
            <S.InputContainer>
              <S.Input type="date"
                       value={birthdate}
                       onChange={(e)=>setBirthdate(e.target.value)} />
            </S.InputContainer>
          </S.InputSection>

          <S.InputSection>
            <S.Text>여행 스타일</S.Text>
            <S.InputContainer>
              <S.Input placeholder="여행 스타일을 입력해주세요"
                       value={travelStyle}
                       onChange={(e)=>setTravelStyle(e.target.value)} />
            </S.InputContainer>
          </S.InputSection>

          {error && <S.AlertTText>{error}</S.AlertTText>}
        </S.Content>

        <S.Content>
          <S.SubmitButton onClick={handleSubmit}>
            회원가입
          </S.SubmitButton>
        </S.Content>
      </S.Main>
      <S.GestureBar>
        <S.HomeIndicator />
      </S.GestureBar>
    </S.Container>
  )
}
export default Register2;