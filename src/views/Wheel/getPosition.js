export function getPosition(angle) {
  const radians = ((angle - 90) * Math.PI) / 180;

  return {
    x: 50 + (50 * Math.cos(radians)),
    y: 50 + (50 * Math.sin(radians)),
  };
}
