import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const ProjectOverview = () => {
  return (
    <ProjectOverviewContainer>
      <ProjectOverViewBox>
        <OverViewTitle>Project Overview</OverViewTitle>
        <OverViewDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. it anim id est laborum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </OverViewDescription>
      </ProjectOverViewBox>
      <ProjectMovie />
    </ProjectOverviewContainer>
  );
};

const ProjectOverviewContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '80px',
  padding: '45px',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  marginTop: '18px',
  [theme.breakpoints.down('xl')]: {
    gap: '20px'
  },
  [theme.breakpoints.down('desktop')]: {
    flexDirection: 'column',
    padding: '20px'
  }
}));

const ProjectOverViewBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '7px'
}));

const OverViewTitle = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  fontFamily: 'gotham-bold',
  [theme.breakpoints.down('desktop')]: {
    fontSize: '14px'
  }
}));

const OverViewDescription = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  [theme.breakpoints.down('desktop')]: {
    fontSize: '10px'
  }
}));

const ProjectMovie = styled(Box)(({ theme }) => ({
  width: '288px',
  minWidth: '288px',
  height: '160px',
  borderRadius: '15px',
  backgroundColor: '#8462F6',
  [theme.breakpoints.down('desktop')]: {
    width: '100%',
    minWidth: '100%'
  }
}));
