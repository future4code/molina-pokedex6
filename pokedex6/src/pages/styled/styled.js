import styled from "styled-components";

//card home e pokedex

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
          cursor: pointer;
          background-color: #2EA4E8;
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
//page details

export const DetailsFlexBox = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 8%;
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

export const ButtonContainer = styled.div`
  margin: 10px;

  button {
    color: #ffff33;
    text-decoration: none;
    list-style: none;
    margin: 5px;
  }
`