"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServiceDetails } from "@/app/data/services";

interface ServiceContentProps {
  service: ServiceDetails;
}

export function ServiceContent({ service }: ServiceContentProps) {
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
            <div className="flex flex-col justify-center items-center space-y-4">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
                asChild
              >
                <a href="tel:777508247">
                  <Phone className="mr-2 h-5 w-5" />
                  777 508 247
                </a>
              </Button>
              <Link href="/kontakt" className="w-full max-w-sm">
                <Button size="lg" variant="outline" className="w-full h-full py-2">
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