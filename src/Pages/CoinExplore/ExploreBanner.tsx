import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect } from 'react';
import { Language, Twitter, Telegram, YouTube } from '@mui/icons-material';
import { FaDiscord } from 'react-icons/fa';
import { KINGPAD_infoGetter } from 'src/Contracts';

export const ExploreBanner = () => {
  useEffect(() => {
    (async () => {
      const presaleInfo = await KINGPAD_infoGetter.retunInfos('');
    })();
  }, []);

  return (
    <ExploreBannerContainer>
      <BannerImg></BannerImg>
      <CoinDetail>
        <CoinImg></CoinImg>
        <CoinInfo>
          <CoinName>Coin name</CoinName>
          <CoinLinks>
            <CoinLink href="/" rel="noopener noreferrer">
              <Language sx={{ width: '100%', height: '100%' }} />
            </CoinLink>
            <CoinLink href="/" rel="noopener noreferrer">
              <Twitter sx={{ width: '100%', height: '100%' }} />
            </CoinLink>
            <CoinLink href="/" rel="noopener noreferrer">
              <Telegram sx={{ width: '100%', height: '100%' }} />
            </CoinLink>
            <CoinLink href="/" rel="noopener noreferrer">
              <YouTube sx={{ width: '100%', height: '100%' }} />
            </CoinLink>
            <CoinLink href="/" rel="noopener noreferrer">
              <FaDiscord style={{ width: '100%', height: '100%' }} />
            </CoinLink>
          </CoinLinks>
        </CoinInfo>
      </CoinDetail>
    </ExploreBannerContainer>
  );
};

const ExploreBannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '307px',
  [theme.breakpoints.down('tablet')]: {
    height: '190px'
  }
}));

const BannerImg = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '237px',
  backgroundColor: '#1A003E',
  borderRadius: '15px',
  boxShadow: '0px 3px 6px #00000029',
  [theme.breakpoints.down('tablet')]: {
    height: '142px'
  }
}));

const CoinDetail = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '26px',
  width: '100%',
  paddingLeft: '30px',
  position: 'absolute',
  bottom: '0',
  [theme.breakpoints.down('tablet')]: {
    paddingLeft: '10px'
  }
}));

const CoinInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '20px',
  [theme.breakpoints.down('tablet')]: {
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '0px'
  }
}));

const CoinImg = styled(Box)(({ theme }) => ({
  width: '158px',
  minWidth: '158px',
  minHeight: '158px',
  height: '158px',
  borderRadius: '50%',
  boxShadow: '0px 3px 6px #00000029',
  border: '8px solid #1A023E',
  backgroundColor: '#00AEEF',
  [theme.breakpoints.down('tablet')]: {
    width: '93px',
    minWidth: '93px',
    minHeight: '93px',
    height: '93px'
  }
}));

const CoinName = styled(Box)(({ theme }) => ({
  fontSize: '30px',
  fontFamily: 'gotham-bold',
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('md')]: {
    fontSize: '24px'
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '17px'
  }
}));

const CoinLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  paddingRight: '20px'
}));

const CoinLink = styled('a')(({ theme }) => ({
  color: '#8462F6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '24px',
  height: '24px',
  [theme.breakpoints.down('md')]: {
    width: '20px',
    height: '20px'
  },
  [theme.breakpoints.down('tablet')]: {
    width: '15px',
    height: '15px'
  }
}));
