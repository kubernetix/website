import { Routes } from "../main";

const NavLink = (props: { href: Routes; active?: boolean }, children: any) => (
  <li>
    <a
      href={props?.href ?? ""}
      class={`hover:underline  hover:text-slate-800 ${
        props.active ? "text-slate-900" : "text-slate-600"
      }`}
      aria-current="page"
    >
      {children ?? "No text available"}
    </a>
  </li>
);

const nestedUlStyle = "pl-3 mt-3 space-y-2 border-l";

export const Navbar = (_: any, __: any) => (
  <nav class="h-full text-base lg:text-sm w-full border-r px-8 min-w-56">
    <ul role="list" class="py-4 space-y-8">
      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">
          Introduction
        </h3>

        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/">Home</NavLink>
        </ul>
      </li>

      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">Guides</h3>

        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/docs/quickstart-guide">...</NavLink>
        </ul>
      </li>

      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">
          Integrations
        </h3>

        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/docs/quickstart-guide">...</NavLink>
        </ul>
      </li>

      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">Examples</h3>
        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/docs/quickstart-guide">...</NavLink>
        </ul>
      </li>
    </ul>
  </nav>
);
