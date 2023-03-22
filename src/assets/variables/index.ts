export const getCurrentData = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  return date + '/' + month + '/' + year;
};
export const margin = {
  top: '30px',
  auto: 'auto',
  cameraLeft: '200px',
};
export const padding = {
  top: '10px',
};
export const position = {
  property: 'absolute',
  absolute: 'absolute',
  relative: 'relative',
};
export const display = {
  grid: 'grid',
  flex: 'flex',
  flexDirectionColumns: 'column',
};
export const justifyContent = {
  center: 'center',
  spaceBetween: 'spaceBetWeen',
};

export const colors = {
  black: '#131924',
  white: '#ffffff',
  lightRed: '#fbeeee',
  lightBlue: '#f7fbfc',
  lightGray: '#E8E8E8',
};
export const borders = {
  b1: '1px',
  none: 'none',
  coverRadius: '15px',
  circleRadius: '50%',
};
export const border_style = {
  solid: 'solid',
};
