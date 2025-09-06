import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: #e9eae4;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 37.5rem;
    margin: 0 auto;
    padding: 16px 16px 0px 16px;
`
export const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    gap: 40px;

    @media (min-width: 30rem) {
        padding: 2.25rem;
        gap: 1rem;
    }

    @media (min-width: 37.5rem) {
        padding: 40px 20px;
        gap: 1.25rem;
    }
`

export const FooterNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;
`



export const Content = styled.div`
    //flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    //overflow-y: auto;
    width: 100%;
`

export const InputSection = styled.div`
    //flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
`

export const InputContainer = styled.div`
    background-color: #f9f9f9;
    border-radius: 8px;
    align-items: center;
    padding: 12px;
    height: 44px;
    position: relative;
    border: 1px solid #C1ABA3;

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

export const Input = styled.input`
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

export const Title = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #E86F44;
    line-height: 48px;

    @media (min-width: 30rem) {
        font-size: 1.25rem;
        line-height: 1.625rem;
    }

    @media (min-width: 37.5rem) {
        font-size: 3.4rem;
        line-height: 3rem;
    }
`
export const Text = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 16px;
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

export const BelowText = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #60463d;

    @media (min-width: 30rem) {
        font-size: 1.25rem;
        line-height: 1.625rem;
    }

    @media (min-width: 37.5rem) {
        font-size: 1.375rem;
        line-height: 1.75rem;
    }
`

export const SubmitButton = styled.button`
    background-color: #e86f44;
    color: #f9f9f9;
    border-radius: 0.5rem;
    border: none;
    gap: 0.5rem;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.25rem 0.9375rem rgba(159, 77, 14, 0.15);

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

export const GotoRegister = styled.a`
    display: flex;
    align-items: center;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #5CB7A5;

    @media (min-width: 30rem) {
        font-size: 1.25rem;
        line-height: 1.625rem;
    }

    @media (min-width: 37.5rem) {
        font-size: 1.375rem;
        line-height: 1.75rem;
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