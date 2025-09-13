import * as S from './style'
import SvgDoubleAvata from "@assets/icon/components/SvgDoubleAvata.tsx";
import SvgNotice from "@assets/icon/components/SvgNotice";
import {useState} from "react";



const Login = () =>{

  const [wrongLogin, setWrongLogin] = useState(true);
  return (

        <S.Container>
            <S.Main>
                <S.Content>
                    <SvgDoubleAvata />
                    <S.Title>
                        Login
                    </S.Title>
                </S.Content>
                <S.Content>
                  <S.InputSection>
                    <S.Text>
                      이메일
                    </S.Text>
                    <S.InputContainer>
                      <S.Input placeholder="이메일을 입력해주세요">

                      </S.Input>
                    </S.InputContainer>
                  </S.InputSection>
                  <S.InputSection>
                    <S.Text>
                      비밀번호
                    </S.Text>
                    <S.InputContainer>
                      <S.Input placeholder="비밀번호을 입력해주세요">

                      </S.Input>
                    </S.InputContainer>
                  </S.InputSection>
                  <S.FooterNav>
                    {wrongLogin && (<><SvgNotice/><S.AlertTText>비밀번호 또는 이메일이 일치하지 않습니다</S.AlertTText></>)}
                  </S.FooterNav>
                </S.Content>
              <S.Content>
                <S.SubmitButton>
                  로그인
                </S.SubmitButton>
                <S.FooterNav>
                  <S.BelowText>
                    계정이 없으신가요?
                  </S.BelowText>
                  <S.GotoRegister>
                    회원가입하기
                  </S.GotoRegister>
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