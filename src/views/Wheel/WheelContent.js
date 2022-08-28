import { useEffect } from 'react';
import _ from 'lodash';
import cx from 'classnames';
import { Timeout } from '../../ui';
import { useWheel } from './WheelProvider';
import { Piece } from './Piece';
import styles from './Wheel.css';

const steps = ['waiting', 'startSpinning', 'spinning', 'switching', 'ending', 'end'];

export function WheelContent() {
  const wheel = useWheel();

  useEffect(() => {
    if (wheel.step === 'startSpinning') {
      wheel.setStep('spinning');
      wheel.setSwitchingStep(1);
    }

    if (wheel.step === 'end') {
      wheel.onEnd(wheel.winner);
    }
  }, [wheel.step]);

  const cxClassName = cx(styles.wheel, {
    [styles.clickable]: wheel.clickable,
    [styles[`step${_.capitalize(wheel.step[0])}${wheel.step.slice(1)}`]]: true,
  });

  return (
    <div // eslint-disable-line
      className={cxClassName}
      onClick={() => {
        if (wheel.clickable && wheel.options.length >= 2) {
          wheel.onClicked();
          wheel.setStep('startSpinning');
        }
      }}
    >
      <div
        className={styles.content}
        style={steps.indexOf(wheel.step) >= steps.indexOf('spinning')
          ? {
            transform: `rotate(${wheel.endAngle}deg)`,
          }
          : undefined}
      >
        <svg viewBox="0 0 100 100" className={styles.svg}>
          <g>
            <mask id="circle">
              <circle fill="white" cx="50" cy="50" r="50" />
              <circle fill="black" cx="50" cy="50" r="5" />
            </mask>
            <circle cx="50" cy="50" r="50" fill="#444" stroke="#333" strokeWidth="0.5" />
            {wheel.options.map((option, i) => (
              <Piece
                key={i} // eslint-disable-line
                option={option}
                i={i}
              />
            ))}
            <circle cx="50" cy="50" r="5" fill="#333" stroke="#222" strokeWidth="0.5" />
          </g>
        </svg>
      </div>
      <svg viewBox="0 0 24 24" className={styles.play}>
        <path d="M8 5v14l11-7z" />
      </svg>
      <div className={styles.pointer} />
      {wheel.step === 'spinning' && (
        <Timeout
          ms={1000}
          onTimeout={() => wheel.setClickable(false)}
        />
      )}
      {wheel.step === 'spinning' && (
        <Timeout
          ms={15000}
          onTimeout={() => wheel.setStep(wheel.hasLukeAndAbi ? 'switching' : 'ending')}
        />
      )}
      {wheel.step === 'switching' && wheel.switchingStep === 1 && (
        <Timeout
          ms={1000}
          onTimeout={() => {
            wheel.setSwitchingStep(2);
          }}
        />
      )}
      {wheel.step === 'switching' && wheel.switchingStep === 2 && (
        <Timeout
          ms={1000}
          onTimeout={() => {
            wheel.setSwitchingStep(3);
          }}
        />
      )}
      {wheel.step === 'switching' && wheel.switchingStep === 3 && (
        <Timeout
          ms={1000}
          onTimeout={() => {
            wheel.setSwitchingStep(4);
          }}
        />
      )}
      {wheel.step === 'switching' && wheel.switchingStep === 4 && (
        <Timeout
          ms={3000}
          onTimeout={() => {
            wheel.setStep('end');
          }}
        />
      )}
      {wheel.step === 'ending' && (
        <Timeout
          ms={1000}
          onTimeout={() => {
            wheel.setStep('end');
          }}
        />
      )}
    </div>
  );
}
