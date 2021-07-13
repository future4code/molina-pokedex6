import styled from "styled-components";

export const PokeCardContainer = styled.div`
  background-color: fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 500px;
  width: 260px;
  margin: 40px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  div {
    border-radius: 5px;
    margin-left: 25px;
    height: 150px;
    box-shadow: 3px 3px 3px 3px #d9d9d9;
    width: 200px;
    background-color: #f2f3f5;
    
  }

  img {
    background-color: #d9d9d9;
    border-radius: 100%;
    height: 150px;
    width: 150px;
  }

    P {
    margin-top: 25px;
    padding: 2px;
    background-color: #f2f3f5;
    box-shadow: rgba(240, 46, 170, 0.4) 0px 5px,
      rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px,
      rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  }
`

export const DetailsBtnContainer = styled.div`
    margin: 5px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;

    button {
        height: 50px;
        width: 100px;
        margin: 7px;
    }
`
