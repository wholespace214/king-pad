import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { CalendarMonth } from '@mui/icons-material';
import { Box, IconButton, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { Dayjs } from 'dayjs';

interface DateProps {
  state: Dayjs | null;
  setState: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

export const DatePickerButton = (props: DateProps) => {
  const [isForcePickerOpen, setIsOpen] = useState(false);
  const { state, setState } = props;
  return (
    <React.Fragment>
      {/* <div>Date: {selectedDate?.toString()}</div> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ position: 'absolute' }}>
          <DateTimePicker
            open={isForcePickerOpen}
            onClose={() => setIsOpen(false)}
            value={state}
            onChange={setState}
            renderInput={(params) => <TextField {...params} sx={{ visibility: 'hidden' }} />}
          />
        </Box>
      </LocalizationProvider>
      <CalendarButton onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <CalendarMonth />
      </CalendarButton>
    </React.Fragment>
  );
};

const CalendarButton = styled(IconButton)(({ theme }) => ({
  color: '#8462F6',
  position: 'absolute',
  top: '18px',
  right: '10px'
}));
