import { component$ } from "@builder.io/qwik";

/**
 * Nav /header component
 */
export default component$(() => {
  return (
    <header>
      <ul class="flex flex-row-reverse">
        <li class="m-2">
          <a
            class="font-bold hover:bg-slate-500 px-4 py-2 bg-slate-900 text-white rounded-xl"
            href="/"
          >
            /
          </a>
        </li>
        <li class="m-2">
          <a
            class="font-bold hover:bg-slate-500 px-4 py-2 bg-slate-900 text-white rounded-xl"
            href="/blog"
          >
            /blog
          </a>
        </li>
        <li class="m-2">
          <a
            class="font-bold hover:bg-slate-500 px-4 py-2 bg-slate-900 text-white rounded-xl"
            href="/about"
          >
            /about
          </a>
        </li>
        
      </ul>
    </header>
  );
});
