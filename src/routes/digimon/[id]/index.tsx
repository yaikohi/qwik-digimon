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
    <div class="mx-auto max-w-md">
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
          const jpDescription =
            digimon.descriptions.length &&
            digimon.descriptions.filter((desc) => desc.language === "jap")[0];
          const enDescription =
            digimon.descriptions.length &&
            digimon.descriptions.filter((desc) => desc.language === "en_us")[0];
          return (
            <div class="p-8  text-slate-800 font-diatype">
              <div class="mb-16">
                <h2 class="mb-8 rounded-xl font-diatype-bold text-2xl">
                  {digimon.name}
                </h2>
                <p class="font-diatype-medium">
                  <span class="font-diatype-light">level:</span>{" "}
                  {digimon.levels[0].level}
                </p>
              </div>
              <div>
                <img
                  class="max-h-[250px] max-w-[250px] mb-16 mx-auto"
                  src={digimon.images[0].href}
                  alt={`${digimon.name}`}
                />
                <div class="my-2 bg-slate-200 p-2 rounded-md  shadow-xl shadow-slate-300 ">
                  <details class="mx-2 my-8">
                    <summary>description (jp_JP)</summary>
                    <p class="indent-4 text-sm max-w-md">
                      {digimon.descriptions.length && jpDescription.description}
                    </p>
                  </details>
                  <details class="mx-2 my-8">
                    <summary>description (en_US)</summary>
                    <p class="indent-4 text-sm max-w-md">
                      {digimon.descriptions.length && enDescription.description}
                    </p>
                  </details>
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
});
