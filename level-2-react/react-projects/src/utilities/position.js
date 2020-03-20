export const absolute = ({
  x = 'left',
  y = 'top',
  xValue = '0',
  yValue = '0'
}) => `
  position: absolute;
  ${x}: ${xValue};
  ${y}: ${yValue};
`
