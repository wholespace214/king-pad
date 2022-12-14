import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { useStore } from 'src/Context/StoreContext';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import './index.css';

interface CustomSwitchProps {
  title: string;
}

export const CustomSwitch = (props: CustomSwitchProps) => {
  const { isMode, setMode } = useStore();

  return (
    <CustomSwitchContainer>
      <input
        type="checkbox"
        className="checkbox"
        id={props.title}
        checked={isMode === 'dark'}
        onChange={() => setMode(isMode === 'dark' ? 'light' : 'dark')}
      />
      <label className="label" htmlFor={props.title}>
        <div className="ball"></div>
        <LightModeOutlined sx={{ width: '18px', height: '18px', color: '#fff' }} />
        <DarkModeOutlined sx={{ width: '18px', height: '18px', color: '#fff' }} />
      </label>
    </CustomSwitchContainer>
  );
};

const CustomSwitchContainer = styled(Box)(({ theme }) => ({
  display: 'block'
  // [theme.breakpoints.down('md')]: {
  //   display: 'none'
  // }
}));
