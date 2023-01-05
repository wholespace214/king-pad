import { useEffect } from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { ExploreBanner } from './ExploreBanner';
import { ProjectOverview } from './ProjectOverview';
import { CoinDetailCards } from './CoinDetailCards';
import { CoinInfos } from './CoinInfos';

export const CoinExplore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <CoinExploreContainer>
      <ExploreBanner />
      <ProjectOverview />
      <CoinDetailCards />
      <CoinInfos />
    </CoinExploreContainer>
  );
};

const CoinExploreContainer = styled(Box)(({ theme }) => ({}));
