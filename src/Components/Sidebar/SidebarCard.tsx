import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { MenuKingPass } from 'src/Config/Images';
import { KingButton } from '../CustomButton';

export const SidebarCard = () => {
  return (
    <>
      <KingPassCard>
        <KingPassLogo>
          <Img src={MenuKingPass} alt="kingpass-svg" />
        </KingPassLogo>
        <KingPassTitle>Heard of Kingpass ?</KingPassTitle>
        <CustomKingButton style={{ my: '18px', fontSize: '14px' }}>Discover</CustomKingButton>
      </KingPassCard>
    </>
  );
};

const KingPassCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: theme.palette.success.main,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  width: '100%',
  height: '228px',
  marginTop: '20px'
}));

const KingPassLogo = styled(Box)(({ theme }) => ({
  width: '72px',
  height: 'auto'
}));

const KingPassTitle = styled(Box)(({ theme }) => ({
  fontSize: '30px',
  fontFamily: 'gotham-bold',
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
  letterSpacing: '-0.3px',
  lineHeight: '30px',
  marginTop: '-10px',
  maxWidth: '165px'
}));

const Img = styled('img')({
  width: '100%',
  height: '100%'
});

const CustomKingButton = styled(KingButton)(({ theme }) => ({
  [theme.breakpoints.down('mobile')]: {
    fontSize: '14px',
    height: '36px'
  }
}));
