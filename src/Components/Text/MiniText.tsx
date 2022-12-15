import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface MiniTextProps {
  children: React.ReactNode;
}

export const MiniText = ({ children }: MiniTextProps) => {
  return <MiniTextContainer>{children}</MiniTextContainer>;
};

const MiniTextContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '12px',
  textAlign: 'center'
}));
