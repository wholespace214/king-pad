import { SidebarItem } from '../SidebarItem';
import { SidebarLink } from '../SidebarItem/SidebarLink';
import { RocketLaunchOutlined, HealthAndSafetyOutlined, LockOutlined, DescriptionOutlined } from '@mui/icons-material';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { useStore } from 'src/Context/StoreContext';
import { useNavigate } from 'react-router-dom';

interface SidebarItemProps {
  setOpen?: (value: boolean) => void;
}

export const SidebarItems = (props: SidebarItemProps) => {
  const { setOpen } = props;
  const { page, setPage } = useStore();
  const navigate = useNavigate();
  const handleLinkClicked = (val: number) => {
    if (setOpen != null) setOpen(false);
    setPage(val);
    switch (val) {
      case 3:
        navigate('/create');
        break;
      default:
        break;
    }
  };
  return (
    <>
      <SidebarItem icon={<RocketLaunchOutlined />} title="Launchpad">
        <SidebarLink active={page === 1} onClick={() => handleLinkClicked(1)}>
          Presale
        </SidebarLink>
        <SidebarLink active={page === 2} onClick={() => handleLinkClicked(2)}>
          Fairlaunch<SoonBadge>Soon</SoonBadge>
        </SidebarLink>
        <SidebarLink active={page === 3} onClick={() => handleLinkClicked(3)}>
          Create Launch
        </SidebarLink>
      </SidebarItem>
      <SidebarItem icon={<HealthAndSafetyOutlined />} title="Security">
        <SidebarLink active={page === 4} onClick={() => handleLinkClicked(4)}>
          Audit
        </SidebarLink>
        <SidebarLink active={page === 5} onClick={() => handleLinkClicked(5)}>
          KYC
        </SidebarLink>
      </SidebarItem>
      <SidebarItem icon={<LockOutlined />} title="Locker">
        <SidebarLink active={page === 6} onClick={() => handleLinkClicked(6)}>
          Lock LP
        </SidebarLink>
        <SidebarLink active={page === 7} onClick={() => handleLinkClicked(7)}>
          Lock Token
        </SidebarLink>
      </SidebarItem>
      <SidebarItem icon={<DescriptionOutlined />} title="Doc" />
    </>
  );
};

const SoonBadge = styled(Box)({
  borderRadius: '19px',
  background: '#8462F6',
  fontFamily: 'gotham-bold',
  color: '#FFFFFF',
  fontSize: '8px',
  padding: '1px',
  width: '37px',
  height: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase'
});
