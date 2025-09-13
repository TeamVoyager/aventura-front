import * as S from './style'
import NavigationBar from '@components/navigation-bar'
import SvgProfile from '@assets/icon/components/SvgProfile'
import SvgSettings from '@assets/icon/components/SvgSettings'
import SvgUser from '@assets/icon/components/SvgUser'
import SvgEdit from '@assets/icon/components/SvgEdit'

interface OptionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const OptionButton = ({ icon, label, onClick }: OptionButtonProps) => (
  <S.OptionButton onClick={onClick}>
    <S.OptionContent>
      <S.OptionIcon>{icon}</S.OptionIcon>
      <S.OptionLabel>{label}</S.OptionLabel>
    </S.OptionContent>
    <S.ChevronIcon>›</S.ChevronIcon>
  </S.OptionButton>
);

const Profile = () => {
  return (
    <S.Container>

      <S.Main>
        <S.Content>
          <S.ProfileSection>
            <S.ProfileImageContainer>
              <S.ProfileImageBorder />
              <S.ProfileImage />
              <S.EditButton>
                <SvgEdit />
              </S.EditButton>
            </S.ProfileImageContainer>
            <S.Nav>
              <S.UserName>사용자_1</S.UserName>
              <S.Text>
                t86662998@gmail.com
              </S.Text>
            </S.Nav>
          </S.ProfileSection>
          <S.OptionsContainer>
            <OptionButton 
              icon={<SvgProfile />} 
              label="프로필 설정" 
            />
            <S.Divider />
            <OptionButton 
              icon={<SvgSettings />} 
              label="설정" 
            />
            <S.Divider />
            <OptionButton 
              icon={<SvgUser />} 
              label="계정 정보" 
            />
          </S.OptionsContainer>
        </S.Content>

        <NavigationBar currentPage="menu" />
      </S.Main>

      <S.GestureBar>
        <S.HomeIndicator />
      </S.GestureBar>
    </S.Container>
  )
}

export default Profile