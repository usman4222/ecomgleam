import { PageHero } from "./PageHero";
import { CapabilityDetail, DiagnosticCta } from "./CapabilityDetail";
import { capabilities } from "@/data/capabilities";

export function CapabilityGroupPage({
  eyebrow,
  title,
  intro,
  slugs,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  slugs: string[];
}) {
  const caps = slugs
    .map((s) => capabilities.find((c) => c.slug === s))
    .filter((c): c is (typeof capabilities)[number] => Boolean(c));

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      {caps.map((cap) => (
        <CapabilityDetail key={cap.slug} cap={cap} />
      ))}
      <DiagnosticCta />
    </>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  };
}
