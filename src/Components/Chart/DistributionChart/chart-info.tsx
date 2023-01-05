import { Box, useTheme } from '@mui/material';
import { styled } from '@mui/system';
interface TokenStatusProps {
  color: string;
  amount: number;
  name: string;
}

export const TokenChartInfo = () => {
  const theme = useTheme();
  const TokenData = [
    {
      id: `Burn`,
      label: `Burn 20%`,
      value: 20,
      color: '#C6B8F4'
    },
    {
      id: `LP`,
      label: `LP 20%`,
      value: 20,
      color: '#412C88'
    },
    {
      id: `Locked`,
      label: `Locked 60%`,
      value: 60,
      color: theme.palette.mode === 'light' ? '#1A1234' : '#FFFFFF'
    },
    {
      id: `Unlocked`,
      label: `Unlocked 16%`,
      value: 16,
      color: '#8462F6'
    }
  ];
  return (
    <InfoContainer>
      {TokenData.map((token, index) => (
        <TokenStatus color={token.color} amount={token.value} name={token.id} key={index} />
      ))}
    </InfoContainer>
  );
};

const TokenStatus = (props: TokenStatusProps) => {
  const { color, amount, name } = props;
  return (
    <StatusContainer>
      <TokenColor style={{ backgroundColor: color }} />
      <TokenAmount>{amount}%</TokenAmount>
      <TokenName>{name}</TokenName>
    </StatusContainer>
  );
};

const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  width: '100%',
  justifyContent: 'center',
  gap: '15px',
  marginTop: '-20px',
  [theme.breakpoints.down('mobile')]: {
    gap: '8px'
  }
}));
const StatusContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minWidth: '60px'
}));
const TokenColor = styled(Box)(({ theme }) => ({
  minWidth: '26px',
  minHeight: '26px',
  width: '26px',
  height: '26px',
  borderRadius: '50%'
}));

const TokenAmount = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  fontFamily: 'gotham-bold',
  lineHeight: '15px',
  marginTop: '8px',
  color: theme.palette.dark.contrastText,
  [theme.breakpoints.down('mobile')]: {
    fontSize: '12px'
  }
}));

const TokenName = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.dark.contrastText,
  [theme.breakpoints.down('mobile')]: {
    fontSize: '11px'
  }
}));
