import icon from "asset/logo2.png";

const Header = () => {
  const view = `
		<nav class="header__nav">
			<a href="#" class="header__logo">
				<img src=${icon} width="48" height="48" alt="Icono favicon" />
			</a>
			<a href="#/about/">
				About
			</a>
		</nav>
	`;

  return view;
};

export default Header;
