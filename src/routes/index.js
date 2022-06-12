import Header from "template/Header";
import Home from "page/Home";
import Character from "page/Character";
import Error404 from "page/Error404";
import getHash from "util/getHash";
import resolveRoutes from "util/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "contact",
};

const router = async () => {
  const header = null || document.getElementById("Header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;
