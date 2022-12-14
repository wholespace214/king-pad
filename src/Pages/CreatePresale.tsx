import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const CreatePresale = () => {
  return (
    <>
      <BannerCard>Banner ( to do ) </BannerCard>
    </>
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
