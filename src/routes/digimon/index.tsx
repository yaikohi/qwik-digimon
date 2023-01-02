import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="">
        <h1>Digimon!</h1>
        <h2>there are 1420 digimon in this api </h2>
        <nav class="flex flex-wrap">
          {new Array(1420).fill(0).map((_, idx: number) => (
            <a
              class="hover:text-slate-600 text-slate-800"
              href={`/digimon/${idx + 1}`}
            >
              {idx + 1}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
});
