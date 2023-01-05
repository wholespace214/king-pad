import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { DistributionChart } from 'src/Components/Chart/DistributionChart';
import { TokenChartInfo } from 'src/Components/Chart/DistributionChart/chart-info';

export const CoinInfos = () => {
  return (
    <CoinInfosContainer>
      <CoinInfosBox>
        <CoinInfo name="Presale Address" value="0xe9e7cea3dedca5984780bafc599bd69add087d56" />
        <CoinInfo name="Token Name" value="Sandbox" />
        <CoinInfo name="Token Symbol" value="SAND" />
        <CoinInfo name="Token Decimals" value="18" />
        <CoinInfo name="Token Address" value="0xe9e7cea3dedca5984780bafc599bd69add087d56" />
        <CoinInfo name="Total Supply" value="1,000,000,000,000 SAND" />
        <CoinInfo name="Tokens For Presale" value="100,000,000 SAND" />
        <CoinInfo name="Tokens For Liquidity" value="100,000,000 SAND" />
        <CoinInfo name="Initial Market Cap (estimate)" value="$10,000,000" />
        <CoinInfo name="Presale Rate" value="1 BNB = 1,000,000 SAND" />
        <CoinInfo name="Listing Rate" value="1 BNB = 9,500,000 SAND" />
        <CoinInfo name="Presale Start Time" value="2022 / 12 / 15 - 10:00 (UTC)" />
        <CoinInfo name="Liquidity Percent" value="2022 / 12 / 15 - 10:00 (UTC)" />
        <CoinInfo name="Total Supply" value="70%" />
        <CoinInfo name="Liquidity Lockup Time" value="365 days" />
      </CoinInfosBox>
      <ContributionBox>
        <VestingCard>
          <CardLabel>Contribution Vesting</CardLabel>
          <VestingDetails>
            <VestingDetail value={20} unit="%" content="First release Amount" />
            <VestingDetail value={30} unit="DAYS" content="Vesting period each cycle" />
            <VestingDetail value={10} unit="%" content="Token release each cycle" />
          </VestingDetails>
        </VestingCard>
        <DistributionBox>
          <CardLabel>Distribution</CardLabel>
          <ChartContainer>
            <DistributionChart />
          </ChartContainer>
          <TokenChartInfo />
        </DistributionBox>
      </ContributionBox>
    </CoinInfosContainer>
  );
};

const CoinInfosContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '14px',
  paddingTop: '14px',
  [theme.breakpoints.down(1280)]: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const CoinInfosBox = styled(Box)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  padding: '35px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px'
}));

interface CoinInfoProps {
  name: string;
  value: string;
}

const CoinInfo = (props: CoinInfoProps) => {
  return (
    <CoinInfoWrapper>
      <CoinInfoName>{props.name}</CoinInfoName>
      <CoinInfoValue>{props.value}</CoinInfoValue>
    </CoinInfoWrapper>
  );
};

const CoinInfoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflowWrap: 'break-word'
}));

const CoinInfoName = styled(Box)(({ theme }) => ({
  color: '#8462F6',
  fontSize: '16px',
  fontWeight: '600',
  [theme.breakpoints.down('mobile')]: {
    fontSize: '15px'
  }
}));

const CoinInfoValue = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '13px',
  [theme.breakpoints.down('mobile')]: {
    fontSize: '11px'
  }
}));

const ContributionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  width: '100%'
}));

const VestingCard = styled(Box)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  padding: '35px 35px 74px 35px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const CardLabel = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: '#8462F6',
  fontWeight: '600'
}));

const VestingDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '38px',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  [theme.breakpoints.down('mobile')]: {
    gap: '10px'
  }
}));

interface VestingDetailProps {
  value: number;
  unit: string;
  content: string;
}

const VestingDetail = (props: VestingDetailProps) => {
  return (
    <VestingDetailWrapper>
      <CircleBox>
        <VestingValue>{props.value}</VestingValue>
        <VestingUnit>{props.unit}</VestingUnit>
      </CircleBox>
      <VestingContent>{props.content}</VestingContent>
    </VestingDetailWrapper>
  );
};

const VestingDetailWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '90px',
  paddingTop: '73px',
  gap: '10px',
  alignItems: 'center'
}));

const CircleBox = styled(Box)(({ theme }) => ({
  border: theme.palette.mode === 'light' ? '3px solid #CDBEFF' : '3px solid #CDBEFF',
  width: '90px',
  height: '90px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  [theme.breakpoints.down('mobile')]: {
    fontSize: '11px',
    width: '70px',
    height: '70px'
  }
}));

const VestingValue = styled(Box)(({ theme }) => ({
  fontSize: '35px',
  color: theme.palette.primary.contrastText,
  //   lineHeight: '40px',
  fontWeight: '600',
  [theme.breakpoints.down('mobile')]: {
    fontSize: '22px'
    // lineHeight: '20px'
  }
}));

const VestingUnit = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('mobile')]: {
    fontSize: '11px'
  }
}));

const VestingContent = styled(Box)(({ theme }) => ({
  fontSize: '11px',
  color: theme.palette.primary.contrastText,
  textAlign: 'center'
}));

const DistributionBox = styled(Box)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  height: '100%',
  padding: '35px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px'
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  marginTop: '-40px',
  width: '400px',
  height: '400px',
  [theme.breakpoints.down(1390)]: {
    width: '350px',
    height: '350px'
  },
  [theme.breakpoints.down(1280)]: {
    width: '450px',
    height: '450px'
  },
  [theme.breakpoints.down('mobile')]: {
    width: '350px',
    height: '350px'
  },
  [theme.breakpoints.down(370)]: {
    width: '300px',
    height: '300px'
  }
}));
