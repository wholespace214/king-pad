import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { styled } from '@mui/system';
import { Box, Dialog, Slide } from '@mui/material';
import { NavItem } from '../NavItem';
import { MenuKing, MenuKingPass } from 'src/Config/Images';
import { useNavigate } from 'react-router-dom';
import { CustomSwitch } from '../Switch';
import { Close } from '@mui/icons-material';
import { SidebarItems } from '../Sidebar';
import { SidebarCard } from '../Sidebar/SidebarCard';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface NavModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavModal = ({ isOpen, setOpen }: NavModalProps) => {
  const navigate = useNavigate();
  return (
    <Dialog fullScreen open={isOpen} onClose={() => setOpen(false)} TransitionComponent={Transition}>
      <DialogContainer>
        <Navbar>
          <NavbarContainer>
            <NavItem icon={MenuKing} name="$KING" onClick={() => navigate('/')} />
            <NavItem icon={MenuKingPass} name="$KINGPASS" onClick={() => navigate('/')} />
            <CustomSwitch title="toggle2" />
          </NavbarContainer>
          <CloseButton onClick={() => setOpen(false)}>
            <Close />
            <SmallText>CLOSE</SmallText>
          </CloseButton>
        </Navbar>
        <DialogContent>
          <SidebarItems setOpen={setOpen} />
          <SidebarCard />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
};

const DialogContainer = styled(Box)(({ theme }) => ({
  padding: '20px',
  width: '100%',
  marginTop: '75px',
  backgroundColor: theme.palette.danger.main
}));

const Navbar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',
  [theme.breakpoints.down('mobile')]: {
    gap: '10px'
  },
  [theme.breakpoints.down('ls')]: {
    gap: '3px'
  }
}));

const NavbarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1A003E',
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '22px',
  height: '44px',
  width: '100%',
  padding: '0 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('mobile')]: {
    padding: '0 20px'
  },
  [theme.breakpoints.down('ls')]: {
    padding: '0 15px'
  }
}));

const CloseButton = styled(Box)(({ theme }) => ({
  width: '30px',
  height: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '2rem',
  color: theme.palette.dark.contrastText,
  cursor: 'pointer',
  [theme.breakpoints.down('mobile')]: {
    marginRight: 0
  }
}));

const SmallText = styled(Box)({
  fontSize: '8px',
  fontFamily: 'gotham-bold'
});

const DialogContent = styled(Box)(({ theme }) => ({
  padding: '22px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}));
