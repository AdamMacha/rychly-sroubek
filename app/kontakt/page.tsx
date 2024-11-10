"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Kontaktujte nás</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Kontaktní informace</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-yellow-500" />
                  <p className="text-lg">777 508 247</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-yellow-500" />
                  <p className="text-lg">rychlysroubek@seznam.cz</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-yellow-500" />
                  <p className="text-lg">Praha a okolí</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Provozní doba</h2>
              <p className="text-lg mb-2">Poskytujeme NON-STOP služby</p>
              <p className="text-lg">Po telefonické domluvě možnost výjezdu i v noci!</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Zavolejte nám</h2>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Phone className="mr-2 h-5 w-5" />
                777 508 247
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">O nás</h2>
            <p className="text-lg mb-4">
              Jsme parta profíků a dokážeme vám pomoci s vašimi starostmi. Opravíme vám kapající kohoutek, 
              protékající splachovač, ucpané WC, vyměníme žárovky či jističe, opravíme trhliny ve zdech a mnoho dalšího.
            </p>
            <p className="text-lg">
              Předběžnou cenovou nabídku s orientační cenou za práci a materiál vám dáme vědět dříve než k vám vyjedeme.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}