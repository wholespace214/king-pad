import React from 'react';
import { styled } from '@mui/system';
import { Box, IconButton } from '@mui/material';
import { LOGO, MenuKing, MenuKingPass, BnbLogo } from 'src/Config/Images';
import { Menu } from '@mui/icons-material';
import { NavItem } from 'src/Components/NavItem';
import { CustomSwitch } from 'src/Components/Switch';
import { KingButton } from 'src/Components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { NavModal } from 'src/Components/NavModal';

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Container>
      <KingPad>
        <MoreButton onClick={() => setOpen(!isOpen)}>
          <Menu />
        </MoreButton>
        <KingpadLogo src={LOGO} alt="kingpad-logo" onClick={() => navigate('/')} />
      </KingPad>
      <NavItems>
        <Navgroup>
          <NavItem icon={MenuKing} name="$KING" onClick={() => navigate('/')} />
          <NavItem icon={MenuKingPass} name="$KINGPASS" onClick={() => navigate('/')} />
          <CustomSwitch title={'toggle1'} />
        </Navgroup>
        <CustomKingButton>CREATE</CustomKingButton>
        <KingButton>CONNECT</KingButton>
        <BinanceLogo src={BnbLogo} />
      </NavItems>
      <NavModal isOpen={isOpen} setOpen={setOpen} />
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#1A003E',
  position: 'fixed',
  width: '100%',
  maxHeight: '75px',
  top: 0,
  zIndex: 1000000,
  padding: '20px 50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    padding: '20px 30px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '20px 12px'
  }
}));

const KingPad = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center'
}));

const MoreButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  color: '#FFFFFF',
  [theme.breakpoints.down('lg')]: {
    minWidth: '24px',
    minHeight: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const KingpadLogo = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '30px',
  [theme.breakpoints.down('mobile')]: {
    height: '25px'
  },
  cursor: 'pointer'
}));

const NavItems = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('mobile')]: {
    gap: '0.5rem'
  }
}));

const Navgroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}));

const BinanceLogo = styled('img')(({ theme }) => ({
  width: '32px',
  height: 'auto'
}));

const CustomKingButton = styled(KingButton)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));
