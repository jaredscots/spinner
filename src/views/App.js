import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import cx from 'classnames';
import { Background } from './Background/Background';
import { Wheel } from './Wheel/Wheel';
import styles from './App.css';

export function App() {
  const [text, setText] = useState(() => {
    try {
      return window.localStorage.getItem('text') ?? 'Option 1\nOption 2\nLuke & Abi\nOption 3\nOption 4\n';
    } catch (err) {
      // do nothing
    }

    return 'Option 1\nOption 2\nLuke & Abi\nOption 3\nOption 4\n';
  });

  const [hasClicked, setHasClicked] = useState(false);
  const [winner, setWinner] = useState();
  const { width, height } = useWindowSize();

  useEffect(() => {
    window.localStorage.setItem('text', text);
  }, [text]);

  const options = text.split('\n').map((item) => item.trim()).filter((item) => item !== '');

  return (
    <>
      <Background />
      <div className={styles.page}>
        <textarea
          readOnly={hasClicked}
          placeholder="Add options here..."
          value={text}
          className={cx(styles.textarea, {
            [styles.hidden]: hasClicked,
          })}
          onChange={(e) => setText(e.target.value)}
        />
        <div className={styles.container}>
          {options.length >= 2 && (
            <div
              className={styles.wheelContent}
              style={height > width + 150
                ? {
                  height: width - 150,
                }
                : undefined}
            >
              <Wheel
                options={options}
                onClicked={() => setHasClicked(true)}
                onEnd={(nextWinner) => {
                  setWinner(nextWinner);
                }}
              />
            </div>
          )}
          {options.length < 2 && (
            <span className={styles.panel}>
              Add some more options to begin!
            </span>
          )}
          {winner != null && (
            <span className={styles.winnerPanel}>
              <div>Congratulations</div>
              <div className={styles.winner}>
                <span className={styles.winner2}>
                  {winner}
                </span>
                <span>!!!</span>
              </div>
              <div>You're on clean up duty :)</div>
            </span>
          )}
        </div>
        {winner != null && (
          <Confetti
            width={width}
            height={height}
          />
        )}
      </div>
    </>
  );
}
