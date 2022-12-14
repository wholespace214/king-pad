import { styled } from '@mui/system';
import { Box } from '@mui/material';

interface NavItemProps {
  icon: string;
  name: string;
  onClick: () => void;
}

export const NavItem = ({ icon, name, onClick }: NavItemProps) => {
  return (
    <NavItemContainer onClick={onClick}>
      <Img src={icon} alt="nav-icon" />
      <NavText>{name}</NavText>
    </NavItemContainer>
  );
};

const NavItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '4px',
  alignItems: 'flex-end',
  cursor: 'pointer'
}));

const Img = styled('img')(({ theme }) => ({
  width: '100%',
  height: '20px',
  [theme.breakpoints.down('ls')]: {
    height: '15px'
  }
}));

const NavText = styled(Box)(({ theme }) => ({
  fontSize: '13px',
  color: '#FFFFFF',
  fontFamily: 'gotham-bold',
  [theme.breakpoints.down('ls')]: {
    fontSize: '10px'
  }
}));
