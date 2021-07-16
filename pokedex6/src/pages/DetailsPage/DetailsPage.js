import React from 'react';
import {goBack} from '../../router/Coordinator'
import { useHistory, useParams } from "react-router-dom";
import DetailsCard from '../../components/DetailsCard/DetailsCard';

import { Header, ButtonContainer } from '../styled/styled';
import PokeLogo from '../../assets/pokeball-logo.png';


export default function DetailsPage() {

    const history = useHistory();
    const pathParams = useParams();
  
    return(
        <div>
            <Header>
                <ButtonContainer>
                    <button
                        onClick={()=>goBack(history)}
                    >
                        Voltar
                    </button>
                </ButtonContainer>
                <h1>Detalhes do pokemon</h1>
                <img src={PokeLogo} />
            </Header>
            <div>
                <DetailsCard pokemon={pathParams}/>
            </div>
        </div>
      )
}