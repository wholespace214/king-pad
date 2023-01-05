import { styled } from '@mui/system';
import { Box, Button, Divider } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { RaisedProgressBar } from 'src/Components/Progress/RaisedProgress';

export const CoinDetailCards = () => {
  return (
    <CoinDetailCardsBox>
      <CardBox about="Ends-In-Card">
        <StatusButton sx={{ '&:hover': { backgroundColor: '#40F5A9' }, backgroundColor: '#40F5A9' }}>
          On going
        </StatusButton>
        <Presale variant="outlined" color="inherit">
          Presale
        </Presale>
        <AuthContainer>
          <Checkmark>Audit</Checkmark>
          <Checkmark>KYC</Checkmark>
        </AuthContainer>
        <CardLabel>Ends In</CardLabel>
        <EndInTimeContainer>
          <EndInTime name="Days" value={34} />
          <Divider orientation="vertical" sx={{ bgColor: '#8462F6' }} />
          <EndInTime name="Hours" value={12} />
          <Divider orientation="vertical" sx={{ bgColor: '#8462F6' }} />
          <EndInTime name="Minutes" value={55} />
          <Divider orientation="vertical" sx={{ bgColor: '#8462F6' }} />
          <EndInTime name="Seconds" value={31} />
        </EndInTimeContainer>
      </CardBox>
      <CardBox about="Progress-Card">
        <CardLabel>Soft/Hard</CardLabel>
        <BNBRange>150 BNB - 300 BNB</BNBRange>
        <ProgressBar>
          <RaisedProgressBar percentage={38} raised={45} />
        </ProgressBar>
      </CardBox>
      <CardBox about="Contribute-Card">
        <CardLabel>Contribte now</CardLabel>
        <CardButtonGroup>
          <BNBButton variant="outlined">0.1 BNB</BNBButton>
          <CardButton>Buy</CardButton>
        </CardButtonGroup>
        <PurchasedContainer>
          <Purchased name="Min buy" value={0.1} />
          <Purchased name="Max buy" value={3} />
          <Purchased name="Purchased" value={1} />
        </PurchasedContainer>
        <CardLabel>Your contribution</CardLabel>
        <ValueLabel>0.1 BNB</ValueLabel>
        <CardButton>Withdraw</CardButton>
      </CardBox>
    </CoinDetailCardsBox>
  );
};

const CoinDetailCardsBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  width: '100%',
  gap: '14px',
  paddingTop: '17px',
  [theme.breakpoints.down(1390)]: {
    gridTemplateColumns: 'repeat(2, 2fr)',
    '&>*:nth-child(1)': {
      gridColumn: '1 / 3'
    }
  },
  [theme.breakpoints.down(720)]: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const CardBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '35px',
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px'
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
  width: '100px',
  height: '26px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const Presale = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  color: theme.palette.primary.contrastText,
  fontFamily: 'gotham-bold',
  fontSize: '13px',
  width: '100px',
  height: '26px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '15px'
}));

const AuthContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '18px',
  padding: '20px 0 50px 0'
}));

const CheckmarkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '6.5px',
  alignItems: 'center',
  fontSize: '13px',
  fontFamily: 'gotham-bold'
}));

const CardLabel = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: '#8462F6',
  fontWeight: '600'
}));

const EndInTimeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '18px',
  alignItems: 'center',
  paddingTop: '18px',
  color: '#8462F6',
  [theme.breakpoints.down('sm')]: {
    gap: '9px'
  }
}));

const EndInTime = (props: EndInTimeProps) => {
  return (
    <EndInTimeWrapper>
      <EndInTimeValue>{props.value}</EndInTimeValue>
      <EndInTimeName>{props.name}</EndInTimeName>
    </EndInTimeWrapper>
  );
};

interface CheckmarkProps {
  children: React.ReactNode;
}

interface EndInTimeProps {
  name: string;
  value: number;
}

const Checkmark = (props: CheckmarkProps) => {
  return (
    <CheckmarkContainer>
      <CheckCircle sx={{ width: '18px', height: '18px', color: '#09A0FF' }} />
      {props.children}
    </CheckmarkContainer>
  );
};

const EndInTimeWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const EndInTimeValue = styled(Box)(({ theme }) => ({
  fontSize: '26px',
  color: theme.palette.primary.contrastText,
  fontWeight: '600',
  letterSpacing: '-0.26px',
  lineHeight: '25px'
}));

const EndInTimeName = styled(Box)(({ theme }) => ({
  fontSize: '8px',
  color: '#8462F6',
  textTransform: 'uppercase'
}));

const BNBRange = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.primary.contrastText,
  fontFamily: 'gotham-bold',
  paddingTop: '11px'
}));

const ProgressBar = styled(Box)(({ theme }) => ({
  width: '180px',
  height: '180px',
  paddingTop: '11px'
}));

const CardButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5px',
  paddingTop: '11px'
}));

const BNBButton = styled(Button)(({ theme }) => ({
  border: '1px solid #8462F6',
  color: theme.palette.primary.contrastText,
  fontSize: '15px',
  borderRadius: '32px',
  fontFamily: 'gotham-bold',
  padding: '5px 34px',
  textTransform: 'none',
  '&:hover': {
    border: '1px solid #8462F6'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '12px'
  }
}));

const CardButton = styled(Button)(({ theme }) => ({
  borderRadius: '32px',
  fontSize: '15px',
  backgroundColor: '#8462F6',
  fontFamily: 'gotham-bold',
  padding: '5px 34px',
  textTransform: 'none',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#8462F6'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '12px'
  }
}));

const PurchasedContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '42px',
  padding: '16px 0 32px 0',
  [theme.breakpoints.down('xs')]: {
    gap: '20px'
  }
}));

interface PurchasedProps {
  name: string;
  value: number;
}

const Purchased = (props: PurchasedProps) => {
  return (
    <PurchasedWrapper>
      <PurchasedName>{props.name}</PurchasedName>
      <PurchasedValue>{props.value} BNB</PurchasedValue>
    </PurchasedWrapper>
  );
};

const PurchasedWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const PurchasedName = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  color: '#8462F6'
}));

const PurchasedValue = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  fontFamily: 'gotham-bold',
  color: theme.palette.primary.contrastText
}));

const ValueLabel = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  fontFamily: 'gotham-bold',
  color: theme.palette.primary.contrastText,
  padding: '5px 0'
}));
