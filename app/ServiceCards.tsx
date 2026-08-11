"use client";

import { useState } from "react";

const servicesUrl = "https://mysite.vagaro.com/mkstudio5/services";

const services = [
  {
    number: "01",
    eyebrow: "Most loved",
    title: "Laser Hair Removal",
    slug: "laser-hair-removal",
    description:
      "Personalized treatment plans designed around your skin, hair and comfort.",
    panelCopy:
      "Choose from full-body treatments or smaller areas, with a plan tailored to your goals and comfort.",
    highlights: [
      "Full-body and targeted-area treatments",
      "Face, neck and underarm options",
      "Personalized consultations",
    ],
  },
  {
    number: "02",
    eyebrow: "Skin rituals",
    title: "Facials & Skin",
    slug: "facials-and-skin",
    description:
      "Medical-grade care for a healthy, hydrated and visibly refreshed complexion.",
    panelCopy:
      "Advanced skin treatments are selected around your concerns, comfort and the results you want to achieve.",
    highlights: [
      "Medical-grade microneedling",
      "Korean chemical peels",
      "Exosome and signature glow treatments",
    ],
  },
  {
    number: "03",
    eyebrow: "Signature",
    title: "Permanent Makeup",
    slug: "permanent-makeup",
    description:
      "Soft, natural-looking brows, lips and liner tailored to your features.",
    panelCopy:
      "Shape, colour and technique are personalized to enhance your features while keeping the result natural-looking.",
    highlights: [
      "Nano, powder and ombré brows",
      "Lip blush and neutralization",
      "Permanent eyeliner and touch-ups",
    ],
  },
  {
    number: "04",
    eyebrow: "Finishing touch",
    title: "Brows & Lashes",
    slug: "brows-and-lashes",
    description:
      "Lifts, laminations and extensions that make everyday beauty feel effortless.",
    panelCopy:
      "Choose a subtle refresh or a more defined finish, shaped to suit your features and everyday routine.",
    highlights: [
      "Lash lifts and extensions",
      "Brow laminations",
      "Brow and lash tinting",
    ],
  },
];

export default function ServiceCards() {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <>
      {services.map((service) => {
        const isOpen = openService === service.slug;
        const panelId = `service-panel-${service.slug}`;

        return (
          <article
            className={`service-card${isOpen ? " is-open" : ""}`}
            key={service.slug}
          >
            <button
              className="service-card-toggle"
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenService(isOpen ? null : service.slug)}
            >
              <span className="service-meta">
                <span>{service.number}</span>
                <span>{service.eyebrow}</span>
              </span>
              <span className="service-card-copy">
                <span className="service-card-title">{service.title}</span>
                <span className="service-card-description">
                  {service.description}
                </span>
              </span>
              <span className="service-arrow" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
          </article>
        );
      })}

      {services.map((service) => {
        const isOpen = openService === service.slug;
        const panelId = `service-panel-${service.slug}`;

        return (
          <section
            className="service-details-panel"
            id={panelId}
            key={panelId}
            hidden={!isOpen}
            aria-label={`${service.title} service details`}
          >
            <div className="service-details-copy">
              <p className="eyebrow">Explore the menu</p>
              <h3>{service.title}</h3>
              <p>{service.panelCopy}</p>
            </div>
            <ul>
              {service.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <a
              className="service-vagaro-link"
              href={servicesUrl}
              target="_blank"
              rel="noreferrer"
            >
              View all services on Vagaro <span aria-hidden="true">↗</span>
            </a>
          </section>
        );
      })}
    </>
  );
}
