import { injectGlobal } from 'styled-components';

const baseStyles = () => injectGlobal`
  * {
    margin: 0;
  }
`;

export default baseStyles;