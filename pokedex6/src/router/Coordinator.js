export const goToHomePage = (history) => {
    history.push("/");
};
  
export const goToDetailsPage = (history, pokemon) => {
    history.push(`/detalhes/${pokemon}`);
};
  
export const goToPokedexPage = (history) => {
    history.push("/pokedex");
};

export const goBack = (history) => {
    history.goBack();
};
