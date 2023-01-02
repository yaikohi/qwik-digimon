import { component$, Resource } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { Digimon } from "~/types/digimon";

// interface DigimonPage {
//   id: number;
//   name: string;
//   href: string;
// }

export const onGet: RequestHandler<Digimon> = async ({ params }) => {
  const digimonId = params.id;
  const url = `https://digimon-api.com/api/v1/digimon/${digimonId}`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export default component$(() => {
  const digimonData = useEndpoint<Digimon>();
  return (
    <>
      <Resource
        value={digimonData}
        onPending={() => (
          <div class="text-yellow-400 bg-violet-800 font-diatype-bold text-4xl">
            loading...
          </div>
        )}
        onRejected={() => (
          <div class="text-red-800 bg-slate-200 font-diatype-bold text-4xl">
            error lol
          </div>
        )}
        onResolved={(digimon) => {
          return (
            <div class="text-slate-800 font-diatype">
              <h2 class="p-8 rounded-xl font-diatype-bold text-2xl">
                {digimon.name}
              </h2>
              <img
                class="max-h-[250px] max-w-[250px]"
                src={digimon.images[0].href}
                alt={`${digimon.name}`}
              />
              <details>
                <summary>Description</summary>
                <p class="indent-4 text-sm max-w-md">
                  {digimon.descriptions[0].description}
                </p>
              </details>
            </div>
          );
        }}
      />
    </>
  );
});
