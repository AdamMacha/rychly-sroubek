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
  // ... rest of your services
};

export const services = Object.entries(serviceDetails).map(([slug, details]) => ({
  title: details.title,
  icon: details.icon,
  slug
})); 