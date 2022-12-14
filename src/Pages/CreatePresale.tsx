import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { SupportCard } from 'src/Components/Cards/SupportCard';
import { SmallText } from 'src/Components/Text/SmallText';

export const CreatePresale = () => {
  return (
    <>
      <BannerCard>Banner ( to do ) </BannerCard>
      <TokenDetailsContainer>
        <TokenDetails>
          <TokenAddressCard>
            <SmallText>Token address</SmallText>
            <MediumText>Insert your token address</MediumText>
            <TokenInfo>
              <TokenUnit title="Name" />
              <TokenUnit title="Symbol" />
              <TokenUnit title="Decimal" />
            </TokenInfo>
          </TokenAddressCard>
        </TokenDetails>
        <SupportCard />
      </TokenDetailsContainer>
    </>
  );
};

interface TokenUnitProps {
  title: string;
  content?: string;
}

const TokenUnit = ({ title, content }: TokenUnitProps) => {
  return (
    <TokenUnitContainer>
      <SmallText>{title}</SmallText>
      <MediumText>{content !== undefined ? content : '-'}</MediumText>
    </TokenUnitContainer>
  );
};

const BannerCard = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '142px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  backgroundColor: theme.palette.dark.main,
  color: theme.palette.dark.contrastText,
  fontFamily: 'gotham-bold',
  fontSize: '30px'
}));

const TokenDetailsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '14px',
  paddingTop: '26px',
  width: '100%'
}));

const TokenDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%'
}));

const TokenAddressCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '26px 70px',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '26px 40px'
  }
}));

const MediumText = styled(Box)(({ theme }) => ({
  paddingTop: '7px',
  fontWeight: 600,
  fontSize: '18px',
  color: theme.palette.dark.contrastText,
  [theme.breakpoints.down('md')]: {
    fontSize: '15px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '11px'
  }
}));

const TokenInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  paddingTop: '28px',
  [theme.breakpoints.down('xs')]: {
    paddingTop: '18px'
  }
}));

const TokenUnitContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center'
}));
