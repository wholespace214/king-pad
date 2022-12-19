import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

interface SmallTextProps {
  children: React.ReactNode;
}

export const SmallText = ({ children }: SmallTextProps) => {
  return <SmallTextContainer>{children}</SmallTextContainer>;
};

const SmallTextContainer = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: '#8462F6',
  textAlign: 'center',
  fontFamily: 'gotham-bold',
  [theme.breakpoints.down('xs')]: {
    fontSize: '14px'
  }
}));
