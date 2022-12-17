import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { SmallText } from '../Text/SmallText';
import { DatePickerButton } from '../CustomButton/DatePickerButton';
import { Dayjs } from 'dayjs';
import { MiniText } from '../Text/MiniText';

interface CardProps {
  title: string;
  state: Dayjs | null;
  setState: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

export const PresaleCard = (props: CardProps) => {
  const { title, state, setState } = props;
  return (
    <PresaleCardContainer>
      <SmallText>{title}</SmallText>
      {state === null ? (
        <CardText>
          <MediumText>- / - / -</MediumText>
          <MediumText>- GMT</MediumText>
        </CardText>
      ) : (
        <MediumText>{state?.toString()}</MediumText>
      )}

      <MiniText>Select start time (GMT Time Zone)</MiniText>
      <DatePickerButton state={state} setState={setState} />
    </PresaleCardContainer>
  );
};

const PresaleCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '31px',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  position: 'relative',
  textAlign: 'center',
  gap: '21px'
}));

const CardText = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center'
}));

const MediumText = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '25px',
  fontFamily: 'gotham-bold'
}));
