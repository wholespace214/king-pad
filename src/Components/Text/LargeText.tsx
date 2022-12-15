import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface LargeTextProps {
  children: React.ReactNode;
}

export const LargeText = ({ children }: LargeTextProps) => {
  return <LargeTextContainer>{children}</LargeTextContainer>;
};

const LargeTextContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '45px'
}));
