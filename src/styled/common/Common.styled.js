import { styled, css } from "styled-components";


export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;
export const Wrapper = styled.div`
  /* max-width: 100%; */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  background-color: #EAEEF6;
`;



export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    color: #33399b;
  }
`;
export const hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;
