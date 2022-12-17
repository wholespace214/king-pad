import { useState } from 'react';
import { Box, Button } from '@mui/material';
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
import { RefundCard } from 'src/Components/Cards/RefundCard';
import { PresaleCard } from 'src/Components/Cards/PresaleCard';
import { Dayjs } from 'dayjs';
import { KingpassCard } from 'src/Components/Cards/KingpassCard';
import { AboutToken } from './CreatePresale/AboutToken';
import { TokenDescription } from './CreatePresale/TokenDescription';

export const CreatePresale = () => {
  const [currecy, setCurrency] = useState(0);
  const [itemValue, setItemValue] = useState('Pancakeswap');
  const [isBurn, setBurn] = useState(true);
  const [dateTime1, setDateTime1] = useState<Dayjs | null>(null);
  const [dateTime2, setDateTime2] = useState<Dayjs | null>(null);
  const [isVesting, setVesting] = useState(true);
  return (
    <>
      <BannerCard>Banner ( to do ) </BannerCard>
      <TokenDetailsContainer>
        <TokenDetails>
          <TokenAddressCard>
            <SmallText>Token address</SmallText>
            <InputUrl placeholder="Insert url here" />
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
      <BNBCardContainer>
        <RateCard
          title="Liquidity %"
          help="Enter the percentage of raised funds that should be allocated to Liquidiity on Exchange (Min 51% Max 100%)"
        />
        <RateCard title="Liquidity lock" content="DAYS" help="How long do you want to lock LP after launch?" />
        <RefundCard isState={isBurn} setState={setBurn} />
      </BNBCardContainer>
      <PresaleContainer>
        <PresaleCard title="Presale starts" state={dateTime1} setState={setDateTime1} />
        <PresaleCard title="Presale end" state={dateTime2} setState={setDateTime2} />
        <KingpassCard />
      </PresaleContainer>
      <EnableVestButton onClick={() => setVesting(!isVesting)} status={isVesting}>
        Enable team vesting
      </EnableVestButton>
      <VestingContainer>
        <RateCard
          title="Total team vesting tokens"
          help="How many tokens do you want to lock?"
          isDisabled={isVesting}
        />
        <VestingDetailsContainer>
          <RateCard
            title="First release after listing"
            content="Days"
            help="After how many days the vesting starts?"
            isDisabled={isVesting}
          />
          <RateCard
            title="First release Amount"
            content="%"
            help="How many token do you want to unlock in the first release?"
            isDisabled={isVesting}
          />
          <RateCard
            title="Vesting period each cycle"
            content="Days"
            help="How often do you want to unlock your tokens?"
            isDisabled={isVesting}
          />
          <RateCard
            title="Token release each cycle"
            content="%"
            help="How many token do you want to ulock each cycle?"
            isDisabled={isVesting}
          />
        </VestingDetailsContainer>
      </VestingContainer>
      <AboutToken />
      <TokenDescription />
      <LauchButton>LAUNCH YOUR PRESALE</LauchButton>
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
  paddingTop: '18px',
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

const PresaleContainer = styled(Box)(({ theme }) => ({
  paddingTop: '18px',
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '14px',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

interface VestButtonProps {
  status: boolean;
}

const EnableVestButton = styled(Button)<VestButtonProps>(({ theme, status }) => ({
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  backgroundColor: status ? theme.palette.primary.main : '#8462F6',
  padding: '18px',
  textAlign: 'center',
  width: '100%',
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  textTransform: 'none',
  color: status ? '#8462F6' : '#FFFFFF',
  fontWeight: '700',
  [theme.breakpoints.down('xs')]: {
    fontSize: '14px'
  },
  '&:hover': {
    backgroundColor: status ? theme.palette.primary.main : '#8462F6'
  }
}));

const VestingContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  marginTop: '11px',
  width: '100%',
  justifyContent: 'center',
  gap: '16px',
  gridTemplateColumns: 'repeat(1, 4fr)'
}));

const VestingDetailsContainer = styled(Box)(({ theme }) => ({
  marginTop: '16px',
  gap: '16px',
  display: 'flex',
  width: '100%',
  flex: 4,
  [theme.breakpoints.down(1450)]: {
    flex: 'inherit',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 2fr)'
  },
  [theme.breakpoints.down(571)]: {
    gridTemplateColumns: 'repeat(1, 4fr)'
  }
}));

const LauchButton = styled(Button)(({ theme }) => ({
  padding: '15px',
  fontSize: '18px',
  textAlign: 'center',
  backgroundColor: '#8462F6',
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  color: '#FFFFFF',
  width: '100%',
  marginTop: '37px',
  fontFamily: 'gotham-bold',
  '&:hover': {
    backgroundColor: '#8462F6'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '13px'
  }
}));

const InputUrl = styled('input')(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  background: 'none',
  outline: 'none',
  border: 'none',
  height: '40px',
  fontFamily: 'gotham-book',
  fontWeight: '700',
  fontSize: '18px',
  marginTop: '10px',
  color: theme.palette.primary.contrastText,
  '::placeholder': {
    color: theme.palette.primary.contrastText,
    opacity: 0.6
  }
}));
