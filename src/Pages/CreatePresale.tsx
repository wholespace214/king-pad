import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { SupportCard } from 'src/Components/Cards/SupportCard';
import { SmallText } from 'src/Components/Text/SmallText';
import { TokenButton } from 'src/Components/TokenButton';
import {
  BnbIcon,
  BusdIcon,
  UsdtIcon,
  UsdcIcon,
  lightBnbIcon,
  lightBusdIcon,
  lightUsdtIcon,
  lightUsdcIcon
} from 'src/Config/Images';
import { Dropdown } from 'src/Components/Dropdown';
import { RateCard } from 'src/Components/Cards/RateCard';

export const CreatePresale = () => {
  const [currecy, setCurrency] = useState(0);
  const [itemValue, setItemValue] = useState('Pancakeswap');
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
          <TokenCurrencyCard>
            <CurrencyLabel>Currency</CurrencyLabel>
            <CurrencyButtons>
              <TokenButton
                darkIcon={BnbIcon}
                lightIcon={lightBnbIcon}
                name="BNB"
                isClicked={currecy === 0}
                onClick={() => setCurrency(0)}
              />
              <TokenButton
                darkIcon={BusdIcon}
                lightIcon={lightBusdIcon}
                name="BUSD"
                isClicked={currecy === 1}
                onClick={() => setCurrency(1)}
              />
              <TokenButton
                darkIcon={UsdtIcon}
                lightIcon={lightUsdtIcon}
                name="USDT"
                isClicked={currecy === 2}
                onClick={() => setCurrency(2)}
              />
              <TokenButton
                darkIcon={UsdcIcon}
                lightIcon={lightUsdcIcon}
                name="USDC"
                isClicked={currecy === 3}
                onClick={() => setCurrency(3)}
              />
            </CurrencyButtons>
            <CurrencySupport>Choose the currency you want to create the pair with</CurrencySupport>
          </TokenCurrencyCard>
          <TokenSwap>
            <TokenSwapLabel>Router</TokenSwapLabel>
            <Dropdown itemValue={itemValue} setItemValue={setItemValue} />
          </TokenSwap>
        </TokenDetails>
        <SupportCard />
      </TokenDetailsContainer>
      <RateCardContainer>
        <RateCard title="Presale rate" help="If I spend 1 BNB, how many token will I receive?" />
        <RateCard title="Listing rate" help="If I spend 1 BNB, how many token will I receive?" />
      </RateCardContainer>
      <BNBCardContainer>
        <RateCard title="Softcap" content="BNB" help="The minimum amount of allocated BNB in your presale." />
        <RateCard title="Hardcap" content="BNB" help="The minimum amount of allocated BNB in your presale." />
        <RateCard
          title="Min contribution"
          content="BNB"
          help="The minimum amount that must be contributed to your presale."
        />
        <RateCard title="Max contribution" content="BNB" help="The maximum conitrbution amount allowed per wallet." />
      </BNBCardContainer>
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

const TokenCurrencyCard = styled(Box)(({ theme }) => ({
  padding: '20px 70px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
  boxShadow: '0px 3px 6px #00000029',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down(1250)]: {
    padding: '20px 30px'
  }
}));

const CurrencyLabel = styled(Box)(({ theme }) => ({
  color: '#8462F6',
  fontSize: '16px'
}));

const CurrencyButtons = styled(Box)(({ theme }) => ({
  display: 'grid',
  justifyContent: 'center',
  width: '100%',
  gridTemplateColumns: 'auto auto auto auto',
  gap: '18px',
  marginTop: '13px',
  [theme.breakpoints.down(1440)]: {
    gridTemplateColumns: 'auto auto'
  }
}));

const CurrencySupport = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.primary.contrastText,
  paddingTop: '26px',
  textAlign: 'center'
}));

const TokenSwap = styled(Box)(({ theme }) => ({
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  background: theme.palette.primary.main,
  padding: '23px',
  textAlign: 'center'
}));

const TokenSwapLabel = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: '#8462F6'
}));

const RateCardContainer = styled(Box)(({ theme }) => ({
  paddingTop: '25px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  gap: '14px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

const BNBCardContainer = styled(Box)(({ theme }) => ({
  paddingTop: '25px',
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '14px',
  [theme.breakpoints.down('xl')]: {
    gridTemplateColumns: 'repeat(2, 2fr)'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 4fr)'
  }
}));
