"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  icon: string;
  index: number;
  href: string;
}

export function ServiceCard({ title, icon, index, href }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={href}>
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-3xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <Button variant="link" className="p-0">
            Více informací <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </Link>
    </motion.div>
  );
}