import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { KingButton } from '../CustomButton';

interface KingpadCardProps {
  title: string;
  content: string;
  btnTitle: string;
  icon: string;
  onClick?: () => void;
}

export const KingpadCard = (props: KingpadCardProps) => {
  return (
    <KingpadCardContainer>
      <CardDetails>
        <CardTitle>{props.title}</CardTitle>
        <CardContent>{props.content}</CardContent>
        <MobileIcon>
          <Img src={props.icon} alt="kingpad-icon" />
        </MobileIcon>
        <CustomKingButton onClick={props.onClick}>{props.btnTitle}</CustomKingButton>
      </CardDetails>
      <CardIcon>
        <Img src={props.icon} alt="kingpad-icon" />
      </CardIcon>
    </KingpadCardContainer>
  );
};

const KingpadCardContainer = styled(Box)(({ theme }) => ({
  padding: '32px 47px',
  display: 'flex',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '15px',
  [theme.breakpoints.down('xl')]: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
  },
  [theme.breakpoints.down('mobile')]: {
    flexDirection: 'row'
  }
}));

const CardDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'flex-start',
  height: '100%',
  [theme.breakpoints.down('xl')]: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  [theme.breakpoints.down('mobile')]: {
    alignItems: 'flex-start'
  }
}));

const CardTitle = styled(Box)(({ theme }) => ({
  fontFamily: 'gotham-bold',
  fontSize: '30px',
  lineHeight: '30px',
  textAlign: 'left',
  [theme.breakpoints.down('xl')]: {
    textAlign: 'center'
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '24px'
  },
  [theme.breakpoints.down('mobile')]: {
    textAlign: 'left',
    fontSize: '20px'
  },
  [theme.breakpoints.down('ls')]: {
    fontSize: '16px',
    lineHeight: '24px'
  }
}));

const CardContent = styled(Box)(({ theme }) => ({
  fontSize: '14px',
  textAlign: 'left',
  [theme.breakpoints.down('xl')]: {
    textAlign: 'center'
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '12px'
  },
  [theme.breakpoints.down('mobile')]: {
    textAlign: 'left'
  },
  [theme.breakpoints.down('ls')]: {
    fontSize: '10px'
  }
}));

const CardIcon = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    display: 'none'
  },
  [theme.breakpoints.down('mobile')]: {
    display: 'block'
  }
}));

const Img = styled('img')(({ theme }) => ({
  maxWidth: '150px',
  maxHeight: '150px',
  [theme.breakpoints.down('tablet')]: {
    maxWidth: '100px',
    maxHeight: '100px'
  }
}));

const MobileIcon = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('xl')]: {
    display: 'block'
  },
  [theme.breakpoints.down('mobile')]: {
    display: 'none'
  }
}));

const CustomKingButton = styled(KingButton)(({ theme }) => ({
  [theme.breakpoints.down('mobile')]: {
    fontSize: '12px',
    height: '36px'
  }
}));
