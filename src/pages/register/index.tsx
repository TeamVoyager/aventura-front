import * as S from './style.ts'
import SvgDoubleAvata from "@assets/icon/components/SvgDoubleAvata.tsx";
import SvgNotice from "@assets/icon/components/SvgNotice.tsx";
import {useState} from "react";





const Register = () =>{
  const [notMatchPW, setNotMatchPW] = useState(true);
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
              이름
            </S.Text>
            <S.InputContainer>
              <S.Input placeholder="이름을 입력해주세요">

              </S.Input>
            </S.InputContainer>
          </S.InputSection>
          <S.InputSection>
            <S.Nav>
              <S.Text>
                이메일
              </S.Text>
              <S.AlertTText>*</S.AlertTText>
            </S.Nav>
            <S.InputContainer>
              <S.Input placeholder="이메일을 입력해주세요">

              </S.Input>
            </S.InputContainer>
          </S.InputSection>
          <S.InputSection>
            <S.Nav>
              <S.Text>
                비밀번호
              </S.Text>
              <S.AlertTText>*</S.AlertTText>
            </S.Nav>
            <S.InputContainer>
              <S.Input placeholder="비밀번호을 입력해주세요">

              </S.Input>
            </S.InputContainer>
          </S.InputSection>
          <S.InputSection>
            <S.Nav>
            <S.Text>
              비밀번호 확인
            </S.Text>
            <S.AlertTText>*</S.AlertTText>
            </S.Nav>
            <S.InputContainer>
              <S.Input placeholder="비밀번호을 확인해주세요">

              </S.Input>
            </S.InputContainer>
          </S.InputSection>
          <S.FooterNav>
            {notMatchPW && (<><SvgNotice/><S.AlertTText>비밀번호 일치하지 않습니다</S.AlertTText></>)}
          </S.FooterNav>
        </S.Content>
        <S.Content>
          <S.SubmitButton>
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