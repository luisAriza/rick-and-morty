const About = () => {
  const view = `
		<div class="about">
			<h2 class="about__title">About</h2>
			<h3 class="about__subtitle">What is this?</h3>
			<p class="about__description">
			This is a Single Page Application (SPA) based on the television show Rick and Morty. You have access to about characters, images, locations and episodes.
			<br/>
			<br/>
			I use the <a href="https://rickandmortyapi.com/" target="_blank">Rick and Morty API</a> to do it, The <strong>Rick and Morty API</strong> is a REST and GraphQL API, is filled with canonical information as seen on the TV show.
			</p>
			<h3 class="about__subtitle">Who I am?</h3>
			<p class="about__description">I'm <strong>Frontend Developer</strong> and my name is <a href="https://github.com/luisAriza" target="_blank">Luis Ariza</a>, a guy who likes to program websites and is passionate about learning every day about web development.</p>
		</div>
	`;

  return view;
};

export default About;
