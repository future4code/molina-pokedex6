import styled from "styled-components";

export const Header = styled.div`
  color: #ffff33;
  background-color: #ff6666;
  height: 80px;
  width: 95vw;
  position: fixed;
  padding: 20px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  box-shadow: 3px 3px 3px 3px #d9d9d9;

  button {
      color: #ffff33;
      background-color: blue;
      padding: 10px;
      border-radius: 16px;

      :hover {
          cursor: pointer;
          background-color: white;
          color: black;
        }
    }
`

export const HomeFlexBox = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 100px;
`;