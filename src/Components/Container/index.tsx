import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

interface PropsType {
  children: React.ReactNode;
}

export const Container = (props: PropsType) => {
  return (
    <Wrapper>
      <ContainerWrapper>{props.children}</ContainerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center'
});

const ContainerWrapper = styled(Box)({
  width: '96%',
  height: '100%'
});
