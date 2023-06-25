import styled from "styled-components";

export const Nav = styled.nav`
  img {
    width: 7.1875rem;
    height: 2.5rem;
  }
  .nav-item {
    font-weight: bold;
    line-height: 1.5rem;
    color: #003459;
  }
  input {
    width: 20.625rem;
  }

  @media screen and (max-width: 768px) {
    #navbarSupportedContent {
      background: linear-gradient(
        134deg,
        #fceed5 6.17%,
        #fceed5 75.14%,
        #ffe7ba 100%
      );
    }
  }
`;
