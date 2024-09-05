import { Navbar } from "../components/navbar";

export const DefaultLayout = (_: any, children: any) => (
  <main class="w-full h-full flex">
    <style></style>

    <div class="h-full hidden lg:block overflow-y-auto">
      <Navbar></Navbar>
    </div>

    <div class="h-full overflow-y-auto w-full px-4 py-4 lg:px-12 md:py-10">{children}</div>
  </main>
);
