import styled from 'styled-components';
import * as palette from '../../components/color';
import { defaultBreakpoints } from "styled-media-query";

console.log(defaultBreakpoints);

const AboutStyles = styled.div`
   p, ul {
    line-height: 2rem;
  }

  button {
    display: flex;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.2rem;
    letter-spacing: 1.5px;
    line-height: 3rem;
    padding-right: 3rem;
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

  #para-one {
    padding-bottom: 1rem;
  }

  .row {
    display: flex;
    padding-bottom: 2.5rem;
    padding-left: 12rem;
  }

  .column-half {
    flex: 50%;
  }

  .column-one-third {
    flex: 33.3%;
  }

  .column-two-thirds {
    flex: 77.7%;
    margin-right: 20rem;
    max-width: 750px;
  }

  .education p {
    padding-bottom: .5rem;
  }

  .interest {
    letter-spacing: 1.2px;
    padding: 0;
    padding-bottom: 2rem;
  }

  .interested {
    font-size: 1.2rem;
    margin: 0 auto;
    padding-top: 2rem;
  }

  .mobile-portrait {
    display: none;
  }

  .portrait img {
    max-width: 9rem;
  }

  .position-one {
    padding-bottom: .5rem;
  }

  .top-row {
    padding-top: 3rem;

    @media (max-width: 1150px) {
      h2 {
        font-size: 2.6vw;
      }
    }

    @media (max-width: 865px) {
      h2 {
        font-size: 2.2rem;
      }

      .portrait {
        display: none;
      }
    }
`;

export default AboutStyles;