import styled from "styled-components";

//Page Pokecard

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
    box-shadow: 3px 3px 3px 3px #D10408;
    width: 200px;
    background-color: #f2f3f5;
    
  }

  img {
    background-color: #7D7772;
    border-radius: 100%;
    height: 150px;
    width: 150px;
    box-shadow: rgb(209, 4, 8, 0.8) 0px 5px;
  }

  P {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    padding: 2px;
    background-color: #f2f3f5;
    border-radius: 10px;
    box-shadow: rgb(209, 4, 8, 0.4) 0px 5px,
    rgb(209, 4, 8, 0.3) 0px 10px, rgb(209, 4, 8, 0.2) 0px 15px,
    rgb(209, 4, 8, 0.1) 0px 20px, rgb(209, 4, 8, 0.05) 0px 25px;
  
    img{
      margin: 4px;
      height: 30px;
      width: 30px;
      border-radius: 100%;
      box-shadow: rgb(209, 4, 8, 0.8) 0px 2px;
    }
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
    border-radius: 15px;

    :hover {
      cursor: pointer;
      background-color: red;
    }
  }
`

// Page Details Card

export const DetailsFlexBox = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 12%;
`;

export const ImgFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center;
`;

export const PokeImgContainer = styled.div`
  background-color: #f2f2f2f2;
  border-radius: 20px;
  height: 250px;
  width: 250px;
  margin: 20px;
  box-shadow: 3px 3px 3px 3px #d9d9d9;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const TypeMovesFlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokeTypeContainer = styled.div`
  background-color: #f2f2f2f2;
  border-radius: 20px;
  height: 60px;
  width: 350px;
  margin: 20px;
  box-shadow: 3px 3px 3px 3px #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const PokeMovesContainer = styled.div`
  background-color: #f2f2f2f2;
  border-radius: 20px;
  height: 439px;
  width: 350px;
  margin: 20px;
  box-shadow: 3px 3px 3px 3px #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const StatsFlexBox = styled.div`
  display: flex;
  justify-content: column;
  text-align: Center;
`;

export const PokeStatsContainer = styled.div`
  background-color: #f2f2f2f2;
  border-radius: 20px;
  height: 543px;
  width: 350px;
  margin: 20px;
  box-shadow: 3px 3px 3px 3px #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
