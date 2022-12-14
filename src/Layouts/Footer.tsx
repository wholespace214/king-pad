import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { FooterLogoSvg, GithubIcon, MediumIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from 'src/Config/Images';

export const Footer = () => {
  return (
    <FooterContainer>
      <LogoSection>
        <SmallText>POWERD BY</SmallText>
        <KingLogo src={FooterLogoSvg} alt="footer-logo" />
      </LogoSection>
      <FooterLinks>
        <FooterLink>Cookie prefereneces</FooterLink>
        <VerticalDivider>|</VerticalDivider>
        <FooterLink>Privacy police</FooterLink>
        <VerticalDivider>|</VerticalDivider>
        <FooterLink>Term of use</FooterLink>
      </FooterLinks>
      <SocialLinks>
        <a href={'https://t.me/KlNGfinance'} rel="noopener noreferrer">
          <SocialIcon src={TelegramIcon} alt="social-icon" />
        </a>
        <a href={'https://twitter.com/kingfinance'} rel="noopener noreferrer">
          <SocialIcon src={TwitterIcon} alt="social-icon" />
        </a>
        <a href={'https://www.youtube.com/@kingfinanceco'} rel="noopener noreferrer">
          <SocialIcon src={YoutubeIcon} alt="social-icon" />
        </a>
        <a rel="noopener noreferrer">
          <SocialIcon src={GithubIcon} alt="social-icon" />
        </a>
        <a href={'https://medium.com/@kingfinance'} rel="noopener noreferrer">
          <SocialIcon src={MediumIcon} alt="social-icon" />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled(Box)(({ theme }) => ({
  minHeight: '340px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1A003E',
  flexDirection: 'column',
  gap: '2rem'
}));

const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3px'
}));

// const FooterContent = styled(Box)(({ theme }) => ({}));

const SmallText = styled(Box)(({ theme }) => ({
  fontSize: '10px',
  fontFamily: 'gotham-bold',
  color: '#FFFFFF'
}));

const KingLogo = styled('img')(({ theme }) => ({
  width: '62px',
  height: 'auto'
}));

const FooterLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  [theme.breakpoints.down('xs')]: {
    gap: '0.5rem'
  }
}));

const FooterLink = styled('a')({
  fontSize: '11px',
  textAlign: 'center',
  color: '#FFFFFF',
  cursor: 'pointer'
});

const VerticalDivider = styled(Box)({
  fontSize: '11px',
  color: '#FFFFFF'
});

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '40px',
  alignItems: 'center'
}));

const SocialIcon = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  width: '24px',
  height: 'auto',
  [theme.breakpoints.down('xs')]: {
    width: '20px',
    height: 'auto'
  }
}));
