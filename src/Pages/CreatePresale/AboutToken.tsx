import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { SmallText } from 'src/Components/Text/SmallText';
import { MiniText } from 'src/Components/Text/MiniText';
import { FaTelegramPlane, FaTwitter, FaYoutube, FaFacebookF, FaDiscord, FaInstagram } from 'react-icons/fa';

export const AboutToken = () => {
  return (
    <AboutTokenContainer>
      <TokenDatailInfoCard title="Logo (250x250 px)" />
      <TokenDatailInfoCard title="Cover Image (1005x237 px)" />
      <TokenDatailInfoCard title="Youtube video" />
      <TokenDatailInfoCard title="Website" />
      <TokenUrlCard icon={<FaTelegramPlane fontSize={25} />} />
      <TokenUrlCard icon={<FaTwitter fontSize={25} />} />
      <TokenUrlCard icon={<FaYoutube fontSize={25} />} />
      <TokenUrlCard icon={<FaFacebookF fontSize={25} />} />
      <TokenUrlCard icon={<FaDiscord fontSize={25} />} />
      <TokenUrlCard icon={<FaInstagram fontSize={25} />} />
    </AboutTokenContainer>
  );
};

interface InfoCardProps {
  title: string;
}

const TokenDatailInfoCard = (props: InfoCardProps) => {
  const { title } = props;
  return (
    <TokenDetailInfoCardContainer>
      <SmallText>{title}</SmallText>
      <InputUrl placeholder="Insert url here" />
    </TokenDetailInfoCardContainer>
  );
};

interface UrlCardProps {
  icon: React.ReactNode;
}

const TokenUrlCard = (props: UrlCardProps) => {
  const { icon } = props;
  return (
    <TokenUrlCardContainer>
      <TokenUrlIcon>{icon}</TokenUrlIcon>
      <InputUrl placeholder="Insert url here" />
    </TokenUrlCardContainer>
  );
};

const AboutTokenContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 2fr)',
  gap: '14px',
  marginTop: '37px',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 4fr)'
  }
}));

const TokenDetailInfoCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  padding: '14px',
  width: '100%',
  textAlign: 'center'
}));

const InputUrl = styled('input')(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  background: 'none',
  outline: 'none',
  border: 'none',
  height: '20px',
  color: theme.palette.primary.contrastText,
  '::placeholder': {
    color: theme.palette.primary.contrastText,
    fontSize: '12px',
    opacity: 0.6
  }
}));

const TokenUrlCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  padding: '23px 44px',
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  gap: '20px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '17px'
  }
}));

const TokenUrlIcon = styled(Box)(({ theme }) => ({
  color: '#8462F6',
  width: '25px',
  height: '25px',
  position: 'absolute',
  top: '20px',
  [theme.breakpoints.down('md')]: {
    position: 'unset'
  }
}));
