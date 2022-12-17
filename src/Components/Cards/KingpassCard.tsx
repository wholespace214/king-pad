import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { MiniText } from '../Text/MiniText';
import { SmallText } from '../Text/SmallText';

export const KingpassCard = () => {
  return (
    <CardContainer>
      <SmallText>Kingpass duration</SmallText>
      <DateContainer>
        <DateMark title="Days" />
        <DateMark title="Hours" />
        <DateMark title="Minutes" />
      </DateContainer>
      <MiniText>how long do you want the Kingpins phase to last before it goes public?</MiniText>
    </CardContainer>
  );
};

const CardContainer = styled(Box)(({ theme }) => ({
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  padding: '31px 54px 17px 54px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '30px'
}));

interface DateMarkProps {
  value?: number;
  title: string;
}

const DateMark = (props: DateMarkProps) => {
  const { value, title } = props;
  return (
    <Box>
      <DateValue>{value === undefined ? '-' : value}</DateValue>
      <DateTitle>{title}</DateTitle>
    </Box>
  );
};

const DateValue = styled(Box)(({ theme }) => ({
  fontSize: '25px',
  textAlign: 'center',
  fontFamily: 'gotham-bold'
}));

const DateTitle = styled(Box)(({ theme }) => ({
  fontSize: '10px',
  color: '#8462F6',
  textTransform: 'uppercase'
}));

const DateContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '45px'
}));
