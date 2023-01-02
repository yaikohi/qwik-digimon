import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-4xl font-bold">Hi</h1>
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
