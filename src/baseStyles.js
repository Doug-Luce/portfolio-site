import { injectGlobal } from 'styled-components';
import * as palette from './components/color';

const baseStyles = () => injectGlobal`
  * {
    @import url('https://fonts.googleapis.com/css?family=Jura');
    box-sizing: border-box;
    margin: 0;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: ${palette.mediumCream};
  }

  @media screen and (max-width: 1000px) {
  #bottom-nav {
    display: none;
  }
}
`;

export default baseStyles;