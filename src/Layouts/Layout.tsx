import { ToastContainer } from 'react-toastify';

import { Header } from './Header';
import { Footer } from './Footer';
import { KingPadSideBar } from './Sidebar';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Wrapper>
        <KingPadSideBar />
        <ContentContainer>{children}</ContentContainer>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          theme="light"
        />
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  marginTop: '75px'
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  padding: '30px 75px',
  width: '100%',
  maxWidth: '1440px',
  // [theme.breakpoints.down('desktop')]: {

  // }
  [theme.breakpoints.down('desktop')]: {
    padding: '30px 40px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 20px'
  }
}));
