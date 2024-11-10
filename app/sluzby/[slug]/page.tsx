"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

const serviceDetails = {
  "instalaterske-prace": {
    title: "Instalatérské práce",
    description: "Opravíme kapající kohoutky, protékající splachovače, ucpané odpady a další instalatérské problémy. Nabízíme rychlé a profesionální řešení vašich vodovodních potíží.",
    icon: "🔧"
  },
  "topenarske-prace": {
    title: "Topenářské práce",
    description: "Specializujeme se na opravy a údržbu topných systémů. Řešíme problémy s radiátory, kotli a dalším topným zařízením.",
    icon: "🔥"
  },
  "stavebni-prace": {
    title: "Stavební práce",
    description: "Provádíme drobné i větší stavební úpravy, opravy zdí, podlah a další stavební práce dle vašich požadavků.",
    icon: "🏗️"
  },
  "elektroinstalace": {
    title: "Elektroinstalace",
    description: "Zajišťujeme kompletní elektrikářské služby včetně oprav zásuvek, výměny jističů a instalace nového osvětlení.",
    icon: "⚡"
  },
  "malovani": {
    title: "Malování",
    description: "Nabízíme profesionální malířské služby včetně přípravy povrchů, výběru barev a finální úpravy.",
    icon: "🎨"
  },
  "montaz-nabytku": {
    title: "Montáž nábytku",
    description: "Sestavíme váš nábytek rychle a profesionálně. Specializujeme se na montáž všech typů nábytku.",
    icon: "🪑"
  },
  "zahradni-prace": {
    title: "Zahradní práce",
    description: "Poskytujeme kompletní péči o vaši zahradu včetně sekání trávy, stříhání živých plotů a dalších zahradnických prací.",
    icon: "🌳"
  },
  "sadrokartony": {
    title: "Sádrokartony",
    description: "Realizujeme sádrokartonové konstrukce, příčky, podhledy a další práce se sádrokartonem.",
    icon: "🏢"
  },
  "stehovani": {
    title: "Stěhování",
    description: "Nabízíme kompletní stěhovací služby včetně balení, transportu a následné montáže nábytku.",
    icon: "📦"
  }
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    return <div>Služba nenalezena</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg mb-6">{service.description}</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Kontaktujte nás pro nezávaznou nabídku</h2>
            <p className="text-lg">
              Předběžnou cenovou nabídku s orientační cenou za práci a materiál vám dáme vědět dříve než k vám vyjedeme.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Phone className="mr-2 h-5 w-5" />
                777 508 247
              </Button>
              <Link href="/kontakt">
                <Button size="lg" variant="outline">
                  Více informací
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/">
            <Button variant="outline">Zpět na hlavní stránku</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}