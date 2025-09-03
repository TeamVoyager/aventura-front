import styled from '@emotion/styled'

export const NavigationBarContainer = styled.div`
    width: 100%;
    max-width: 21.25rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.25rem;
    background: #F9F9F9;
    box-shadow: 0 0.25rem 0.9375rem rgba(159, 77, 14, 0.15);
    padding: 0 1.5rem;
    margin: 0 auto;
    gap: 2rem;

    @media (min-width: 30rem) {
        max-width: 25rem;
        height: 5rem;
        padding: 0 2rem;
        gap: 2.5rem;
    }

    @media (min-width: 37.5rem) {
        max-width: 28rem;
        height: 5.5rem;
        padding: 0 2.5rem;
        gap: 3rem;
    }
`

export const NavigationBarIcon = styled.div<{ 
  isActive?: boolean; 
  isManagement?: boolean;
  isMenu?: boolean;
  isMessage?: boolean;
}>`
    position: relative;
    ${props => (props.isManagement || props.isMenu || props.isMessage) ? `
        background: #fbe4d0;
        border-radius: 1.25rem;
        padding: 0 1rem;
        height: 3rem;
        width: 9.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
    ` : ''}
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${props => (props.isManagement || props.isMenu || props.isMessage) ? '100%' : '2.25rem'};
        height: ${props => (props.isManagement || props.isMenu || props.isMessage) ? '100%' : '2.25rem'};
        position: relative;
        gap: ${props => (props.isManagement || props.isMenu || props.isMessage) ? '0.375rem' : '0'};
        text-decoration: none;
        
        svg {
            width: 1.5rem;
            height: 1.5rem;
            ${props => props.isActive ? `
                path {
                    stroke: #e86f44;
                }
            ` : ''}
        }
    }

    @media (min-width: 30rem) {
        ${props => (props.isManagement || props.isMenu || props.isMessage) ? `
            height: 3.5rem;
            width: 10.5rem;
            padding: 0 1.25rem;
        ` : ''}
        
        a {
            width: ${props => (props.isManagement || props.isMenu || props.isMessage) ? '100%' : '2.5rem'};
            height: ${props => (props.isManagement || props.isMenu || props.isMessage) ? '100%' : '2.5rem'};
            text-decoration: none;
            
            svg {
                width: 1.75rem;
                height: 1.75rem;
            }
        }
    }

    @media (min-width: 37.5rem) {
        ${props => (props.isManagement || props.isMenu || props.isMessage) ? `
            height: 4rem;
            width: 12rem;
            padding: 0 1.5rem;
        ` : ''}
        
        a {
            width: ${props => (props.isManagement || props.isMenu || props.isMessage) ? '100%' : '3rem'};
            height: ${props => (props.isManagement || props.isMenu || props.isMessage) ? '100%' : '3rem'};
            text-decoration: none;
            
            svg {
                width: 2rem;
                height: 2rem;
            }
        }
    }
`

export const ManagementLabel = styled.div`
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #e86f44;
    line-height: 1.375rem;
    white-space: nowrap;

    @media (min-width: 30rem) {
        font-size: 1.125rem;
        line-height: 1.5rem;
    }

    @media (min-width: 37.5rem) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
`

export const MenuLabel = styled.div`
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #e86f44;
    line-height: 1.375rem;
    white-space: nowrap;

    @media (min-width: 30rem) {
        font-size: 1.125rem;
        line-height: 1.5rem;
    }

    @media (min-width: 37.5rem) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
`

export const MessageLabel = styled.div`
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #e86f44;
    line-height: 1.375rem;
    white-space: nowrap;

    @media (min-width: 30rem) {
        font-size: 1.125rem;
        line-height: 1.5rem;
    }

    @media (min-width: 37.5rem) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
`