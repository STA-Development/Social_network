import { borders, colors, border_style, margin, padding } from '../../assets/variables';
export const GoogleButtonUI = {
  border: `${borders.b1} ${border_style.solid} ${colors.black}`,
  margin: margin.size,
  padding: padding.size,

  '&.MuiButton-contained': {
    color: colors.black,
  },
  '&.MuiButton-outlined': {
    color: colors.black,
  },
};

export const LogInButtonUI = {
  border: `${borders.none} ${border_style.solid} ${colors.black}`,
  '&.MuiButton-contained': {
    color: colors.white,
  },
  '&.MuiButton-outlined': {
    color: colors.white,
  },
};
