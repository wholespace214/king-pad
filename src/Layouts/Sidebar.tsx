import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { SidebarItems } from 'src/Components/Sidebar';
import { SidebarCard } from 'src/Components/Sidebar/SidebarCard';

export const KingPadSideBar = () => {
  return (
    <Container>
      <SidebarItems />
      <SidebarCard />
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  padding: '35px',
  minWidth: '276px',
  backgroundColor: theme.palette.danger.main,
  color: theme.palette.danger.contrastText,
  boxShadow: '1px 0px 6px #00000029',
  gap: '10px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}));
