import * as S from './style'
import SvgDoubleAvata from "@assets/icon/components/SvgDoubleAvata.tsx";
import SvgNotice from "@assets/icon/components/SvgNotice";
import {useState} from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongLogin, setWrongLogin] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      // 성공 시 토큰 저장
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      console.log("로그인 성공:", res.data);

      // 로그인 성공하면 wrongLogin 숨김
      setWrongLogin(false);

    } catch (err) {
      console.error(err);
      setWrongLogin(true);
    }
  };

  return (
    <S.Container>
      <S.Main>
        <S.Content>
          <SvgDoubleAvata />
          <S.Title>Login</S.Title>
        </S.Content>

        <S.Content>
          <S.InputSection>
            <S.Text>이메일</S.Text>
            <S.InputContainer>
              <S.Input
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.InputContainer>
          </S.InputSection>

          <S.InputSection>
            <S.Text>비밀번호</S.Text>
            <S.InputContainer>
              <S.Input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.InputContainer>
          </S.InputSection>

          <S.FooterNav>
            {wrongLogin && (
              <>
                <SvgNotice />
                <S.AlertTText>
                  비밀번호 또는 이메일이 일치하지 않습니다
                </S.AlertTText>
              </>
            )}
          </S.FooterNav>
        </S.Content>

        <S.Content>
          <S.SubmitButton onClick={handleLogin}>
            로그인
          </S.SubmitButton>
          <S.FooterNav>
            <S.BelowText>계정이 없으신가요?</S.BelowText>
            <S.GotoRegister>회원가입하기</S.GotoRegister>
          </S.FooterNav>
        </S.Content>
      </S.Main>

      <S.GestureBar>
        <S.HomeIndicator />
      </S.GestureBar>
    </S.Container>
  )
}

export default Login;