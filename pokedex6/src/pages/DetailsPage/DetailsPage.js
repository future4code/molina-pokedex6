import React from 'react'
import {useHistory} from "react-router-dom";
import {goToHomePage} from '../../router/Coordinator'

import {
    Header,
    PokeStatsContainer,
    PokeMovesContainer,
    PokeTypeContainer,
    PokeImgContainer,
    DetailsFlexBox,
    ImgFlexBox,
    StatsFlexBox,
    TypeMovesFlexBox
  } from "../styled/styled";

export default function DetailsPage() {
    const history = useHistory();

    return(
        <div>
            <Header>
            <p>Detalhes do Pokemon</p>
            <button onClick={()=>goToHomePage(history)}> 
                Lista de Pokemons
            </button>
            </Header>
            <DetailsFlexBox role="main">
                <ImgFlexBox role="div">
                    <PokeImgContainer role="div">
                        {/*Get front img pokemon */}

                        <img
                            role="img"
                            src={"https://www.amscan-europe.com/graphics_cache/2/e/20562-9904820-1-3-1500+.jpg"}
                            height="300px"
                            alt=""
                        />
                    </PokeImgContainer>
                    <PokeImgContainer role="div">
                        {/*Get back img pokemon */}
                        <img
                            role="img"
                            src={"https://www.partymanbodo.no/users/partyman_mystore_no/images/66172_Pokemon_Go_spiselig_kakebilde_20_cm_1.jpg"}
                            height="300px"
                            alt=""
                        />
                    </PokeImgContainer>
                </ImgFlexBox>
                <TypeMovesFlexBox role="div">
                    <PokeTypeContainer role="div">
                        <h3>Tipo: </h3>
                         <p>nome</p>
                    </PokeTypeContainer>
                    <PokeMovesContainer roles="div">
                        <h3>Movimentos:</h3>
                        <p>movimentos</p>;
                    </PokeMovesContainer>
                </TypeMovesFlexBox>
                <StatsFlexBox role="div">
                    <PokeStatsContainer roles="div">
                        <h3>Estatísticas</h3>
                        <p>
                            <strong>nome:</strong>
                        </p>
                    </PokeStatsContainer>
                </StatsFlexBox>
            </DetailsFlexBox>
        </div>
    )
}