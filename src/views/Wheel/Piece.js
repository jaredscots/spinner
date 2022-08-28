import cx from 'classnames';
import { useWheel } from './WheelProvider';
import styles from './Piece.css';

const colors = ['#db5f5f', '#65e165', '#4e4eef', '#eded43', '#e548c8', '#51dbca', '#d3d3d3', '#f5a052', '#5cc7db'];

export function Piece({ // eslint-disable-line
  option,
  i,
}) {
  const wheel = useWheel();

  const isSwitching = i === wheel.lukeAndAbiIndex || i === wheel.winnerIndex;

  const pieceDirectionPoint = {
    x: Math.cos(wheel.pieceDirectionAngleRadians) * ((wheel.switchingStep === 2 || wheel.switchingStep === 3) && isSwitching ? 30 : 0),
    y: Math.sin(wheel.pieceDirectionAngleRadians) * ((wheel.switchingStep === 2 || wheel.switchingStep === 3) && isSwitching ? 30 : 0),
  };

  let nextPieceAngle = wheel.pieceFullAngle * i;
  if (isSwitching && wheel.switchingStep >= 3 && i === wheel.lukeAndAbiIndex) nextPieceAngle = wheel.winnerAngle;
  if (isSwitching && wheel.switchingStep >= 3 && i === wheel.winnerIndex) nextPieceAngle = wheel.lukeAndAbiAngle;

  return (
    <g
      className={cx(styles.piece, {
        [styles.stepSwitching]: wheel.step === 'switching' && isSwitching,
      })}
    >
      <g
        style={{
          transform: `rotate(${nextPieceAngle}deg)`,
        }}
        className={styles.pieceContent}
      >
        <g
          style={{
            transform: `translate(${pieceDirectionPoint.x}px, -${pieceDirectionPoint.y}px)`,
          }}
          className={styles.pieceContent2}
        >
          <g className={styles.pieceContent3}>
            <path
              d={`M50,50 L50,0 A50,50 1 0,1 ${wheel.endPoint.x},${wheel.endPoint.y} z`}
              fill={colors[i % colors.length]}
              stroke="#333"
              strokeWidth="0.1"
              mask="url(#circle)"
            />
            <text
              x={60}
              y={50}
              style={{
                alignmentBaseline: 'middle',
                transform: `rotate(${wheel.pieceDirectionAngle}deg)`,
                transformOrigin: '50% 50%',
                fontSize: '4px',
                width: '100%',
              }}
            >
              {option.slice(0, 15)}
            </text>
          </g>
          <circle cx="50" cy="50" r="5" fill="transparent" />
        </g>
      </g>
    </g>
  );
}
