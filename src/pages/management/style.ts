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

export const RecruitButton = styled.button`
  background-color: #e86f44;
  color: #f9f9f9;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 0.25rem 0.9375rem rgba(159, 77, 14, 0.15);
  cursor: pointer;
  height: 2.75rem;

  @media (min-width: 30rem) {
    padding: 1rem 1.25rem;
    gap: 0.625rem;
    font-size: 1.125rem;
    height: 3rem;
  }

  @media (min-width: 37.5rem) {
    padding: 1.25rem 1.5rem;
    gap: 0.75rem;
    font-size: 1.25rem;
    height: 3.5rem;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0.5rem;

  @media (min-width: 30rem) {
    gap: 1.5rem;
    padding: 0.625rem;
  }

  @media (min-width: 37.5rem) {
    gap: 1.75rem;
    padding: 0.75rem;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 30rem) {
    gap: 0.625rem;
  }

  @media (min-width: 37.5rem) {
    gap: 0.75rem;
  }
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: #60463d;
  line-height: 1.5rem;

  @media (min-width: 30rem) {
    font-size: 1.25rem;
    line-height: 1.625rem;
  }

  @media (min-width: 37.5rem) {
    font-size: 1.375rem;
    line-height: 1.75rem;
  }
`

export const SectionIndicators = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Indicator = styled.div`
  width: 0.5rem;
  height: 1.5rem;
  background-color: #e86f44;
  border-radius: 0.25rem;

  @media (min-width: 30rem) {
    width: 0.5625rem;
    height: 1.625rem;
  }

  @media (min-width: 37.5rem) {
    width: 0.625rem;
    height: 1.75rem;
  }
`

export const TicketContainer = styled.div`
  width: 100%;
  max-width: 22.5rem;
  height: 11.875rem;
  position: relative;
  margin: 0 auto 1.25rem auto;

  @media (min-width: 30rem) {
    max-width: 27rem;
    height: 14.25rem;
    margin: 0 auto 1.5rem auto;
  }

  @media (min-width: 37.5rem) {
    max-width: 31.5rem;
    height: 16.625rem;
    margin: 0 auto 1.75rem auto;
  }
`

export const TicketBackgroundSvg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  svg {
    width: 17.4375rem;
    height: 11.875rem;

    @media (min-width: 30rem) {
      width: 20.925rem;
      height: 14.25rem;
    }

    @media (min-width: 37.5rem) {
      width: 24.4125rem;
      height: 16.625rem;
    }
  }
`

export const TicketInfo = styled.div`
  position: absolute;
  top: 0.6875rem;
  left: 0.75rem;
  width: 16rem;
  height: 10.5rem;
  padding: 0.75rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  z-index: 2;

  @media (min-width: 30rem) {
    top: 0.825rem;
    left: 0.9rem;
    width: 19.2rem;
    height: 12.6rem;
    padding: 1rem;
    gap: 0.625rem;
  }

  @media (min-width: 37.5rem) {
    top: 0.9625rem;
    left: 1.05rem;
    width: 22.4rem;
    height: 14.7rem;
    padding: 1.25rem;
    gap: 0.75rem;
  }
`

export const CompanionAvatar = styled.div<{ avatarColor: string }>`
  width: 6.25rem;
  height: 7.5rem;
  position: relative;
  flex-shrink: 0;

  @media (min-width: 30rem) {
    width: 7.5rem;
    height: 9rem;
  }

  @media (min-width: 37.5rem) {
    width: 8.75rem;
    height: 10.5rem;
  }
`

export const AvatarBase = styled.div<{ avatarColor: string }>`
  position: absolute;
  bottom: 0.625rem;
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
  height: 3.375rem;
  background-color: ${props => props.avatarColor};
  border-radius: 0.75rem;

  @media (min-width: 30rem) {
    width: 6rem;
    height: 4.125rem;
    border-radius: 0.9375rem;
  }

  @media (min-width: 37.5rem) {
    width: 7rem;
    height: 4.875rem;
    border-radius: 1.125rem;
  }
`

export const AvatarFace = styled.div`
  position: absolute;
  top: 0.625rem;
  left: 50%;
  transform: translateX(-50%);
  width: 3.125rem;
  height: 3rem;
  background-color: #f4c2a1;
  border-radius: 50% 50% 40% 40%;

  @media (min-width: 30rem) {
    width: 3.75rem;
    height: 3.625rem;
  }

  @media (min-width: 37.5rem) {
    width: 4.375rem;
    height: 4.25rem;
  }
`

export const AvatarBody = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 6.25rem;
  height: 3rem;
  background-color: #f4c2a1;
  border-radius: 1.25rem 1.25rem 0 0;

  @media (min-width: 30rem) {
    width: 7.5rem;
    height: 3.625rem;
    border-radius: 1.5rem 1.5rem 0 0;
  }

  @media (min-width: 37.5rem) {
    width: 8.75rem;
    height: 4.25rem;
    border-radius: 1.75rem 1.75rem 0 0;
  }
`

export const AvatarArms = styled.div`
  position: absolute;
  bottom: 0;
  left: 1.25rem;
  width: 3.75rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 30rem) {
    left: 1.5rem;
    width: 4.5rem;
    height: 3.625rem;
  }

  @media (min-width: 37.5rem) {
    left: 1.75rem;
    width: 5.25rem;
    height: 4.25rem;
  }
`

export const AvatarArm = styled.div<{ avatarColor: string }>`
  width: 0.625rem;
  height: 3rem;
  background-color: ${props => props.avatarColor};
  border-radius: 0.3125rem;

  @media (min-width: 30rem) {
    width: 0.75rem;
    height: 3.625rem;
    border-radius: 0.375rem;
  }

  @media (min-width: 37.5rem) {
    width: 0.875rem;
    height: 4.25rem;
    border-radius: 0.4375rem;
  }
`

export const AvatarHat = styled.div`
  position: absolute;
  top: 0;
  left: 0.5625rem;
  width: 5.125rem;
  height: 2.25rem;
  background-color: #8B4513;
  border-radius: 50% 50% 0 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    width: 5.625rem;
    height: 0.5rem;
    background-color: #8B4513;
    border-radius: 50%;
  }

  @media (min-width: 30rem) {
    left: 0.6875rem;
    width: 6.125rem;
    height: 2.75rem;
    
    &::after {
      top: 1.5rem;
      width: 6.75rem;
      height: 0.625rem;
    }
  }

  @media (min-width: 37.5rem) {
    left: 0.8125rem;
    width: 7.125rem;
    height: 3.25rem;
    
    &::after {
      top: 1.75rem;
      width: 7.875rem;
      height: 0.75rem;
    }
  }
`

export const TicketDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  min-width: 0;

  @media (min-width: 30rem) {
    gap: 0.625rem;
  }

  @media (min-width: 37.5rem) {
    gap: 0.75rem;
  }
`

export const CompanionName = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #60463d;
  line-height: 1.375rem;

  @media (min-width: 30rem) {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }

  @media (min-width: 37.5rem) {
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: #60463d;
`

export const CompanionDate = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #c1aba3;
  line-height: 1.375rem;

  @media (min-width: 30rem) {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }

  @media (min-width: 37.5rem) {
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`

export const ActionButtonSvg = styled.div`
  position: absolute;
  top: 0;
  right: -0.0625rem;
  width: 5.375rem;
  height: 11.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  svg {
    position: absolute;
    width: 5.375rem;
    height: 11.875rem;
    z-index: 1;
  }

  @media (min-width: 30rem) {
    right: -0.075rem;
    width: 6.45rem;
    height: 14.25rem;
    
    svg {
      width: 6.45rem;
      height: 14.25rem;
    }
  }

  @media (min-width: 37.5rem) {
    right: -0.0875rem;
    width: 7.525rem;
    height: 16.625rem;
    
    svg {
      width: 7.525rem;
      height: 16.625rem;
    }
  }
`


export const ActionContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
  position: relative;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    flex-shrink: 0;
  }

  @media (min-width: 30rem) {
    gap: 0.625rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  @media (min-width: 37.5rem) {
    gap: 0.75rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`

export const ActionText = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #f9f9f9;
  line-height: 1.375rem;
  white-space: nowrap;

  @media (min-width: 30rem) {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }

  @media (min-width: 37.5rem) {
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
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