import getHash from "util/getHash";
import getData from "util/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);

  const view = `
		<div class="character-inner">
			<h2 class="main__title">${character.name}</h2>
			<article class="character-card">
				<img src="${character.image}" alt="${character.name}">
			</article>
			<article class="character-card">
				<ul>
					<li>
						<h3>Episodes:
							<span> ${character.episode.length}</span>
						</h3>
					</li>
					<li>
						<h3>Status:
								<span> ${character.status}</span>
						</h3>
					</li>
					<li>
						<h3>Species:
								<span> ${character.species}</span>
						</h3>
					</li>
					<li>
						<h3>Gender:
								<span> ${character.gender}</span>
						</h3>
					</li>
					<li>
						<h3>Origin:
								<span> ${character.origin.name}</span>
						</h3>
					</li>
					<li>
						<h3>Last Location:
								<span> ${character.location.name}</span>
						</h3>
					</li>
				</ul>
			</article>
		</div>
	`;

  return view;
};

export default Character;
