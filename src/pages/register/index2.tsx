import * as S from './style.ts'
import SvgDoubleAvata from "@assets/icon/components/SvgDoubleAvata.tsx";






const Register2 = () =>{
  return (

    <S.Container>
      <S.Main>
        <S.Content>
          <SvgDoubleAvata />
          <S.Title>
            Sign up
          </S.Title>
        </S.Content>
        <S.Content>
          <S.InputSection>
            <S.Text>
              생년월일
            </S.Text>
            <S.InputContainer>
              <S.Input type={"date"}>

              </S.Input>
            </S.InputContainer>
          </S.InputSection>
          <S.InputSection>
            <S.Text>
              여행 스타일
            </S.Text>
            <S.InputContainer>
              <S.Input placeholder="여행 스타일을 입력해주세요">

              </S.Input>
            </S.InputContainer>
          </S.InputSection>
          <S.FooterNav>
          </S.FooterNav>
        </S.Content>
        <S.Content>
          <S.SubmitButton>
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