import { serviceDetails } from "@/app/data/services";
import { ServiceContent } from "@/app/components/ServiceContent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug];

  if (!service) {
    notFound();
  }

  return <ServiceContent service={service} />;
}