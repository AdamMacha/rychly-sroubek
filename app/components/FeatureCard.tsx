"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center p-6"
    >
      <Icon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}