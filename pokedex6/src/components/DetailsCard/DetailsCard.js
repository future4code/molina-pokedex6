import React, { useEffect, useState } from 'react';
import axios from "axios";
import { baseURL } from "../../constants/urls";

import {
    PokeStatsContainer,
    PokeMovesContainer,
    PokeTypeContainer,
    PokeImgContainer,
    DetailsFlexBox,
    ImgFlexBox,
    StatsFlexBox,
    TypeMovesFlexBox
} from "../Styled/styled";

export default function DetailsCard(props)  {

    const [data, setData] = useState({});
    const [moves, setMoves] = useState([]);

    const getPokeDetails = () => {
      axios
        .get(`${baseURL}/${props.pokemon.pokemon}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          alert("", error.data);
        });
    };
  
    useEffect(() => {
      getPokeDetails();
    }, []);
  
    const renderMoves = () => {
      const newMoves = [];
      if (data.moves) {
        for (let i = 0; i < 7 && i < data.moves.length; i++) {
          newMoves.push(data.moves[i].move.name);
        }
        setMoves(newMoves);
      }
    };
  
    useEffect(() => {
      renderMoves();
    }, [data]);
  
    return (
        <div>
            <DetailsFlexBox>
                <ImgFlexBox>
                    <PokeImgContainer>
                        {/*Img pokemon Frontal*/}
                        {data.sprites && (
                            <img
                                src={data.sprites.front_default}
                                height="300px"
                                alt=""
                            />
                        )}
                    </PokeImgContainer>
                    <PokeImgContainer>
                        {/*Img pokemon de Costas */}
                        {data.sprites && (
                            <img
                                src={data.sprites.back_default}
                                height="300px"
                                alt=""
                            />
                        )}
                    </PokeImgContainer>
                </ImgFlexBox>
                <TypeMovesFlexBox>
                    <PokeTypeContainer>
                        <h3>Tipo: </h3>
                        {data.types &&
                            data.types.map((type) => {
                                return <p>{type.type.name}</p>;
                            })
                        }
                    </PokeTypeContainer>
                    <PokeMovesContainer>
                        <h3>Movimentos:</h3>
                        {moves &&
                            moves.map((moves) => {
                                return <p>{moves}</p>;
                            })
                        }
                    </PokeMovesContainer>
                </TypeMovesFlexBox>
                <StatsFlexBox>
                    <PokeStatsContainer>
                        <h3 >Estatísticas</h3>
                        <div>
                            {data.stats &&
                                data.stats.map((stat) => {
                                    return(
                                        <p key={stat.stat.name}>
                                            <strong>{stat.stat.name}:</strong>
                                            {stat.base_stat}
                                        </p>
                                    );
                                })
                            }
                        </div>
                    </PokeStatsContainer>
                </StatsFlexBox>
            </DetailsFlexBox>
        </div>
    );
};
  
