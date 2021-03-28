const nameMap = {
  "main.lea": "Lea",
  "main.emilie": "Emilie",
  "main.glasses": "C'tron",
  "antagonists.fancyguy": "Apollo",
  "antagonists.sidekick": "Joern",
  "main.shizuka": "Shizuka",
  "main.schneider": "Lukas",
  "main.luke": "Luke",
  "main.sergey": "Sergey",
  "main.sergey-av": "Sergey (Avatar)",
  "main.grumpy": "Beowulf",
  "main.buggy": "Buggy",
  "main.guild-leader": "Hlin"
};

export const getCharacterName = (id: string): string|null => (
  // @ts-ignore
  nameMap[id] ?? null
);

export const getIdFromName = (name: string): string|null => {
  const found = Object.keys(nameMap).find(key => (
    // @ts-ignore
    nameMap[key] === name
  ));

  return found ?? null;
};