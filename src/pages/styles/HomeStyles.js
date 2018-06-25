import styled from 'styled-components';
import media from 'styled-media-query';

const HomeStyles = styled.div`
  .home-copy {
    margin: 0 auto;
    width: 345px;
  }

  .home-copy button {
    display: flex;
    margin: 0 auto;
    margin-top: 1rem;
  }

  .home-copy h1 {
    padding-bottom: 1rem;
  }

  .home-copy h2 {
    padding-bottom: 1rem;
  }

  .home-copy p {
    padding-bottom: 1rem;
  }

  .right-column {
    display: none;
  }

  ${media.greaterThan('medium')`
    .about-copy {
      display: none;
    }

    .home-copy {
      float: left;
      padding-top: 4rem;
      padding-left: 2rem;
      padding-right: 1.5rem;
      width: 50%;
    }

    .right-column {
      float: right;
      display: block;
      padding-top: 4rem;
      padding-right: 2rem;
      padding-left: 1.5rem;
      width: 50%;
      height: auto;
    }

    .right-column p {
      font-size: 22px;
      line-height: 38px;
      padding-top: 1rem;
    }

  `}

    ${media.greaterThan('large')`
      .home-copy {
        padding-left: 20%;
      }
      .right-column {
        padding-right: 20%;
      }

  `}
`;
export default HomeStyles;

