import { styled } from '@mui/system';
import './index.css';

interface RaisedProps {
  percentage: number;
  raised: number;
}

export const RaisedProgressBar = (props: RaisedProps) => {
  const sqSize = 180;
  const strokeWidth = 20;
  const innerStrokeWidth = 5;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * props.percentage) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <CircleBackground
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${innerStrokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }}
      />
      <CircleText className="circle-text" x="50%" y="30%" dy=".3em" textAnchor="middle">
        PROGRESS
      </CircleText>
      <text className="progress-text" x="50%" y="42%" dy=".3em" textAnchor="middle">
        {props.percentage}%
      </text>
      <text className="raised-text" x="50%" y="62%" dy=".3em" textAnchor="middle">
        Raised
      </text>
      <CircleText className="bnb-text" x="50%" y="72%" dy=".3em" textAnchor="middle">
        {props.raised} BNB
      </CircleText>
    </svg>
  );
};

const CircleBackground = styled('circle')(({ theme }) => ({
  stroke: theme.palette.info.main
}));

const CircleText = styled('text')(({ theme }) => ({
  fontSize: '13px',
  fontFamily: 'gotham-bold',
  fill: theme.palette.primary.contrastText
}));
