import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: #e9eae4;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 37.5rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 812px;
  background: url('http://localhost:3845/assets/b72b191e42c425e5ee9ef1c8aaf5da7af7c55a9d.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
`


export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.75rem;
  position: relative;
  z-index: 1;

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

export const HistoryButton = styled.button`
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
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0.5rem;

  @media (min-width: 30rem) {
    gap: 1.25rem;
    padding: 1rem;
  }

  @media (min-width: 37.5rem) {
    gap: 1.5rem;
    padding: 1.5rem;
  }
`

export const CompanionContainer = styled.div`
  position: relative;
  width: 12.5rem;
  height: 15rem;
  margin-bottom: 2.5rem;
`

export const CompanionBase = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10rem;
  height: 6.8125rem;
  background-color: #5cb7a5;
  border-radius: 1.5rem;
  z-index: 1;
`

export const CompanionFace = styled.div`
  position: absolute;
  top: 1.3125rem;
  left: 50%;
  transform: translateX(-50%);
  width: 6.25rem;
  height: 6.0625rem;
  background: url('http://localhost:3845/assets/c9a1d065de83b6ea6b95a4517daae5238edf2a46.svg');
  background-size: cover;
  z-index: 3;
`

export const CompanionBody = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 12.5rem;
  height: 6.0625rem;
  background: url('http://localhost:3845/assets/48937e773785607d5bff975e03d54919a1e7a08e.svg');
  background-size: cover;
  z-index: 2;
`

export const CompanionArms = styled.div`
  position: absolute;
  bottom: 0;
  left: 2.5rem;
  width: 7.5rem;
  height: 6.0625rem;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`

export const CompanionArm = styled.div`
  width: 1.25rem;
  height: 6.0625rem;
  background-color: #5cb7a5;
`

export const CompanionHat = styled.div`
  position: absolute;
  top: 0;
  left: 1.125rem;
  width: 10.1875rem;
  height: 4.5rem;
  background: url('http://localhost:3845/assets/02a9cac354b3b93aeaa3dc3c1bd0de7f3e907f04.svg');
  background-size: cover;
  z-index: 4;
`

export const ChatInputContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 1.25rem;
  padding: 1rem;
  width: 20rem;
  height: 7.5rem;
  position: relative;
  box-shadow: 0 0.25rem 0.9375rem rgba(159, 77, 14, 0.15);
  border: 0.0625rem solid #e1c7b7;

  @media (min-width: 30rem) {
    width: 24rem;
    height: 8.5rem;
    padding: 1.25rem;
  }

  @media (min-width: 37.5rem) {
    width: 28rem;
    height: 10rem;
    padding: 1.5rem;
  }
`

export const ChatInput = styled.input`
  background: transparent;
  border: none;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #60463d;
  line-height: 1.375rem;
  width: 100%;
  height: 1.375rem;
  outline: none;
  
  &::placeholder {
    color: #c1aba3;
  }

  @media (min-width: 30rem) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 37.5rem) {
    font-size: 1.25rem;
    line-height: 1.75rem;
    height: 1.75rem;
  }
`

export const InputButtons = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;

  @media (min-width: 30rem) {
    bottom: 1.25rem;
    right: 1.25rem;
    gap: 0.625rem;
  }

  @media (min-width: 37.5rem) {
    bottom: 1.5rem;
    right: 1.5rem;
    gap: 0.75rem;
  }
`

export const CircleButton = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  background-color: #f0e3db;
  border: 0.0625rem solid #e1c7b7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0.25rem 0.9375rem rgba(159, 77, 14, 0.15);
  
  &:hover {
    background-color: #e1c7b7;
  }
  
  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (min-width: 30rem) {
    width: 3rem;
    height: 3rem;
    
    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  @media (min-width: 37.5rem) {
    width: 3.5rem;
    height: 3.5rem;
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`

export const GestureBar = styled.div`
  height: 21px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`

export const HomeIndicator = styled.div`
  width: 139px;
  height: 5px;
  background-color: black;
  border-radius: 100px;
`