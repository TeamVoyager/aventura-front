import * as S from './style.ts'
import SvgDoubleAvata from "@assets/icon/components/SvgDoubleAvata.tsx";
import SvgNotice from "@assets/icon/components/SvgNotice.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () =>{
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [notMatchPW, setNotMatchPW] = useState(false);

  const handleNext = () => {
    if(password !== checkPassword){
      setNotMatchPW(true);
      return;
    }
    setNotMatchPW(false);
    // step2로 이동하면서 데이터 전달
    navigate("/register2", {
      state: { name, email, password }
    });
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
            <S.Text>이름</S.Text>
            <S.InputContainer>
              <S.Input placeholder="이름을 입력해주세요"
                       value={name}
                       onChange={(e)=>setName(e.target.value)} />
            </S.InputContainer>
          </S.InputSection>

          <S.InputSection>
            <S.Nav>
              <S.Text>이메일</S.Text>
              <S.AlertTText>*</S.AlertTText>
            </S.Nav>
            <S.InputContainer>
              <S.Input placeholder="이메일을 입력해주세요"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)} />
            </S.InputContainer>
          </S.InputSection>

          <S.InputSection>
            <S.Nav>
              <S.Text>비밀번호</S.Text>
              <S.AlertTText>*</S.AlertTText>
            </S.Nav>
            <S.InputContainer>
              <S.Input type="password"
                       placeholder="비밀번호를 입력해주세요"
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)} />
            </S.InputContainer>
          </S.InputSection>

          <S.InputSection>
            <S.Nav>
              <S.Text>비밀번호 확인</S.Text>
              <S.AlertTText>*</S.AlertTText>
            </S.Nav>
            <S.InputContainer>
              <S.Input type="password"
                       placeholder="비밀번호를 확인해주세요"
                       value={checkPassword}
                       onChange={(e)=>setCheckPassword(e.target.value)} />
            </S.InputContainer>
          </S.InputSection>

          <S.FooterNav>
            {notMatchPW && (<><SvgNotice/><S.AlertTText>비밀번호가 일치하지 않습니다</S.AlertTText></>)}
          </S.FooterNav>
        </S.Content>

        <S.Content>
          <S.SubmitButton onClick={handleNext}>
            다음
          </S.SubmitButton>
        </S.Content>
      </S.Main>
      <S.GestureBar>
        <S.HomeIndicator />
      </S.GestureBar>
    </S.Container>
  )
}
export default Register;