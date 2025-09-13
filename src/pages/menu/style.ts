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

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 0.5rem;

    @media (min-width: 30rem) {
        gap: 2.5rem;
        padding: 2.5rem 1rem;
    }

    @media (min-width: 37.5rem) {
        gap: 3rem;
        padding: 3rem 1.5rem;
    }
`

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
`

export const OptionsContainer = styled.div`
    background-color: #f9f9f9;
    border-radius: 1.25rem;
    padding: 1rem;
    width: 100%;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (min-width: 30rem) {
        max-width: 24rem;
        padding: 1.25rem;
        gap: 0.625rem;
        border-radius: 1.5rem;
    }

    @media (min-width: 37.5rem) {
        max-width: 28rem;
        padding: 1.5rem;
        gap: 0.75rem;
        border-radius: 1.75rem;
    }
`

export const OptionButton = styled.button`
    background: transparent;
    border: none;
    padding: 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: 2.75rem;

    &:hover {
        background-color: rgba(96, 70, 61, 0.05);
    }

    @media (min-width: 30rem) {
        padding: 0.875rem;
        height: 3rem;
        border-radius: 0.625rem;
    }

    @media (min-width: 37.5rem) {
        padding: 1rem;
        height: 3.5rem;
        border-radius: 0.75rem;
    }
`

export const OptionContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (min-width: 30rem) {
        gap: 0.875rem;
    }

    @media (min-width: 37.5rem) {
        gap: 1rem;
    }
`

export const OptionIcon = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (min-width: 30rem) {
        width: 1.75rem;
        height: 1.75rem;
    }

    @media (min-width: 37.5rem) {
        width: 2rem;
        height: 2rem;
    }
`

export const OptionLabel = styled.div`
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #60463d;
    line-height: 1.375rem;

    @media (min-width: 30rem) {
        font-size: 1.125rem;
        line-height: 1.5rem;
    }

    @media (min-width: 37.5rem) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
`

export const ChevronIcon = styled.div`
    font-size: 1.25rem;
    color: #60463d;
    font-weight: normal;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 30rem) {
        font-size: 1.375rem;
        width: 1.75rem;
        height: 1.75rem;
    }

    @media (min-width: 37.5rem) {
        font-size: 1.5rem;
        width: 2rem;
        height: 2rem;
    }
`

export const Divider = styled.div`
    height: 0.0625rem;
    background-color: #c1aba3;
    width: 100%;
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