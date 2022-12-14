import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';
import { CoinCard } from 'src/Components/Cards/CoinCard';
import { KingpadCard } from 'src/Components/Cards/KingpadCard';
import { SafePlaceCard } from 'src/Components/Cards/SafePlaceCard';
import { KingLogoIcon, HelmetIcon } from 'src/Config/Images';
import { useStore } from 'src/Context/StoreContext';

interface CoinCardProps {
  role: boolean;
  status: number; // 0: upcoming, 1: ongoing, 2: Ended
  coinImg: string;
  coinName: string;
  percentage: number;
  time?: string;
}

const coinCardData: CoinCardProps[] = [
  {
    role: true,
    status: 1,
    coinImg: '',
    coinName: 'Coin name',
    percentage: 35,
    time: '10:13:05:21'
  },
  {
    role: false,
    status: 0,
    coinImg: '',
    coinName: 'Coin name',
    percentage: 0,
    time: '10:13:05:21'
  },
  {
    role: false,
    status: 2,
    coinImg: '',
    coinName: 'Coin name',
    percentage: 35
  },
  {
    role: true,
    status: 1,
    coinImg: '',
    coinName: 'Coin name',
    percentage: 35,
    time: '10:13:05:21'
  },
  {
    role: false,
    status: 0,
    coinImg: '',
    coinName: 'Coin name',
    percentage: 0,
    time: '10:13:05:21'
  },
  {
    role: false,
    status: 2,
    coinImg: '',
    coinName: 'Coin name',
    percentage: 35
  }
];

export const Home = () => {
  const [tabs, setTabs] = useState(0);
  const { setPage } = useStore();
  useEffect(() => {
    setPage(0);
  }, []);
  return (
    <>
      <SafePlaceCard />
      <KingpadCards>
        <KingpadCard
          title="Driven by $KING"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt labore et dolore."
          btnTitle="Discover"
          icon={KingLogoIcon}
        />
        <KingpadCard
          title="Want to launch on KingPad?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
          btnTitle="Apply now"
          icon={HelmetIcon}
        />
      </KingpadCards>
      <CardTabs>
        <CardTab
          onClick={() => setTabs(0)}
          sx={{ color: tabs === 0 ? '#8462F6' : 'theme.palette.primary.contrastText' }}
        >
          All
        </CardTab>
        <CardTab
          onClick={() => setTabs(1)}
          sx={{ color: tabs === 1 ? '#8462F6' : 'theme.palette.primary.contrastText' }}
        >
          On going
        </CardTab>
        <CardTab
          onClick={() => setTabs(2)}
          sx={{ color: tabs === 2 ? '#8462F6' : 'theme.palette.primary.contrastText' }}
        >
          Upcoming
        </CardTab>
        <CardTab
          onClick={() => setTabs(3)}
          sx={{ color: tabs === 3 ? '#8462F6' : 'theme.palette.primary.contrastText' }}
        >
          Ended
        </CardTab>
      </CardTabs>
      <CoinCards>
        {coinCardData.map((card: CoinCardProps, index: number) => (
          <CoinCard
            role={card.role}
            status={card.status}
            coinImg={card.coinImg}
            coinName={card.coinName}
            percentage={card.percentage}
            time={card.time}
            key={index}
          />
        ))}
      </CoinCards>
      <CardActions>
        <ShowmoreButton variant="outlined">Show more</ShowmoreButton>
      </CardActions>
    </>
  );
};

const KingpadCards = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: '14px',
  marginTop: '17px',
  [theme.breakpoints.down('mobile')]: {
    gridTemplateColumns: 'auto'
  }
}));

const CardTabs = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '23px',
  margin: '17px 0',
  padding: '8px',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '15px',
    gap: '16px'
  }
}));

const CardTab = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontFamily: 'gotham-bold',
  fontSize: '16px',
  cursor: 'pointer',

  [theme.breakpoints.down('ls')]: {
    fontSize: '14px'
  }
}));

const CoinCards = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  gap: '12px',
  [theme.breakpoints.down(1470)]: {
    gridTemplateColumns: 'auto auto'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'auto'
  }
}));

const CardActions = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: '50px 0'
}));

const ShowmoreButton = styled(Button)(({ theme }) => ({
  borderRadius: '19px',
  width: '155px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'none',
  fontSize: '15px',
  fontFamily: 'gotham-bold',
  color: theme.palette.secondary.contrastText,
  borderColor: theme.palette.secondary.contrastText,
  '&:hover': {
    color: theme.palette.secondary.contrastText,
    borderColor: theme.palette.secondary.contrastText
  },
  [theme.breakpoints.down('md')]: {
    width: '120px',
    height: '30px',
    fontSize: '13px'
  }
}));
