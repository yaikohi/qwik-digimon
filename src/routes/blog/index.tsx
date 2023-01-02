import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1 class="text-4xl font-bold">/blog </h1>
      <div class="flex flex-col my-4 p-8 bg-slate-900 text-white rounded-xl">
        <a
          class="px-3 py-2 rounded-xl bg-slate-600 hover:bg-slate-500 my-1"
          href="/blog/posts"
        >
          &rarr; posts
        </a>

      </div>
    </>
  );
});
