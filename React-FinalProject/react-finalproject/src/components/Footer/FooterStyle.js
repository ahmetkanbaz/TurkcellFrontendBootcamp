import styled from "styled-components";

export const FooterContainer = styled.footer`
  border-radius: 40px 40px 0px 0px;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  .footerBody {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    flex-shrink: 0;
    .footerForm {
      background: #003459;
      padding: 2rem;
      border-radius: 1rem;
      h4 {
        color: #fdfdfd;
        line-height: 2.25rem;
      }
      .formWrapper {
        border-radius: 14px;
        padding: 0.75rem;
        gap: 0.75rem;
      }
    }
    .footerMenu {
      padding: 0rem 0rem 2.5rem 0rem;
      border-bottom: 1px solid #ccd1d2;
      span {
        color: #00171f;
        font-weight: 500;
        line-height: 1.5rem;
      }
      .footerMenuItems {
        gap: 2.5rem;
      }
    }
    .footerBottom {
      gap: 2.5rem;
      span {
        color: #667479;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
      }
    }
  }
`;
