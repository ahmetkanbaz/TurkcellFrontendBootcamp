import styled from "styled-components";

export const SingleCard = styled.div`
  span,
  .category {
    color: #667479;
    font-size: 0.75rem;
  }
`;

export const ProductTitle = styled.p`
  color: #00171f;
  font-weight: 700;
  line-height: 1.5rem;
  font-size: 1rem;
`;

export const ProductPrice = styled(ProductTitle)`
  font-size: 0.875rem;
`;
