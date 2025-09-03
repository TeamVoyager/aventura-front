import * as S from './style'
import NavigationBar from '@components/navigation-bar'
import SvgAdd from '@assets/icon/components/SvgAdd'
import SvgArrowRight from '@assets/icon/components/SvgArrowRight'
import SvgPeople from '@/assets/icon/components/SvgPeople'
import SvgPerson from '@/assets/icon/components/SvgPerson'
import SvgAvata from '@/assets/icon/components/SvgAvata'
import SvgTicketBack from '@/assets/icon/components/SvgTicketBack'
import SvgTicketBtn from '@/assets/icon/components/SvgTicketBtn'

interface CompanionTicketProps {
  companionName: string;
  date: string;
  status: 'active' | 'resting';
  avatarColor: string;
}

const CompanionTicket = ({ companionName, date, status }: CompanionTicketProps) => (
  <S.TicketContainer>
    <S.TicketBackgroundSvg>
      <SvgTicketBack />
    </S.TicketBackgroundSvg>
    <S.TicketInfo>
      <SvgAvata />
      <S.TicketDetails>
        <S.CompanionName>{companionName}</S.CompanionName>
        <S.Divider />
        <S.CompanionDate>{date}</S.CompanionDate>
      </S.TicketDetails>
    </S.TicketInfo>
    <S.ActionButtonSvg>
      <SvgTicketBtn />
      <S.ActionContent>
        <S.ActionText>
          {status === 'active' ? '동행중' : '동행'}
        </S.ActionText>
        {status === 'resting' && <SvgArrowRight />}
      </S.ActionContent>
    </S.ActionButtonSvg>
  </S.TicketContainer>
);

const Management = () => {
  return (
    <S.Container>
      <S.Main>
        <S.UpperNav>
          <S.RecruitButton>
            <SvgAdd />
            모집
          </S.RecruitButton>
        </S.UpperNav>

        <S.Content>
          <S.Section>
            <S.SectionHeader>
              <S.SectionTitle>
                동행중
                <SvgPeople />
              </S.SectionTitle>
              <S.SectionIndicators>
              </S.SectionIndicators>
            </S.SectionHeader>
            <CompanionTicket
              companionName="동반자 이름"
              date="2025.08.14 모집"
              status="active"
              avatarColor=""
            />
          </S.Section>

          <S.Section>
            <S.SectionHeader>
              <S.SectionTitle>
                휴식중
                <SvgPerson />
              </S.SectionTitle>
            </S.SectionHeader>
            <CompanionTicket
              companionName="동반자 이름"
              date="2025.08.14 모집"
              status="resting"
              avatarColor=""
            />
            <CompanionTicket
              companionName="동반자 이름"
              date="2025.08.14 모집"
              status="resting"
              avatarColor=""
            />
          </S.Section>
        </S.Content>

        <NavigationBar currentPage="management" />
      </S.Main>

      <S.GestureBar>
        <S.HomeIndicator />
      </S.GestureBar>
    </S.Container>
  )
}

export default Management