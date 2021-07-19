import styled from "styled-components";

//Home e Pokedex Pages
export const ContainerHomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
export const ButtonPaginacao = styled.section`
  h4 {
    display: flex;
    margin: 5px;
    align-items: center;
  }

    button {
      color: black;
      background-color: #D10408;
      padding: 10px;
      border-radius: 16px;

      :hover {
        color: red;
        cursor: pointer;
        background-color: #8A5428;
      }
    }
`
export const Header = styled.div`
  color: #D10408;
  background-color: #615E5E;
  height: 80px;
  width: 95vw;
  position: fixed;
  padding: 20px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  box-shadow: 3px 3px 3px 3px #D10408;

  img {
    width: 100px;
    border-radius: 20px;
  }

  button {
      color: black;
      background-color: #D10408;
      padding: 10px;
      border-radius: 16px;

      :hover {
        color: red;
        cursor: pointer;
        background-color: #8A5428;
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

//page Details Page

export const ButtonContainer = styled.div`
  margin: 10px;

  button {
    color: black;
    text-decoration: none;
    list-style: none;
    margin: 5px;
    padding: 12px;
  }
`