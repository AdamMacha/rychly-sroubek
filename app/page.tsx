"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Drill, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "./components/ServiceCard";
import { FeatureCard } from "./components/FeatureCard";
import Link from "next/link";

const services = [
  { title: "Instalatérské práce", icon: "🔧", slug: "instalaterske-prace" },
  { title: "Topenářské práce", icon: "🔥", slug: "topenarske-prace" },
  { title: "Stavební práce", icon: "🏗️", slug: "stavebni-prace" },
  { title: "Elektroinstalace", icon: "⚡", slug: "elektroinstalace" },
  { title: "Malování", icon: "🎨", slug: "malovani" },
  { title: "Montáž nábytku", icon: "🪑", slug: "montaz-nabytku" },
  { title: "Zahradní práce", icon: "🌳", slug: "zahradni-prace" },
  { title: "Sádrokartony", icon: "🏢", slug: "sadrokartony" },
  { title: "Stěhování", icon: "📦", slug: "stehovani" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Rychlý šroubek
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Profesionální služby hodinového manžela v Praze a okolí
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-x-4"
          >
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Phone className="mr-2 h-5 w-5" />
              777 508 247
            </Button>
            <Link href="/kontakt">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white">
                Kontaktujte nás
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              Icon={Clock}
              title="NON-STOP Služby"
              description="Dostupní 24/7 pro vaše urgentní potřeby"
              delay={0}
            />
            <FeatureCard
              Icon={Drill}
              title="Profesionální Tým"
              description="Zkušení odborníci pro každý typ práce"
              delay={0.2}
            />
            <FeatureCard
              Icon={CheckCircle}
              title="Garantovaná Kvalita"
              description="Spokojenost zákazníků je naší prioritou"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Naše Služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                icon={service.icon}
                index={index}
                href={`/sluzby/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Kontaktujte nás</h2>
          <p className="text-xl mb-8">
            Předběžnou cenovou nabídku s orientační cenou za práci a materiál vám dáme vědět dříve než k vám vyjedeme.
          </p>
          <div className="space-y-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-xl">
              <Phone className="mr-2 h-6 w-6" />
              777 508 247
            </Button>
            <p className="text-lg font-semibold">Volejte NON-STOP!</p>
          </div>
        </div>
      </section>
    </main>
  );
}