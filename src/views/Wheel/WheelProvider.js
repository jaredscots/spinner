import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getPosition } from './getPosition';
import { toRadians } from './toRadians';

export const WheelContext = createContext();

export function useWheel() {
  return useContext(WheelContext);
}

export function WheelProvider({
  options,
  children,
  onClicked,
  onEnd,
}) {
  const [clickable, setClickable] = useState(true);
  const [step, setStep] = useState('waiting');
  const [switchingStep, setSwitchingStep] = useState(1);

  const [winnerIndex, setWinnerIndex] = useState();

  const pieceFullAngle = 360 / options.length;

  const randomEndAngle = useMemo(() => (
    Math.random() * pieceFullAngle
  ), [pieceFullAngle]);

  const pieceDirectionAngle = -90 + (pieceFullAngle / 2);
  const endPoint = getPosition(pieceFullAngle);

  const pieceDirectionAngleRadians = toRadians(pieceDirectionAngle * -1);

  const lukeAndAbiIndex = options.findIndex((opt) => opt.includes('Luke') && opt.includes('Abi'));
  let lukeAndAbiAngle = (lukeAndAbiIndex * pieceFullAngle);
  const hasLukeAndAbi = lukeAndAbiIndex !== -1;

  let winnerAngle = winnerIndex * pieceFullAngle;

  if ((winnerAngle - lukeAndAbiAngle) > 180) {
    lukeAndAbiAngle += 360;
    winnerAngle -= 360;
  } else if ((lukeAndAbiAngle - winnerAngle) > 180) {
    lukeAndAbiAngle -= 360;
    winnerAngle += 360;
  }

  const endAngle = hasLukeAndAbi
    ? (360 * 9) + (90 - (pieceFullAngle * (lukeAndAbiIndex + 1)) + 1)
    : (360 * 9) + (90 - (pieceFullAngle * (winnerIndex + 1)) + randomEndAngle);

  useEffect(() => {
    let nextWinnerIndex = lukeAndAbiIndex;
    while (nextWinnerIndex === lukeAndAbiIndex) {
      nextWinnerIndex = Math.floor(Math.random() * options.length);
    }

    setWinnerIndex(nextWinnerIndex);
  }, [JSON.stringify(options)]);

  const context = {
    options,

    clickable,
    setClickable,

    step,
    setStep,

    switchingStep,
    setSwitchingStep,

    hasLukeAndAbi,
    lukeAndAbiIndex,
    lukeAndAbiAngle,

    winnerIndex,
    winnerAngle,
    winner: options[winnerIndex],

    pieceFullAngle,
    pieceDirectionAngle,
    pieceDirectionAngleRadians,
    endPoint,
    endAngle,

    onClicked,
    onEnd,
  };

  return (
    <WheelContext.Provider value={context}>
      {children}
    </WheelContext.Provider>
  );
}
