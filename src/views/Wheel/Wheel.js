import { WheelProvider } from './WheelProvider';
import { WheelContent } from './WheelContent';

export function Wheel({
  options,
  onClicked,
  onEnd,
}) {
  return (
    <WheelProvider
      options={options}
      onClicked={onClicked}
      onEnd={onEnd}
    >
      <WheelContent />
    </WheelProvider>
  );
}
