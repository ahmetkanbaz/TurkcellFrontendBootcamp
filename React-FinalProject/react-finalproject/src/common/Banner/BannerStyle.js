import styled from "styled-components";

export const BannerContainer = styled.div`
  h1 {
    color: ${(props) => props.color};
    font-size: ${(props) => (props.sizetitle)};
    line-height: 68px;
  }

  h3 {
    color: ${(props) => props.color};
    font-size: ${(props) => (props.size)};
    font-weight: 700;
    line-height: 60px;
  }

  p {
    max-width: 30rem;
    color: #242b33;
    font-weight: 500;
    line-height: 24px;
  }
`;
