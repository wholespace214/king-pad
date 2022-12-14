import { Button } from '@mui/material';
import { styled } from '@mui/system';

interface KingButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: any;
  onClick?: () => void;
}

export const KingButton = (props: KingButtonProps) => {
  return (
    <CustomButton sx={props.style} className={props.className} onClick={props.onClick}>
      {props.children}
    </CustomButton>
  );
};

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  fontFamily: 'gotham-bold',
  fontSize: '12px',
  letterSpacing: '0.05rem',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  padding: '2px 18px',
  height: '36px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main
  },
  [theme.breakpoints.down('mobile')]: {
    padding: '0 12px',
    fontSize: '8px',
    height: '28px'
  }
}));
