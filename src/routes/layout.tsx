import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a class="italic" href="https://ykhi.monster/" target="_blank">
          {/* Made with ♡ by Erik! */} footer
        </a>
      </footer>
    </>
  );
});
