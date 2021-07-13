import React from "react";
import { goToDetailsPage } from "../../router/Coordinator";

import { DetailsBtnContainer, PokeCardContainer } from "../Styled/styled"

export default function PokeCard(props) {

    return (
        <PokeCardContainer>
        <img src={"https://www.amscan-europe.com/graphics_cache/2/e/20562-9904820-1-3-1500+.jpg"} 
            alt={""} 
        />
        <p>{"Pokemon"}</p>
        <DetailsBtnContainer>
          <button>
            {"Remover"} {"Adicionar"}
          </button>

          <button
            onClick={() => goToDetailsPage()}
          >
            Ver detalhes
          </button>
        </DetailsBtnContainer>
      </PokeCardContainer>
    )

}
