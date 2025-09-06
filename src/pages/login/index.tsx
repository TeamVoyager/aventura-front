import * as S from './style'
import SvgDoubleAvata from "@assets/icon/components/SvgDoubleAvata.tsx";





const Login = () =>{
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
                      이름
                    </S.Text>
                    <S.InputContainer>
                      <S.Input placeholder="이름을 입력해주세요">

                      </S.Input>
                    </S.InputContainer>
                  </S.InputSection>
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