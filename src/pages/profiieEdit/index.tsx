
import * as S from './style'
import SvgEdit from '@assets/icon/components/SvgEdit'



const ProfileEdit = () => {
  return (
    <S.Container>

      <S.Main>
        <S.Content>
          <S.Nav>
            <S.Text>
              프로필 설정
            </S.Text>
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

        </S.Content>

      </S.Main>

      <S.GestureBar>
        <S.HomeIndicator />
      </S.GestureBar>
    </S.Container>
  )
}

export default ProfileEdit