import styled from 'styled-components';

const HomeStyles = styled.div`
  .left {
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

  @media (max-width: 850px) {
    .left, .right {
      padding: 0 5% 0 5%;
    }
  }

  @media (max-width: 1085px) {
    .left, .right {
      width: 22rem;
    }
    .right p{
      font-size: 18px;
    }
  }
`;
export default HomeStyles;

