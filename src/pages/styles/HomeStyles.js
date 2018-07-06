import styled from 'styled-components';

const HomeStyles = styled.div`
  .left {
    padding-left: 5%;
    width: 30rem;
  }

  .left h1 {
    font-size: 60px;
    padding-bottom: 2rem;
  }

  .left h2 {
    font-size: 20px;
    padding-bottom: 2rem;
  }
  .right {
    padding-right: 5%;
    width: 28rem;
  }

  .right p {
    font-size: 25px;
    line-height: 35px;
    text-align: left;
  }

  .right p:first-child {
    padding-bottom: 1.5rem;
  }

  @media (max-width: 1085px) {
    .left, .right {
      width: 25rem;
    }
    .right p{
      font-size: 18px;
    }
  }
`;
export default HomeStyles;

