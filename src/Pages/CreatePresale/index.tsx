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
import { toast } from 'react-toastify';
import { Dropdown } from 'src/Components/Dropdown';
import { RateCard } from 'src/Components/Cards/RateCard';
import { RefundCard } from 'src/Components/Cards/RefundCard';
import { PresaleCard } from 'src/Components/Cards/PresaleCard';
import { Dayjs } from 'dayjs';
import { KingpassCard } from 'src/Components/Cards/KingpassCard';
import { AboutToken } from './AboutToken';
import { TokenDescription } from './TokenDescription';
import { isEmpty, isPositiveReal, isZero } from 'src/Utils/validator';

export const CreatePresale = () => {
  const [state, setState] = useState({
    name: '',
    symbol: '',
    decimal: 0,
    currency: 0,
    itemValue: 'Pancakeswap',
    presaleRate: 0,
    listingRate: 0,
    softCap: 0,
    hardCap: 0,
    minPresale: 0,
    maxPresale: 0,
    liq: 0,
    liqLock: 0,
    isVesting: false,
    isBurn: true,
    teamVestToken: 0,
    releaseAfter: 0,
    releaseAmount: 0,
    vestPeriod: 0,
    tokenCycle: 0,
    logoUrl: '',
    coverImgUrl: '',
    youtubeVideoUrl: '',
    websiteUrl: '',
    telegramUrl: '',
    youtubeUrl: '',
    facebookUrl: '',
    discordUrl: '',
    instagramUrl: '',
    description: ''
  });

  const handleState = (prop: string, value: string | number | boolean) => {
    setState({ ...state, [prop]: value });
  };

  const [dateTime1, setDateTime1] = useState<Dayjs | null>(null);
  const [dateTime2, setDateTime2] = useState<Dayjs | null>(null);

  const handleLaunch = () => {
    console.log('state: ', state);
    if (isEmpty(state.name)) toast.error('Token name must exist');
    else if (isEmpty(state.symbol)) toast.error('Token Symbol must exist');
    else if (isZero(state.decimal)) toast.error('Decimal must exist');
    else if (!isPositiveReal(state.decimal)) toast.error('Decial must be positive real number');
    else if (isZero(state.presaleRate)) toast.error('Presale Rate must exist');
    else if (isZero(state.listingRate)) toast.error('Listing Rate must exist');
    else if (isZero(state.softCap)) toast.error('Softcap must exist');
    else if (isZero(state.hardCap)) toast.error('HardCap must exist');
    else if (isZero(state.minPresale)) toast.error('Min Contribution must exist');
    else if (isZero(state.maxPresale)) toast.error('Max Contribution must exist');
    else if (isZero(state.liq)) toast.error('Liquidity % must exist');
    else if (isZero(state.liqLock)) toast.error('Liquidity Lock days must exist');
    else if (state.isVesting) {
      if (isZero(state.teamVestToken)) toast.error('Total team vesting tokens must exist');
      if (isZero(state.releaseAfter)) toast.error('Total team vesting tokens must exist');
      if (isZero(state.releaseAmount)) toast.error('First Release Amount must exist');
      if (isZero(state.vestPeriod)) toast.error('Veting perios each cycle must exist');
      if (isZero(state.tokenCycle)) toast.error('Token release each cycle must exist');
    }
  };

  return (
    <>
      <BannerCard>Banner ( to do ) </BannerCard>
      <TokenDetailsContainer>
        <TokenDetails>
          <TokenAddressCard>
            <SmallText>Token address</SmallText>
            <InputUrl placeholder="Insert contract address" />
            <TokenInfo>
              <TokenUnit title="Name" content={state.name} name="name" setContent={handleState} />
              <TokenUnit title="Symbol" name="symbol" content={state.symbol} setContent={handleState} />
              <TokenUnit
                title="Decimal"
                name="decimal"
                type="number"
                content={state.decimal}
                setContent={handleState}
              />
            </TokenInfo>
          </TokenAddressCard>
          <TokenCurrencyCard>
            <CurrencyLabel>Currency</CurrencyLabel>
            <CurrencyButtons>
              <TokenButton
                darkIcon={BnbIcon}
                lightIcon={lightBnbIcon}
                name="BNB"
                isClicked={state.currency === 0}
                onClick={() => setState({ ...state, currency: 0 })}
              />
              <TokenButton
                darkIcon={BusdIcon}
                lightIcon={lightBusdIcon}
                name="BUSD"
                isClicked={state.currency === 1}
                onClick={() => setState({ ...state, currency: 1 })}
              />
              <TokenButton
                darkIcon={UsdtIcon}
                lightIcon={lightUsdtIcon}
                name="USDT"
                isClicked={state.currency === 2}
                onClick={() => setState({ ...state, currency: 2 })}
              />
              <TokenButton
                darkIcon={UsdcIcon}
                lightIcon={lightUsdcIcon}
                name="USDC"
                isClicked={state.currency === 3}
                onClick={() => setState({ ...state, currency: 3 })}
              />
            </CurrencyButtons>
            <CurrencySupport>Choose the currency you want to create the pair with</CurrencySupport>
          </TokenCurrencyCard>
          <TokenSwap>
            <TokenSwapLabel>Router</TokenSwapLabel>
            <Dropdown name="itemValue" itemValue={state.itemValue} setItemValue={handleState} />
          </TokenSwap>
        </TokenDetails>
        <SupportCard />
      </TokenDetailsContainer>
      <RateCardContainer>
        <RateCard
          title="Presale rate"
          name="presaleRate"
          help="If I spend 1 BNB, how many token will I receive?"
          value={state.presaleRate}
          setValue={handleState}
        />
        <RateCard
          title="Listing rate"
          name="listingRate"
          help="If I spend 1 BNB, how many token will I receive?"
          value={state.listingRate}
          setValue={handleState}
        />
      </RateCardContainer>
      <BNBCardContainer>
        <RateCard
          title="Softcap"
          name="softCap"
          content="BNB"
          help="The minimum amount of allocated BNB in your presale."
          value={state.softCap}
          setValue={handleState}
        />
        <RateCard
          title="Hardcap"
          name="hardCap"
          content="BNB"
          help="The minimum amount of allocated BNB in your presale."
          value={state.hardCap}
          setValue={handleState}
        />
        <RateCard
          title="Min contribution"
          name="minPresale"
          content="BNB"
          help="The minimum amount that must be contributed to your presale."
          value={state.minPresale}
          setValue={handleState}
        />
        <RateCard
          title="Max contribution"
          name="maxPresale"
          content="BNB"
          help="The maximum conitrbution amount allowed per wallet."
          value={state.maxPresale}
          setValue={handleState}
        />
      </BNBCardContainer>
      <BNBCardContainer>
        <RateCard
          title="Liquidity %"
          name="liq"
          help="Enter the percentage of raised funds that should be allocated to Liquidiity on Exchange (Min 51% Max 100%)"
          value={state.liq}
          setValue={handleState}
        />
        <RateCard
          title="Liquidity lock"
          name="liqLock"
          content="DAYS"
          help="How long do you want to lock LP after launch?"
          value={state.liqLock}
          setValue={handleState}
        />
        <RefundCard name="isBurn" isState={state.isBurn} setState={handleState} />
      </BNBCardContainer>
      <PresaleContainer>
        <PresaleCard title="Presale starts" state={dateTime1} setState={setDateTime1} />
        <PresaleCard title="Presale end" state={dateTime2} setState={setDateTime2} />
        <KingpassCard />
      </PresaleContainer>
      <EnableVestButton onClick={() => setState({ ...state, isVesting: !state.isVesting })} status={state.isVesting}>
        Enable team vesting
      </EnableVestButton>
      <VestingContainer>
        <RateCard
          title="Total team vesting tokens"
          name="teamVestToken"
          help="How many tokens do you want to lock?"
          isDisabled={state.isVesting}
          value={state.teamVestToken}
          setValue={handleState}
        />
        <VestingDetailsContainer>
          <RateCard
            title="First release after listing"
            name="releaseAfter"
            content="Days"
            help="After how many days the vesting starts?"
            isDisabled={state.isVesting}
            value={state.releaseAfter}
            setValue={handleState}
          />
          <RateCard
            title="First release Amount"
            name="releaseAmount"
            content="%"
            help="How many token do you want to unlock in the first release?"
            isDisabled={state.isVesting}
            value={state.releaseAmount}
            setValue={handleState}
          />
          <RateCard
            title="Vesting period each cycle"
            name="vestPeriod"
            content="Days"
            help="How often do you want to unlock your tokens?"
            isDisabled={state.isVesting}
            value={state.vestPeriod}
            setValue={handleState}
          />
          <RateCard
            title="Token release each cycle"
            name="tokenCycle"
            content="%"
            help="How many token do you want to ulock each cycle?"
            isDisabled={state.isVesting}
            value={state.tokenCycle}
            setValue={handleState}
          />
        </VestingDetailsContainer>
      </VestingContainer>
      <AboutToken state={state} setState={handleState} />
      <TokenDescription name="description" value={state.description} setState={handleState} />
      <LauchButton onClick={handleLaunch}>LAUNCH YOUR PRESALE</LauchButton>
    </>
  );
};

interface TokenUnitProps {
  title: string;
  name: string;
  content?: string | number;
  type?: string;
  setContent: any;
}

const TokenUnit = ({ title, name, content, type, setContent }: TokenUnitProps) => {
  return (
    <TokenUnitContainer>
      <SmallText>{title}</SmallText>
      <InputText
        placeholder="-"
        value={content === 0 ? '' : content}
        type={type}
        name={name}
        onChange={(e) => setContent(name, e.target.value)}
      />
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

const InputText = styled('input')(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  background: 'none',
  outline: 'none',
  border: 'none',
  height: '30px',
  fontSize: '20px',
  fontFamily: 'gotham-bold',
  color: theme.palette.primary.contrastText
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
  fontFamily: 'gotham-bold',
  fontSize: '18px',
  marginTop: '10px',
  color: theme.palette.primary.contrastText,
  '::placeholder': {
    color: theme.palette.primary.contrastText
  }
}));
