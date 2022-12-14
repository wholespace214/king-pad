import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { SiMedium } from 'react-icons/si';
import { Twitter, Telegram, GitHub, YouTube } from '@mui/icons-material';
import { LaunchPadIcon } from 'src/Config/Images';

export const SafePlaceCard = () => {
  return (
    <SafeCardContainer>
      <CardDetails>
        <BigText>
          <p>A Safe place</p>
          <p>to join the best.</p>
        </BigText>
        <SmallText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna uis consequat.
        </SmallText>
        <SocialLinks>
          <SocialIcon href={'https://t.me/KlNGfinance'} rel="noopener noreferrer">
            <Telegram />
          </SocialIcon>
          <SocialIcon href={'https://twitter.com/kingfinance'} rel="noopener noreferrer">
            <Twitter />
          </SocialIcon>
          <SocialIcon href={'https://www.youtube.com/@kingfinanceco'} rel="noopener noreferrer">
            <YouTube />
          </SocialIcon>
          <SocialIcon rel="noopener noreferrer">
            <GitHub />
          </SocialIcon>
          <SocialIcon href={'https://medium.com/@kingfinance'} rel="noopener noreferrer">
            <SiMedium size={24} />
          </SocialIcon>
        </SocialLinks>
      </CardDetails>
      <CardImage>
        <Img src={LaunchPadIcon} alt="lanuchpad-icon" />
      </CardImage>
    </SafeCardContainer>
  );
};

const SafeCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  width: '100%',
  height: '289px',
  display: 'flex',

  [theme.breakpoints.down(720)]: {
    flexDirection: 'column',
    height: 'auto'
  }
}));

const CardDetails = styled(Box)(({ theme }) => ({
  width: '45%',
  height: '100%',
  padding: '56px 0 56px 47px',
  [theme.breakpoints.down(720)]: {
    width: '100%',
    padding: '56px 47px'
  },
  [theme.breakpoints.down('xs')]: {
    padding: '28px 36px'
  }
}));

const BigText = styled(Box)(({ theme }) => ({
  fontFamily: 'gotham-bold',
  fontSize: '30px',
  textAlign: 'left',
  lineHeight: '30px',
  [theme.breakpoints.down('desktop')]: {
    fontSize: '25px'
  },
  [theme.breakpoints.down(720)]: {
    fontSize: '30px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '25px'
  },
  [theme.breakpoints.down('ls')]: {
    fontSize: '22px'
  }
}));

const SmallText = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  marginTop: '9px',
  [theme.breakpoints.down('desktop')]: {
    fontSize: '12px'
  },
  [theme.breakpoints.down(720)]: {
    fontSize: '14px',
    marginTop: '20px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '12px'
  },
  [theme.breakpoints.down('ls')]: {
    fontSize: '10px'
  }
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '25px',
  marginTop: '20px',
  color: '#8462F6'
  //   [theme.breakpoints.down('ls')]: {
  //     gap: '15px'
  //   }
}));

const CardImage = styled(Box)(({ theme }) => ({
  width: '55%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  [theme.breakpoints.down(720)]: {
    width: '100%'
  }
}));

const SocialIcon = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  width: '24px',
  height: 'auto',
  color: 'inherit'
}));

const Img = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxWidth: '575px'
  //   [theme.breakpoints.down('xl')]: {
  //     height: '250px'
  //   }
}));
