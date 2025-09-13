import styled from '@emotion/styled'

export const Container = styled.div`
    background-color: #e9eae4;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 525px; /* 37.5rem = 525px */
    margin: 0 auto;
    padding: 16px;

    @media (min-width: 768px) {
        max-width: 800px; /* PC용 최대 폭 */
        padding: 24px;
    }
    @media (min-width: 1024px) {
        max-width: 1200px;
        padding: 32px;
    }
`;

export const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    gap: 40px;

    @media (max-width: 480px) {
        padding: 24px 12px;
        gap: 24px;
    }
    @media (min-width: 768px) {
        padding: 60px 40px;
        gap: 50px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    
    gap: 12px;
    width: 100%;
`;

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 32px;
    gap: 2rem;

    @media (min-width: 30rem) {
        gap: 2.5rem;
    }

    @media (min-width: 37.5rem) {
        gap: 3rem;
    }
`

export const ProfileImageContainer = styled.div`
    position: relative;
    width: 10.5rem;
    height: 10.5rem;

    @media (min-width: 30rem) {
        width: 12rem;
        height: 12rem;
    }

    @media (min-width: 37.5rem) {
        width: 14rem;
        height: 14rem;
    }
`

export const ProfileImageBorder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.1875rem solid #e86f44;
    border-radius: 50%;
    z-index: 1;

    @media (min-width: 30rem) {
        border-width: 0.2rem;
    }

    @media (min-width: 37.5rem) {
        border-width: 0.25rem;
    }
`

export const ProfileImage = styled.div`
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: calc(100% - 0.5rem);
    height: calc(100% - 0.5rem);
    border-radius: 50%;
    background: url('http://localhost:3845/assets/02e07d7be7de3deb3ddb01ddb8ba69096e55ca12.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    z-index: 2;

    @media (min-width: 30rem) {
        top: 0.3rem;
        left: 0.3rem;
        width: calc(100% - 0.6rem);
        height: calc(100% - 0.6rem);
    }

    @media (min-width: 37.5rem) {
        top: 0.375rem;
        left: 0.375rem;
        width: calc(100% - 0.75rem);
        height: calc(100% - 0.75rem);
    }
`

export const EditButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 2.75rem;
    height: 2.75rem;
    background-color: #e86f44;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 0.25rem 0.9375rem rgba(159, 77, 14, 0.15);
    z-index: 3;

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

export const UserName = styled.div`
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #60463d;
    line-height: 2rem;
    text-align: center;

    @media (min-width: 30rem) {
        font-size: 1.75rem;
        line-height: 2.25rem;
    }

    @media (min-width: 37.5rem) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

export const FooterNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;
`;

export const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
`;

export const InputContainer = styled.div`
    background-color: #f9f9f9;
    border-radius: 8px;
    align-items: center;
    display: flex;
    padding: 0px 12px;
    height: 44px;
    position: relative;
    border: 1px solid #C1ABA3;

    @media (min-width: 768px) {
        padding: 0px 16px;
        height: 50px;
    }
    @media (min-width: 1024px) {
        padding: 0px 20px;
        height: 56px;
    }
`;

export const Input = styled.input`
    background: transparent;
    border: none;
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #60463d;
    line-height: 19px;
    width: 100%;
    height: 19px;
    outline: none;

    &::placeholder {
        color: #c1aba3;
    }

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 22px;
        height: 22px;
    }
    @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 24px;
        height: 24px;
    }
`;


export const Title = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #E86F44;
    line-height: 48px;

    @media (max-width: 480px) {
        font-size: 32px;
        line-height: 36px;
    }
    @media (min-width: 768px) {
        font-size: 64px;
        line-height: 68px;
    }
    @media (min-width: 1024px) {
        font-size: 80px;
        line-height: 88px;
    }
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #60463d;
    line-height: 1.5rem;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 1.75rem;
    }
    @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 2rem;
    }
`;

export const BelowText = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #60463d;

    @media (min-width: 768px) {
        font-size: 16px;
    }
    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;

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

    @media (min-width: 768px) {
        font-size: 18px;
        height: 50px;
    }
    @media (min-width: 1024px) {
        font-size: 20px;
        height: 56px;
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;
`;

export const AlertTText = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: red;
    line-height: 1.5rem;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 1.75rem;
    }
    @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 2rem;
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

    @media (min-width: 30rem) {
        width: 160px;
        height: 6px;
    }

    @media (min-width: 37.5rem) {
        width: 180px;
        height: 7px;
    }
`