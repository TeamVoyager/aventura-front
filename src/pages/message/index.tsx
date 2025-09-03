import * as S from './style'
import NavigationBar from '@components/navigation-bar'
import SvgHistory from '@assets/icon/components/SvgHistory'
import SvgMicrophone from '@assets/icon/components/SvgMicrophone'
import SvgPlus from '@assets/icon/components/SvgPlus'
import { useNavigate } from 'react-router-dom'

const AIPartner = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.BackgroundImage />

      <S.Main>
        <S.UpperNav>
          <S.HistoryButton onClick={() => navigate('/history')}>
            <SvgHistory />
            대화 기록
          </S.HistoryButton>
        </S.UpperNav>

        <S.Content>
          <S.CompanionContainer>
            <S.CompanionBase />
            <S.CompanionFace />
            <S.CompanionBody />
            <S.CompanionArms>
              <S.CompanionArm />
              <S.CompanionArm />
            </S.CompanionArms>
            <S.CompanionHat />
          </S.CompanionContainer>

          <S.ChatInputContainer>
            <S.ChatInput placeholder="편하게 대화해주세요" />
            <S.InputButtons>
              <S.CircleButton>
                <SvgPlus />
              </S.CircleButton>
              <S.CircleButton>
                <SvgMicrophone />
              </S.CircleButton>
            </S.InputButtons>
          </S.ChatInputContainer>
        </S.Content>

        <NavigationBar currentPage="message" />
      </S.Main>

      <S.GestureBar>
        <S.HomeIndicator />
      </S.GestureBar>
    </S.Container>
  )
}

export default AIPartner