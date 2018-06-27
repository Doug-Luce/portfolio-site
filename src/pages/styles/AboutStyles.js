import styled from 'styled-components';
import * as palette from '../../components/color';
import media from 'styled-media-query';

const AboutStyles = styled.div`

  .about-page {
    display: flex;
  }
   p, ul {
    line-height: 2rem;
  }

  button {
    display: flex;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.6rem;
    letter-spacing: 1.5px;
    line-height: 3rem;
    padding-right: 3rem;
  }

  span {
    color: ${palette.lightBlue};
  }

  ul {
    font-family:  Tahoma, Geneva, Verdana, sans-serif;
    color: ${palette.black};
    list-style-type: none;
    padding: 0;
  }

  .about-p {
    padding-right: 25%;
  }

  .row {
    display: flex;
    padding-bottom: 2.5rem;
    padding-left: 12rem;
  }

  .interest {
    letter-spacing: 1px;
    padding: 0;
    padding-bottom: 2rem;
  }

  .interested {
    font-size: 1.2rem;
    margin: 0 auto;
    padding-top: 2rem;
  }

  .min-width {
    min-width: 8rem;
  }

  .mobile-portrait {
    display: none;
  }

  .portrait img {
    max-width: 12rem;
  }

  .position-one {
    padding-bottom: .5rem;
  }

  .top-row {
    padding-top: 3rem;
  }

  ${media.lessThan('medium')`
    .about, .education, .experience {
      flex-direction: column;
      /* padding-left: 6rem; */
      padding-left: 3rem;
    }

    h2 {
      font-size: 7vw;
      letter-spacing: normal;
      line-height: normal;
      padding-right: 0;
      padding-left: 0;
    }
    .row {
      /* padding-left: 3rem; */
    }
    .top-row {
      flex-direction: column-reverse;
    }
    .top-row {
      padding-left: 0;
      align-items: center;
    }
  `}

`;

export default AboutStyles;