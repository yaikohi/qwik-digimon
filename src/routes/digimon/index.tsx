import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="text-slate-800 flex flex-col">
        <h1 class="my-2 text-4xl font-diatype-bold">digimon</h1>
        <h2 class="italic mb-8 indent-2 font-diatype-light">
          there are 1420 digimon in this api{" "}
        </h2>
        <nav class="flex flex-wrap gap-2">
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
