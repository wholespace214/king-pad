import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { LargeText } from '../Text/LargeText';
import { MiniText } from '../Text/MiniText';
import { SmallText } from '../Text/SmallText';

interface RateCardProps {
  title: string;
  value?: string;
  content?: string;
  help: string;
}

export const RateCard = (props: RateCardProps) => {
  const { title, value, content, help } = props;
  return (
    <RateCardContainer>
      <SmallText>{title}</SmallText>
      {value === undefined ? <LargeText>-</LargeText> : <LargeText> {value} </LargeText>}
      {content !== undefined && <ContentText>{content}</ContentText>}
      <MiniText>{help}</MiniText>
    </RateCardContainer>
  );
};

const RateCardContainer = styled(Box)(({ theme }) => ({
  padding: '32px',
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
  borderRadius: '15px'
}));

const ContentText = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '15px'
}));
