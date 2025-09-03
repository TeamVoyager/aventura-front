import * as S from './style'
import SvgMenu from '@assets/icon/components/SvgMenu'
import SvgMessage from '@assets/icon/components/SvgMessage'
import SvgManagement from '@assets/icon/components/SvgManagement'
import { Link } from 'react-router-dom'

type CurrentPage = 'message' | 'menu' | 'management';

interface NavigationBarProps {
  currentPage?: CurrentPage;
}

const NavigationBar = ({ currentPage }: NavigationBarProps) => {
  return (
    <S.NavigationBarContainer>
        <S.NavigationBarIcon 
          isActive={currentPage === 'message'}
          isMessage={currentPage === 'message'}
        >
            <Link to="/">
                <SvgMessage />
                {currentPage === 'message' && (
                  <S.MessageLabel>동반자 대화</S.MessageLabel>
                )}
            </Link>
        </S.NavigationBarIcon>
        <S.NavigationBarIcon 
          isActive={currentPage === 'management'}
          isManagement={currentPage === 'management'}
        >
            <Link to="/management">
                <SvgManagement />
                {currentPage === 'management' && (
                  <S.ManagementLabel>동반자 관리</S.ManagementLabel>
                )}
            </Link>
        </S.NavigationBarIcon>
        <S.NavigationBarIcon 
          isActive={currentPage === 'menu'}
          isMenu={currentPage === 'menu'}
        >
            <Link to="/menu">
                <SvgMenu />
                {currentPage === 'menu' && (
                  <S.MenuLabel>사용자 옵션</S.MenuLabel>
                )}
            </Link>
        </S.NavigationBarIcon>
    </S.NavigationBarContainer>
  )
}

export default NavigationBar;