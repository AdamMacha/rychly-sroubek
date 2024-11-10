export interface ServiceDetails {
  title: string;
  description: string;
  icon: string;
}

export const serviceDetails: Record<string, ServiceDetails> = {
  "instalaterske-prace": {
    title: "Instalatérské práce",
    description: "Opravíme kapající kohoutky, protékající splachovače, ucpané odpady a další instalatérské problémy. Nabízíme rychlé a profesionální řešení vašich vodovodních potíží.",
    icon: "🔧"
  },
  "topenarske-prace": {
    title: "Topenářské práce",
    description: "Instalace, opravy a údržba topných systémů. Řešíme problémy s radiátory, kotli a dalším topným zařízením.",
    icon: "🔥"
  },
  "stavebni-prace": {
    title: "Stavební práce",
    description: "Menší stavební úpravy, opravy zdí, pokládka dlažby a obkladů. Pomůžeme vám s drobnými i většími stavebními pracemi.",
    icon: "🏗️"
  },
  "elektroinstalace": {
    title: "Elektroinstalace",
    description: "Opravy a instalace elektrických rozvodů, výměna zásuvek, instalace osvětlení a řešení dalších elektrických problémů.",
    icon: "⚡"
  },
  "malovani": {
    title: "Malování",
    description: "Profesionální malířské práce včetně přípravy povrchů, výběru barev a konečné úpravy.",
    icon: "🎨"
  },
  "montaz-nabytku": {
    title: "Montáž nábytku",
    description: "Sestavení a montáž všech typů nábytku, včetně kuchyňských linek a vestavěných skříní.",
    icon: "🪑"
  },
  "zahradni-prace": {
    title: "Zahradní práce",
    description: "Údržba zahrady, sekání trávy, prořezávání stromů a keřů, a další zahradnické služby.",
    icon: "🌳"
  },
  "sadrokartony": {
    title: "Sádrokartony",
    description: "Montáž sádrokartonových konstrukcí, příček, podhledů a další práce se sádrokartonem.",
    icon: "🏢"
  },
  "stehovani": {
    title: "Stěhování",
    description: "Profesionální stěhovací služby včetně balení, transportu a následné montáže nábytku.",
    icon: "📦"
  }
};

// Export services array for use in components
export const services = Object.entries(serviceDetails).map(([slug, details]) => ({
  title: details.title,
  icon: details.icon,
  slug
})); 