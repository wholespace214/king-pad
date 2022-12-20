import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/system';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

interface DropdownProps {
  name: string;
  itemValue: string;
  setItemValue: any;
}

export const Dropdown = (props: DropdownProps) => {
  const { name, itemValue, setItemValue } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    setItemValue(e.currentTarget.innerText, name);
    handleClose();
  };

  return (
    <div>
      <DropDownButton
        id="fade-button"
        aria-controls={isOpen ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        {itemValue}
        {isOpen ? (
          <NavigateNext sx={{ transform: 'rotate(-90deg)', color: '#8462F6' }} />
        ) : (
          <NavigateBefore sx={{ transform: 'rotate(-90deg)', color: '#8462F6' }} />
        )}
      </DropDownButton>
      <DropDownMenu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button'
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <DropDownMenuItem onClick={handleMenuClick}>Pancakeswap</DropDownMenuItem>
        <DropDownMenuItem onClick={handleMenuClick}>Pancakeswap1</DropDownMenuItem>
        <DropDownMenuItem onClick={handleMenuClick}>Pancakeswap2</DropDownMenuItem>
      </DropDownMenu>
    </div>
  );
};

const DropDownButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'none',
  color: theme.palette.primary.contrastText,
  textTransform: 'none',
  margin: '8px',
  fontSize: '15px',
  fontFamily: 'gotham-bold'
}));

const DropDownMenu = styled(Menu)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: 'none',
  '&.MuiPaper-root': {
    backgroundImage: 'none',
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main
  }
}));

const DropDownMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontFamily: 'gotham-bold'
}));
