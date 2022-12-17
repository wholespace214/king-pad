import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { SupportCardImg } from 'src/Config/Images';
import { KingButton } from '../CustomButton';

export const SupportCard = () => {
  return (
    <SupportCardContainer>
      <MediumText>Need support?</MediumText>
      <SupportImg src={SupportCardImg} alt="support-card" />
      <KingButton>Contact us</KingButton>
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
