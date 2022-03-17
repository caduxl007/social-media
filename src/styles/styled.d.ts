import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      background: string;
      blue_top_background: string;
      blue_card: string;
      blue_text: string;
      text: string;
      toggle: string;
      lime_green: string;
      bright_red: string;
      facebook: string;
      twitter: string;
      instagram: string;
      youtube: string;
    };

    widths: {
      max_width: string;
      padding_container_default: string;
    };
  }
}
