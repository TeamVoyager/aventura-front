import * as S from './style'
import { useNavigate } from 'react-router-dom'
import SvgBack from '@assets/icon/components/SvgBack'

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  message: string;
  timestamp?: string;
}

interface ChatDay {
  date: string;
  messages: ChatMessage[];
}

const ChatBubble = ({ message, type }: { message: string; type: 'user' | 'ai' }) => (
  <S.ChatBubbleContainer type={type}>
    {type === 'ai' && <S.CompanionAvatar />}
    <S.ChatBubble type={type}>
      <S.ChatText type={type}>{message}</S.ChatText>
    </S.ChatBubble>
  </S.ChatBubbleContainer>
);

const History = () => {
  const navigate = useNavigate();

  const chatData: ChatDay[] = [
    {
      date: "2025.08.13",
      messages: [
        { id: '1', type: 'user', message: '오늘 하루는 어떻니' },
        { id: '2', type: 'ai', message: '오늘도 언제나 처럼 나른한 기분이야' },
        { id: '3', type: 'user', message: '나도 너처럼 편하게 있고 싶구나' },
        { id: '4', type: 'ai', message: '힘내' }
      ]
    },
    {
      date: "2025.08.14", 
      messages: [
        { id: '5', type: 'user', message: '오늘은 무엇을 하면 좋을까' },
        { id: '6', type: 'ai', message: '주변에 산책로가 있던데 한번 둘러보는게 어때' }
      ]
    }
  ];

  return (
    <S.Container>

      <S.Main>
        <S.UpperNav>
          <S.BackButton onClick={() => navigate('/')}>
            <SvgBack />
          </S.BackButton>
        </S.UpperNav>

        <S.Content>
          {chatData.map((day) => (
            <S.DateSection key={day.date}>
              <S.DateLabel>{day.date}</S.DateLabel>
              
              <S.MessagesContainer>
                {day.messages.map((message) => (
                  <ChatBubble 
                    key={message.id}
                    message={message.message}
                    type={message.type}
                  />
                ))}
              </S.MessagesContainer>
            </S.DateSection>
          ))}
        </S.Content>
      </S.Main>

      <S.GestureBar>
        <S.HomeIndicator />
      </S.GestureBar>
    </S.Container>
  )
}

export default History