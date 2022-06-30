import logo from "asset/Rick_and_Morty_Logo_and_Image.png";

const Header = () => {
  const view = `
		<nav class="header__nav">
			<a href="#/about/">
				About
			</a>
		</nav>
		<figure class="header__logo">
			<a href="/">
				<img src=${logo} width="240" height="72" alt="logo"/>
			</a>
		</figure>
	`;

  return view;
};

export default Header;
