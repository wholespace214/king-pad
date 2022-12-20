import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface TokenDescriptionProps {
  name: string;
  value: string;
  setState: (prop: string, value: string | number | boolean) => void;
}

export const TokenDescription = (props: TokenDescriptionProps) => {
  const { name, value, setState } = props;
  return (
    <TokenDescriptionContainer>
      <DescriptionText>Project description (Max 1000 characters)</DescriptionText>
      <TeatArea placeholder="Describe your project" value={value} onChange={(e) => setState(name, e.target.value)} />
    </TokenDescriptionContainer>
  );
};

const TokenDescriptionContainer = styled(Box)(({ theme }) => ({
  padding: '25px 40px',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  width: '100%',
  marginTop: '17px'
}));

const DescriptionText = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: '#8462F6',
  fontWeight: '700',
  [theme.breakpoints.down('xs')]: {
    fontSize: '14px'
  }
}));

const TeatArea = styled('textarea')(({ theme }) => ({
  marginTop: '16px',
  textAlign: 'left',
  width: '100%',
  background: 'none',
  outline: 'none',
  border: 'none',
  height: '250px',
  resize: 'none',
  fontFamily: 'gotham-bold',
  fontSize: '12px',
  color: theme.palette.primary.contrastText,
  '::placeholder': {
    color: theme.palette.primary.contrastText,
    opacity: 0.6
  }
}));
