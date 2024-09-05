import "./style.css";
import { Docs } from "./pages/docs.tsx";
import { DefaultLayout } from "./layouts/default.tsx";

const NotFound = () => (
  <section class="h-screen w-screen bg-red-200 text-2xl text-black">
    404
  </section>
);

const routes = {
  "#/": (_: any) => (
    <DefaultLayout>
      <Docs />
    </DefaultLayout>
  ),
  "": (_: any) => (
    <DefaultLayout>
      <Docs />
    </DefaultLayout>
  ),
  "#/docs/quickstart-guide": (_: any) => (
    <DefaultLayout>
    </DefaultLayout>
  ),
  "#/docs/integrations/shiki": (_: any) => (
    <DefaultLayout>
    </DefaultLayout>
  ),
};

export type Routes = keyof typeof routes;

let lastHash: string = "initial";

const root = document.getElementById("app");

// Depenceny injection
const context: any = {};

const render = async () => {
  if (lastHash === location.hash) return;

  lastHash = location.hash;
  const func = routes[location.hash as Routes] ?? <NotFound />;

  if (root?.firstChild) {
    root?.firstChild?.replaceWith(func({ ...context }));
  } else {
    root?.appendChild(func({ ...context }));
  }
};

// @ts-ignore
window.onpopstate = () => document.startViewTransition ? document.startViewTransition(render) : render

render();
