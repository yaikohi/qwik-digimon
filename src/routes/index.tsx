import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-4xl font-bold">/</h1>
      <div>
        <h2 class="text-2xl font-bold">this is; &rarr; home page</h2>
        <h3 class="text-xl flex">
          <a
            class="bg-gradient-to-tr from-slate-900 to-yellow-900 text-blue-200 p-4 rounded-xl"
            href="/digimon"
          >
            digimon
          </a>
          <p class="p-4 rounded-xl">only</p>
        </h3>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "We're skiing",
  meta: [
    {
      name: "description",
      content: "alpine times",
    },
  ],
};
