import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { SmallText } from 'src/Components/Text/SmallText';
import { FaTelegramPlane, FaTwitter, FaYoutube, FaFacebookF, FaDiscord, FaInstagram } from 'react-icons/fa';

interface AboutTokenProps {
  state: any;
  setState: (prop: string, value: string | number | boolean) => void;
}

export const AboutToken = (props: AboutTokenProps) => {
  const { state, setState } = props;
  return (
    <AboutTokenContainer>
      <TokenDatailInfoCard name="logoUrl" value={state.logoUrl} setState={setState} title="Logo (250x250 px)" />
      <TokenDatailInfoCard
        name="coverImgUrl"
        value={state.coverImgUrl}
        setState={setState}
        title="Cover Image (1005x237 px)"
      />
      <TokenDatailInfoCard
        name="youtubeVideoUrl"
        value={state.youtubeVideoUrl}
        setState={setState}
        title="Youtube video"
      />
      <TokenDatailInfoCard name="websiteUrl" value={state.websiteUrl} setState={setState} title="Website" />
      <TokenUrlCard
        name="telegramUrl"
        value={state.telegramUrl}
        setState={setState}
        icon={<FaTelegramPlane fontSize={25} />}
      />
      <TokenUrlCard name="twitterUrl" value={state.twitterUrl} setState={setState} icon={<FaTwitter fontSize={25} />} />
      <TokenUrlCard name="youtubeUrl" value={state.youtubeUrl} setState={setState} icon={<FaYoutube fontSize={25} />} />
      <TokenUrlCard
        name="facebookUrl"
        value={state.facebookUrl}
        setState={setState}
        icon={<FaFacebookF fontSize={25} />}
      />
      <TokenUrlCard name="discordUrl" value={state.discordUrl} setState={setState} icon={<FaDiscord fontSize={25} />} />
      <TokenUrlCard
        name="instagramUrl"
        value={state.instagramUrl}
        setState={setState}
        icon={<FaInstagram fontSize={25} />}
      />
    </AboutTokenContainer>
  );
};

interface InfoCardProps {
  name: string;
  value: string;
  setState: (prop: string, value: string | number | boolean) => void;
  title: string;
}

const TokenDatailInfoCard = (props: InfoCardProps) => {
  const { name, value, setState, title } = props;
  return (
    <TokenDetailInfoCardContainer>
      <SmallText>{title}</SmallText>
      <InputUrl placeholder="Insert url here" value={value} onChange={(e) => setState(name, e.currentTarget.value)} />
    </TokenDetailInfoCardContainer>
  );
};

interface UrlCardProps {
  name: string;
  value: string;
  setState: (prop: string, value: string | number | boolean) => void;
  icon: React.ReactNode;
}

const TokenUrlCard = (props: UrlCardProps) => {
  const { name, value, setState, icon } = props;
  return (
    <TokenUrlCardContainer>
      <TokenUrlIcon>{icon}</TokenUrlIcon>
      <InputUrl placeholder="Insert url here" value={value} onChange={(e) => setState(name, e.currentTarget.value)} />
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
  height: '30px',
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
