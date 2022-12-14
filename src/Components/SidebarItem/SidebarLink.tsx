import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface SidebarLinkProps {
  active?: boolean | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}

export const SidebarLink = (props: SidebarLinkProps) => {
  return (
    <SidebarLinkContainer
      sx={{ color: props.active === true ? '#8462F6' : 'theme.palette.primary.contrastText' }}
      onClick={props.onClick}
    >
      {props.children}
    </SidebarLinkContainer>
  );
};

const SidebarLinkContainer = styled(Box)(({ theme }) => ({
  fontSize: '15px',
  cursor: 'pointer',
  display: 'flex',
  gap: '4px',
  alignItems: 'center'
}));
