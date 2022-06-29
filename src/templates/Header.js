import logo from "asset/logo.svg";

const Header = () => {
  const view = `
		<figure class="header__logo">
			<a href="/">
				<img src=${logo} width="240" height="72" alt="logo"/>
			</a>
		</figure>
		<nav class="header__nav">
			<a href="#/about/">
				About
			</a>
		</nav>
	`;

  return view;
};

export default Header;
