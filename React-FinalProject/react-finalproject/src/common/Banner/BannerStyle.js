import styled from "styled-components";

export const BannerContainer = styled.div`
  h1 {
    color: ${(props) => props.color};
    font-size: ${(props) => props.sizetitle};
    line-height: 4.25rem;
    font-weight: 800;
  }

  h3 {
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: 700;
    line-height: 3.75rem;
  }

  p {
    max-width: 30rem;
    color: #242b33;
    font-weight: 500;
    line-height: 24px;
  }
  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 2.875rem;
      line-height: 3.75rem;
    }
    h3 {
      font-size: 1.75rem;
      line-height: 2.375rem;
    }
    p {
      max-width: 100%;
      font-size: .75rem;
      line-height: 1.125rem;
    }
  }
`;
