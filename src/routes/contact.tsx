import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { meta } from "@/components/site/CapabilityGroupPage";
import { engagementModels } from "@/data/capabilities";

export const Route = createFileRoute("/contact")({
  head: () =>
    meta(
      "Request a Brand Diagnostic — Ecom Gleam",
      "Start with intelligence. Request a brand diagnostic covering market, customer, competition, channel economics and expansion opportunity.",
    ),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a Brand Diagnostic"
        intro="Tell us the brand problem. We respond with the research path, the commercial questions we would answer first, and the engagement model that fits."
      />

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-10">
          <Reveal>
            {sent ? (
              <div className="panel p-8">
                <h2 className="display text-6xl text-primary">Received</h2>
                <p className="mt-4 text-muted-foreground">
                  Thank you. A member of the Ecom Gleam team will respond with next steps.
                </p>
              </div>
            ) : (
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" />
                  <Field label="Work email" name="email" type="email" />
                  <Field label="Brand / company" name="brand" />
                  <Field label="Primary market" name="market" placeholder="USA / UK / UAE" />
                </div>
                <label className="grid gap-2">
                  <span className="eyebrow">Engagement interest</span>
                  <select
                    name="engagement"
                    className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    {engagementModels.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="eyebrow">The brand problem</span>
                  <textarea
                    name="problem"
                    rows={5}
                    required
                    className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Channel conflict, stalled marketplace growth, launch, expansion…"
                  />
                </label>
                <button
                  type="submit"
                  className="justify-self-start rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Submit Request
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel p-6">
              <h2 className="eyebrow">Markets</h2>
              <p className="display mt-3 text-6xl">USA · UK · UAE</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Marketplace, DTC and physical distribution growth, with expansion built
                marketplace-to-marketplace and country-to-country.
              </p>
              <div className="rule-line my-6" />
              <p className="text-sm text-muted-foreground">
                We don't begin with ads, listings or channels. We begin with intelligence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="eyebrow">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
