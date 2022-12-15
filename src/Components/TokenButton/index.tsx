import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

interface TokenButtonProps {
  icon: string;
  name: string;
  isClicked: boolean;
  onClick?: () => void;
}

interface TokenProps {
  isClicked: boolean;
}

export const TokenButton = (props: TokenButtonProps) => {
  const { icon, name, isClicked, onClick } = props;
  return (
    <TokenButtonContainer onClick={onClick} isClicked={isClicked}>
      <Img src={icon} alt="token-icon" />
      <TokenName isClicked={isClicked}>{name}</TokenName>
    </TokenButtonContainer>
  );
};

const TokenButtonContainer = styled(Button)<TokenProps>(({ isClicked, theme }) => ({
  width: '98px',
  height: '86px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '9px',
  borderRadius: '8px',
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: isClicked ? '#8462F6' : '#F7F7F7',
  '&:hover': {
    backgroundColor: isClicked ? '#8462F6' : '#F7F7F7'
  }
}));

const TokenName = styled(Box)<TokenProps>(({ isClicked, theme }) => ({
  fontSize: '15px',
  color: isClicked ? '#FFFFFF' : '#1A023E',
  fontFamily: 'gotham-bold'
}));

const Img = styled('img')(({ theme }) => ({
  width: '22px',
  height: '22px'
}));
