import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    
    colors: {
      body: string;
      boxes: string;
      details: string;
      hover: string;
      shadowColor: string;
      textColor: string;
    }
  }
}
