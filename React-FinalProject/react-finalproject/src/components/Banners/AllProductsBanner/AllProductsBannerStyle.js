import styled from "styled-components";

export const AllProductsBannerContainer = styled.div`
  border-radius: 20px;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  overflow: hidden;
  /* z-index: 10; */

  .layout1 {
    width: 816.401px;
    height: 799.52px;
    transform: rotate(-25.219deg);
    border-radius: 99px;
    background: #002a48;
    top: -100px;
    right: -180px;
    z-index: -1;
    @media screen and (max-width: 768px) {
      transform: rotate(-175.16deg);
      top: 330px;
      right: -210px;
    }
  }

  .layout2 {
    width: 12.437px;
    height: 12.437px;
    transform: rotate(-30.589deg);
    border-radius: 4px;
    background: #002a48;
    top: 100px;
    left: 275px;
  }

  .infos {
    color: #FDFDFD;
  }
`;
