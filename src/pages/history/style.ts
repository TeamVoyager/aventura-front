import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: #e9eae4;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 37.5rem;
  margin: 0 auto;
`


export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.75rem;

  @media (min-width: 30rem) {
    padding: 1.5rem;
    gap: 1rem;
  }

  @media (min-width: 37.5rem) {
    padding: 2rem;
    gap: 1.25rem;
  }
`

export const UpperNav = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const BackButton = styled.button`
  background-color: #e86f44;
  border: none;
  border-radius: 50%;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0.25rem 0.9375rem rgba(159, 77, 14, 0.15);
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 30rem) {
    width: 3rem;
    height: 3rem;
    
    svg {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  @media (min-width: 37.5rem) {
    width: 3.5rem;
    height: 3.5rem;
    
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px;
  overflow-y: auto;
`

export const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`

export const DateLabel = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #60463d;
  line-height: 24px;
  text-align: center;
`

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const ChatBubbleContainer = styled.div<{ type: 'user' | 'ai' }>`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  justify-content: ${props => props.type === 'user' ? 'flex-end' : 'flex-start'};
  width: 100%;
`

export const CompanionAvatar = styled.div`
  width: 24px;
  height: 28px;
  position: relative;
  flex-shrink: 0;
  margin-top: 8px;
  
  /* Mini companion avatar */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 19.2px;
    height: 12.7px;
    background-color: #5cb7a5;
    border-radius: 3px;
  }
  
  /* Face */
  &::after {
    content: '';
    position: absolute;
    top: 2.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 11.3px;
    background: url('http://localhost:3845/assets/42fcc77f8b367fe4ee81786dcd72dcb2899e9332.svg');
    background-size: cover;
  }
`

export const ChatBubble = styled.div<{ type: 'user' | 'ai' }>`
  background-color: ${props => props.type === 'user' ? '#f9f9f9' : '#f3b6a0'};
  padding: 16px;
  border-radius: 20px;
  border-top-left-radius: ${props => props.type === 'user' ? '20px' : '20px'};
  border-top-right-radius: ${props => props.type === 'user' ? '20px' : '20px'};
  border-bottom-left-radius: ${props => props.type === 'user' ? '20px' : '20px'};
  border-bottom-right-radius: ${props => props.type === 'user' ? '20px' : '20px'};
  ${props => props.type === 'user' ? 'border-top-right-radius: 4px;' : 'border-top-left-radius: 4px;'}
  box-shadow: 0px 4px 15px rgba(159, 77, 14, 0.15);
  max-width: 280px;
  word-wrap: break-word;
`

export const ChatText = styled.div<{ type: 'user' | 'ai' }>`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.type === 'user' ? '#60463d' : '#9f4728'};
  line-height: 22px;
  white-space: pre-wrap;
`

export const GestureBar = styled.div`
  height: 21px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeIndicator = styled.div`
  width: 139px;
  height: 5px;
  background-color: black;
  border-radius: 100px;
`