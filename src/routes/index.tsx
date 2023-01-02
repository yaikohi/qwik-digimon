import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-4xl font-bold">/</h1>
      <div>
        <h2 class="text-2xl font-bold">hi</h2>
        <h3 class="text-xl">hi</h3>
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
