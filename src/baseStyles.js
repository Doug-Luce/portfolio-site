import { injectGlobal } from 'styled-components';
import * as palette from './components/color';
const baseStyles = () => injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    /* font-size: 62.5%; */
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: ${palette.mediumCream};
  }
`;

export default baseStyles;