import {
  CheckCircle,
  LockOutlined,
  NoEncryptionGmailerrorredOutlined,
  Language,
  Twitter,
  Telegram,
  YouTube,
  Instagram
} from '@mui/icons-material';
import { FaFacebookF, FaDiscord } from 'react-icons/fa';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { CircularProgressBar } from '../Progress/CircularProgress';
import { useNavigate } from 'react-router-dom';

interface CoinCardProps {
  role: boolean;
  status: number; // 0: upcoming, 1: ongoing, 2: Ended
  coinImg: string;
  coinName: string;
  percentage: number;
  time?: string;
}

export const CoinCard = ({ role, status, coinImg, coinName, percentage, time }: CoinCardProps) => {
  const navigate = useNavigate();
  return (
    <CardContainer>
      <Status>
        <StatusContainer>
          <AuthContainer>
            <Checkmark>Audit</Checkmark>
            <Checkmark>KYC</Checkmark>
          </AuthContainer>
          <Presale variant="outlined" color="inherit">
            Presale
          </Presale>
        </StatusContainer>
        <StatusContainer>
          {role ? (
            <StatusType>
              <LockOutlined sx={{ width: '18px', height: '18px' }} />
              Kingpass only
            </StatusType>
          ) : (
            <StatusType>
              <NoEncryptionGmailerrorredOutlined sx={{ width: '18px', height: '18px' }} />
              Public phase
            </StatusType>
          )}
          {status === 0 ? (
            <StatusButton sx={{ '&:hover': { backgroundColor: '#FFA16F' }, backgroundColor: '#FFA16F' }}>
              Upcoming
            </StatusButton>
          ) : status === 1 ? (
            <StatusButton sx={{ '&:hover': { backgroundColor: '#40F5A9' }, backgroundColor: '#40F5A9' }}>
              On going
            </StatusButton>
          ) : (
            <StatusButton sx={{ '&:hover': { backgroundColor: '#FF6F6F' }, backgroundColor: '#FF6F6F' }}>
              Ended
            </StatusButton>
          )}
        </StatusContainer>
      </Status>
      <TokenInfo>
        <TokenLogo></TokenLogo>
        <TokenDetails>
          <TokenName>{coinName}</TokenName>
          <TokenLinks>
            <TokenLink href="/" rel="noopener noreferrer">
              <Language />
            </TokenLink>
            <TokenLink href="/" rel="noopener noreferrer">
              <Twitter />
            </TokenLink>
            <TokenLink href="/" rel="noopener noreferrer">
              <Telegram />
            </TokenLink>
            <TokenLink href="/" rel="noopener noreferrer">
              <YouTube />
            </TokenLink>
            <TokenLink href="/" rel="noopener noreferrer">
              <FaDiscord style={{ width: '24px', height: '24px' }} />
            </TokenLink>
            <TokenLink href="/" rel="noopener noreferrer">
              <FaFacebookF />
            </TokenLink>
            <TokenLink href="/" rel="noopener noreferrer">
              <Instagram />
            </TokenLink>
          </TokenLinks>
        </TokenDetails>
      </TokenInfo>
      <TokenProgress>
        <TokenProgressTitle>Soft/Hard</TokenProgressTitle>
        <TokenProgressValue>150 BNB - 300 BNB</TokenProgressValue>
        <TokenProgressGraph>
          <CircularProgressBar percentage={percentage} />
        </TokenProgressGraph>
      </TokenProgress>
      <TokenAction>
        <TokenLaunch>
          {status === 0 ? (
            <TokenLaunchTitle>Sale starts in</TokenLaunchTitle>
          ) : status === 1 ? (
            <TokenLaunchTitle>Sale ends in</TokenLaunchTitle>
          ) : (
            <TokenLaunchTitle>Sale ended</TokenLaunchTitle>
          )}
          <TokenLaunchTime>{time != null ? time : '-'}</TokenLaunchTime>
        </TokenLaunch>
        <TokenExplorer onClick={() => navigate('/explore')}>Explore</TokenExplorer>
      </TokenAction>
    </CardContainer>
  );
};

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  padding: '22px 25px',
  display: 'flex',
  flexDirection: 'column',
  gap: '36px',
  [theme.breakpoints.down('desktop')]: {
    padding: '15px'
  }
}));

const Status = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px'
}));

const StatusContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

interface CheckmarkProps {
  children: React.ReactNode;
}

const Checkmark = (props: CheckmarkProps) => {
  return (
    <CheckmarkContainer>
      <CheckCircle sx={{ width: '18px', height: '18px', color: '#09A0FF' }} />
      {props.children}
    </CheckmarkContainer>
  );
};

const AuthContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '16px'
}));

const CheckmarkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '6.5px',
  alignItems: 'center',
  fontSize: '11px',
  fontFamily: 'gotham-bold'
}));

const Presale = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  color: theme.palette.primary.contrastText,
  fontFamily: 'gotham-bold',
  fontSize: '13px',
  width: '82px',
  height: '22px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const StatusType = styled(Box)(({ theme }) => ({
  fontSize: '13px',
  color: theme.palette.primary.contrastText,
  display: 'flex',
  alignItems: 'center',
  gap: '9px'
}));

const StatusButton = styled(Button)(({ theme }) => ({
  fontSize: '13px',
  borderRadius: '20px',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: 0,
  paddingBottom: 0,
  color: '#FFFFFF',
  textTransform: 'none',
  width: '82px',
  height: '22px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const TokenInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '9px',
  alignItems: 'center'
}));

const TokenLogo = styled(Box)(({ theme }) => ({
  minWidth: '87px',
  minHeight: '87px',
  backgroundColor: '#00AEF0',
  borderRadius: '50%'
}));

const TokenDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
}));

const TokenName = styled(Box)(({ theme }) => ({
  fontFamily: 'gotham-bold',
  color: theme.palette.primary.contrastText,
  fontSize: '20px'
}));

const TokenLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5px',
  flexWrap: 'wrap'
}));

const TokenLink = styled('a')(({ theme }) => ({
  color: '#8462F6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const TokenProgress = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '7px'
}));

const TokenProgressTitle = styled(Box)(({ theme }) => ({
  color: '#8462F6',
  fontFamily: 'gotham-bold',
  fontSize: '16px'
}));

const TokenProgressValue = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  fontFamily: 'gotham-bold',
  color: theme.palette.dark.contrastText
}));

const TokenProgressGraph = styled(Box)(({ theme }) => ({
  width: '180px',
  height: '180px'
}));

const TokenAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const TokenLaunch = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
}));

const TokenLaunchTitle = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: '#8462F6',
  fontFamily: 'gotham-bold'
}));

const TokenLaunchTime = styled(Box)(({ theme }) => ({
  fontSize: '15px',
  color: theme.palette.dark.contrastText,
  fontFamily: 'gotham-bold'
}));

const TokenExplorer = styled(Button)(({ theme }) => ({
  width: '84px',
  height: '36px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '19px',
  backgroundColor: '#8462F6',
  color: '#FFFFFF',
  textTransform: 'none',
  '&.MuiButtonBase-root:hover': {
    backgroundColor: '#8462F6'
  }
}));
