import { colors_default } from './colors-default';
import { spacing } from './spacing';

export default {
  title: 'dark',

  colors: {
    ...colors_default,
    background: 'hsl(230, 17%, 14%)',
    blue_top_background: 'hsl(232, 19%, 15%)',
    blue_card: 'hsl(228, 28%, 20%)',
    blue_text: 'hsl(228, 34%, 66%)',
    text: 'hsl(0, 0%, 100%)',
    toggle: 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',
  },
  spacing,
};
