import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { SupportCardImg } from 'src/Config/Images';
import { KingButton } from '../CustomButton';

export const SupportCard = () => {
  return (
    <SupportCardContainer>
      <MediumText>Need support?</MediumText>
      <SupportImg src={SupportCardImg} alt="support-card" />
      <ContactButton>Contact us</ContactButton>
    </SupportCardContainer>
  );
};

const SupportCardContainer = styled(Box)(({ theme }) => ({
  padding: '72px 90px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
  boxShadow: '0px 3px 6px #00000029',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '26px',
  [theme.breakpoints.down('xl')]: {
    padding: '60px 72px'
  },
  [theme.breakpoints.down('desktop')]: {
    padding: '48px 40px'
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const MediumText = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '30px',
  fontFamily: 'gotham-bold',
  [theme.breakpoints.down('desktop')]: {
    fontSize: '24px'
  }
}));

const SupportImg = styled('img')(({ theme }) => ({
  width: '230px',
  height: '230px',
  [theme.breakpoints.down('desktop')]: {
    width: '200px',
    height: '200px'
  }
}));

const ContactButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  fontFamily: 'gotham-bold',
  fontSize: '14px',
  letterSpacing: '0.05rem',
  backgroundColor: '#8462F6',
  color: '#FFF',
  padding: '2px 18px',
  height: '48px',
  width: '140px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#8462F6'
  },
  [theme.breakpoints.down('mobile')]: {
    padding: '0 12px',
    fontSize: '8px',
    height: '28px'
  }
}));
