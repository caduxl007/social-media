import { colors_default } from './colors-default';
import { widths } from './widths';

const light = {
  title: 'light',

  colors: {
    ...colors_default,
    background: 'hsl(0, 0%, 100%)',
    blue_top_background: 'hsl(225, 100%, 98%)',
    blue_card: 'hsl(227, 47%, 96%)',
    blue_text: 'hsl(228, 12%, 44%)',
    text: 'hsl(230, 17%, 14%)',
    toggle: 'hsl(230, 22%, 74%)',
  },
  widths,
};

export default light;
