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
  isDisabled?: boolean;
  flexNum?: number;
}

interface containerProps {
  isDisabled: boolean;
  flexNum?: number;
}

export const RateCard = (props: RateCardProps) => {
  const { title, value, content, help, isDisabled, flexNum } = props;
  return (
    <RateCardContainer isDisabled={isDisabled === undefined ? false : isDisabled} flexNum={flexNum}>
      <SmallText>{title}</SmallText>
      {value === undefined ? <LargeText>-</LargeText> : <LargeText> {value} </LargeText>}
      {content !== undefined && <ContentText>{content}</ContentText>}
      <MiniText>{help}</MiniText>
    </RateCardContainer>
  );
};

const RateCardContainer = styled(Box)<containerProps>(({ isDisabled, flexNum, theme }) => ({
  padding: '32px 16px',
  boxShadow: '0px 3px 6px #00000029',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
  borderRadius: '15px',
  opacity: isDisabled ? 0.6 : 1,
  flex: flexNum,
  justifyContent: 'center'
}));

const ContentText = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '15px'
}));
