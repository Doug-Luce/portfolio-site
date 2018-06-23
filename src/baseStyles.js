import { injectGlobal } from 'styled-components';
import * as palette from './components/color';
const baseStyles = () => injectGlobal`
  * {
    margin: 0;
    font-size: 62.5%;
  }

  body {
    background-color: ${palette.mediumCream};
  }
`;

export default baseStyles;