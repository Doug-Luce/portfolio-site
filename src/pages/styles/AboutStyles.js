import styled from 'styled-components';
import * as palette from '../../components/color';
import media from 'styled-media-query';

const AboutStyles = styled.div`
  button {
    margin: 0 auto;
  }

  span {
    color: ${palette.lightBlue};
  }

  ul {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${palette.black};
    list-style-type: none;
    padding: 0;
  }

  .row {
    display: flex;
    padding-bottom: 2rem;
    padding-left: 5rem;
  }

  .column-half {
    flex: 50%;
  }

  .column-one-third {
    flex: 33.3%;
  }

  .column-two-thirds {
    flex: 77.7%;
  }

  .education p {
    padding-bottom: .5rem;
  }

  .mobile-portrait {
    display: none;
  }

  .top-row {
    padding-top: 3rem;
  }
`;

export default AboutStyles;