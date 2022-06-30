import getData from "util/getData";
import logo from "asset/logo.svg";

const Home = async () => {
  const characters = await getData();

  const view = `
		<img class="main__logo" src=${logo} width="100" height="32" alt="Logo"/>
		<h2 class="main__title">Characters</h2>
		<div class="characters">
			${characters.results
        .map(
          (character) => `
				<article class="character-item">
					<a href="#/${character.id}/">
						<img loading="lazy" src="${character.image}" width="200" height="200" alt="${character.name}">
						<h2>${character.name}</h2>
					</a>
				</article>
			`
        )
        .join(``)}
		</div>
	`;

  return view;
};

export default Home;
