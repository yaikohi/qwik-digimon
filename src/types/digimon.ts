const digimon = {
  id: 6,
  name: "Footmon",
  xAntibody: false,
  images: [
    {
      href: "https://digimon-api.com/images/digimon/w/Footmon.png",
      transparent: false,
    },
  ],
  levels: [{ id: 2, level: "Perfect" }],
  types: [{ id: 1, type: "Cyborg" }],
  attributes: [{ id: 3, attribute: "Vaccine" }],
  fields: [],
  releaseDate: "2011",
  descriptions: [
    {
      origin: "reference_book",
      language: "en_us",
      description:
        "One of the most sportsmanly Digimon in the Digital World. It loves sports, and likes soccer most of all, so it is always practising dribbling and shooting with balls of light. Its dream is to create a soccer league to compete with fellow Digimon. Its Special Moves are placing a ball of light on the ground and shooting it at the enemy (Lightning Shoot), and lifting the ball high up in the air and shooting it (Lightning Overhead). A winning entry in the Digimon Xros Wars Original Digimon Contest. ",
    },
    {
      origin: "reference_book",
      language: "jap",
      description:
        "デジタルワールド屈指のスポーツマンなデジモン。スポーツを愛し、中でもサッカーを好み、いつも光のボールでドリブルやシュートの練習している。夢はデジモン同士で戦うサッカーリーグを作ること。必殺技は、光のボールを地面に置き敵めがけてシュートする『ライトニングシュート』と、空高くボールを上げてシュートする『ライトニングオーバーヘッド』        ※デジモンクロスウォーズ　オリジナルデジモンコンテスト受賞作品。 ",
    },
  ],
  skills: [
    {
      id: 29,
      skill: "Lightning Overhead",
      translation: "",
      description: "Lifts the ball high up in the air and shoots it. ",
    },
    {
      id: 30,
      skill: "Lightning Shoot",
      translation: "",
      description:
        "Places a ball of light on the ground and shoots it at the enemy. ",
    },
  ],
  priorEvolutions: [],
  nextEvolutions: [],
};

export type Digimon = typeof digimon;
