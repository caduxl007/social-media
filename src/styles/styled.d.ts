import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      medium_white: string;
      primary: string;
      secundary: string;
      green: string;
      red: string;
      black: string;
      turquoise_blue: string;
      header_scroll: string;
      medium_gray: string;
      box_shadow: string;

      text: string;
    };

    spacing: {
      small: string;
      small_medium: string;
      medium: string;
      medium_large: string;
      large: string;

      max_width: string;
      padding_container_default: string;
    };
  }
}
