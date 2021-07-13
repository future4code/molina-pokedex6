import styled from "styled-components";

//card home e pokedex

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