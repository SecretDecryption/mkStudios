import VagaroWidget from "./VagaroWidget";

const bookingUrl = "https://mysite.vagaro.com/mkstudio5/book-now";
const servicesUrl = "https://mysite.vagaro.com/mkstudio5/services";
const membershipUrl =
  "https://www.vagaro.com/cl/FXOWv4OWI4u6akim~~pzsBeI2z~esSGAUy2VtYjDla4=";

const services = [
  {
    number: "01",
    eyebrow: "Most loved",
    title: "Laser Hair Removal",
    vagaroSection: "Laser Hair Removal",
    description:
      "Personalized treatment plans designed around your skin, hair and comfort.",
  },
  {
    number: "02",
    eyebrow: "Skin rituals",
    title: "Facials & Skin",
    vagaroSection: "Facials",
    description:
      "Medical-grade care for a healthy, hydrated and visibly refreshed complexion.",
  },
  {
    number: "03",
    eyebrow: "Signature",
    title: "Permanent Makeup",
    vagaroSection: "Permanent Makeup",
    description:
      "Soft, natural-looking brows, lips and liner tailored to your features.",
  },
  {
    number: "04",
    eyebrow: "Finishing touch",
    title: "Brows & Lashes",
    vagaroSection: "Eyelash and Brow Extensions / Tinting",
    description:
      "Lifts, laminations and extensions that make everyday beauty feel effortless.",
  },
];

const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Start with a consultation. Masoda will listen to your goals, review the treatment area and recommend an approach that feels realistic and comfortable for you.",
  },
  {
    question: "How many laser hair removal sessions will I need?",
    answer:
      "Every treatment plan is different. The area being treated, your hair and skin, and your response between appointments all shape the recommended schedule.",
  },
  {
    question: "Where is MK Studio located?",
    answer:
      "MK Studio is inside TBS at 35 Water Street South, Unit 101, in downtown Cambridge, Ontario.",
  },
  {
    question: "Is financing available?",
    answer:
      "Financing options are available through iFinance. You can review eligibility and terms before committing to a treatment plan.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="MK Studio home">
          <img
            className="brand-logo"
            src="/mk-studio/logo.png"
            alt=""
            width="56"
            height="56"
          />
          <span className="brand-copy">
            <span className="brand-name">MK Studio</span>
            <small>Cambridge</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#membership">Membership</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="header-book"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          data-vagaro-booking
        >
          Book now
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-inner">
            <p className="eyebrow hero-eyebrow">
              <span aria-hidden="true" /> Medical aesthetics · Cambridge
            </p>

            <h1 id="hero-title">
              Your glow,
              <em> entirely your own.</em>
            </h1>

            <p className="hero-copy">
              Laser hair removal, medical-grade facials, permanent makeup,
              brows and lashes—personalized by Masoda in Cambridge.
            </p>

            <div className="hero-actions">
              <a
                className="button button-dark"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                data-vagaro-booking
              >
                Book an appointment <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#services">
                Explore services <span aria-hidden="true">↓</span>
              </a>
            </div>

            <ul className="trust-list" aria-label="Studio credentials">
              <li>Certified Medical Aesthetician</li>
              <li>8+ years of experience</li>
              <li>Cambridge, Ontario</li>
            </ul>
          </div>

          <figure className="hero-portrait">
            <img
              src="/mk-studio/masoda-scrubs-hd.png"
              alt="Masoda, founder and medical aesthetician at MK Studio"
              width="213"
              height="320"
              loading="eager"
            />
            <figcaption>
              <span>Masoda Khaliqi</span>
              Founder · Medical aesthetician
            </figcaption>
          </figure>

          <p className="hero-word" aria-hidden="true">
            Radiant
          </p>
          <div className="hero-mark" aria-hidden="true">
            <span>MK</span>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="service-intro">
            <p className="eyebrow">Treatments</p>
            <h2 id="services-title">Made for you.</h2>
          </div>

          {services.map((service) => (
            <a
              className="service-card"
              href={`${servicesUrl}#:~:text=${encodeURIComponent(service.vagaroSection)}`}
              target="_blank"
              rel="noreferrer"
              key={service.title}
              aria-label={`View ${service.title} services on Vagaro`}
            >
              <div className="service-meta">
                <span>{service.number}</span>
                <span>{service.eyebrow}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span className="service-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-main">
            <p className="eyebrow">The woman behind MK</p>
            <h2 id="about-title">Meet Masoda.</h2>
            <p className="about-lead">
              A certified medical aesthetician and permanent makeup artist
              known for honest guidance, gentle care and results tailored to
              the person—not the trend.
            </p>
            <p>
              With more than eight years in beauty and aesthetics, Masoda brings
              technical expertise and an easy, personal energy to every
              appointment. Her goal is simple: help you feel confident in skin
              that still feels like yours.
            </p>
            <a
              className="text-link"
              href="https://www.instagram.com/_.mkstudio_/"
              target="_blank"
              rel="noreferrer"
            >
              Follow the studio <span aria-hidden="true">↗</span>
            </a>
          </div>

          <aside className="about-note" aria-label="MK Studio approach">
            <p className="eyebrow">The MK approach</p>
            <p className="statement">
              Honest advice. Considered technique. Beauty that never feels
              overdone.
            </p>
            <ul>
              <li>One-on-one care</li>
              <li>Personalized treatment plans</li>
              <li>Comfort-first appointments</li>
            </ul>
          </aside>
        </section>

        <section
          className="studio-gallery"
          aria-labelledby="studio-gallery-title"
        >
          <div className="gallery-heading">
            <p className="eyebrow">Inside MK Studio</p>
            <h2 id="studio-gallery-title">Expert care, in every detail.</h2>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-item gallery-item-wide">
              <img
                src="/mk-studio/laser-treatment-hd.png"
                alt="Masoda performing a laser treatment at MK Studio"
                width="320"
                height="213"
                loading="lazy"
              />
              <figcaption>Advanced treatment technology</figcaption>
            </figure>
            <figure className="gallery-item">
              <img
                src="/mk-studio/facial-treatment-hd.png"
                alt="A personalized facial treatment at MK Studio"
                width="240"
                height="320"
                loading="lazy"
              />
              <figcaption>Comfort-first appointments</figcaption>
            </figure>
            <figure className="gallery-item">
              <img
                src="/mk-studio/brushes-hd.png"
                alt="Masoda holding professional treatment brushes"
                width="214"
                height="321"
                loading="lazy"
              />
              <figcaption>A detail-focused approach</figcaption>
            </figure>
            <figure className="gallery-item gallery-item-portrait">
              <img
                src="/mk-studio/masoda-portrait-hd.png"
                alt="Masoda seated in her Cambridge studio"
                width="213"
                height="320"
                loading="lazy"
              />
              <figcaption>The woman behind MK</figcaption>
            </figure>
          </div>
        </section>

        <section
          className="membership"
          id="membership"
          aria-labelledby="membership-title"
        >
          <div className="membership-orbit" aria-hidden="true">
            MK
          </div>
          <div>
            <p className="eyebrow">Consistent care · Member pricing</p>
            <h2 id="membership-title">The MK Glow Membership.</h2>
          </div>
          <div className="membership-copy">
            <p>
              Turn skincare into a ritual with preferred pricing and regular
              time reserved for your glow goals.
            </p>
            <a
              className="button button-light"
              href={membershipUrl}
              target="_blank"
              rel="noreferrer"
            >
              Explore membership <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="video-feature" aria-labelledby="video-title">
          <div className="video-copy">
            <p className="eyebrow">Studio tips</p>
            <h2 id="video-title">A little expert guidance.</h2>
            <p>
              Watch Masoda share simple, practical advice for getting more from
              your skincare and treatment routine.
            </p>
          </div>
          <div className="video-frame">
            <video
              controls
              muted
              playsInline
              preload="metadata"
              poster="/mk-studio/brushes-hd.png"
              aria-label="MK Studio skincare tip video"
            >
              <source src="/mk-studio/tip-tuesday.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </section>

        <section className="process" aria-labelledby="process-title">
          <div className="process-heading">
            <p className="eyebrow">What to expect</p>
            <h2 id="process-title">A calm path to your best result.</h2>
          </div>
          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Talk it through</h3>
                <p>Share your goals and get clear, pressure-free guidance.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Make it personal</h3>
                <p>Receive a treatment plan tailored to you and your comfort.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Keep the glow</h3>
                <p>Follow a simple care rhythm designed for lasting confidence.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="reviews" id="reviews" aria-labelledby="reviews-title">
          <p className="eyebrow">Kind words, verified</p>
          <h2 id="reviews-title">
            Come for the expertise.
            <em> Stay for the care.</em>
          </h2>
          <p>
            See what clients say about their experience with Masoda and MK
            Studio.
          </p>
          <a
            className="button button-dark"
            href="https://g.co/kgs/vgtw1g8"
            target="_blank"
            rel="noreferrer"
          >
            Read Google reviews <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="faq" aria-labelledby="faq-title">
          <div className="faq-heading">
            <p className="eyebrow">Good to know</p>
            <h2 id="faq-title">Before you book.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-title-wrap">
            <p className="eyebrow">Visit the studio</p>
            <h2 id="contact-title">Ready when you are.</h2>
          </div>

          <div className="contact-details">
            <div>
              <p className="detail-label">Location</p>
              <address>
                35 Water St S, Unit 101
                <br />
                Cambridge, ON N1R 8R9
              </address>
              <a
                className="text-link"
                href="https://www.google.com/maps/search/?api=1&query=35+Water+St+S+Unit+101+Cambridge+ON+N1R+8R9"
                target="_blank"
                rel="noreferrer"
              >
                Get directions <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div>
              <p className="detail-label">Call</p>
              <a className="contact-phone" href="tel:+12266004258">
                226 600 4258
              </a>
              <a
                className="text-link"
                href="https://apply.medicard.com/24359"
                target="_blank"
                rel="noreferrer"
              >
                Explore financing <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <a
            className="contact-book"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            data-vagaro-booking
          >
            Book your appointment <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top" aria-label="MK Studio home">
          <img
            className="brand-logo"
            src="/mk-studio/logo.png"
            alt=""
            width="56"
            height="56"
            loading="lazy"
          />
          <span className="brand-copy">
            <span className="brand-name">MK Studio</span>
            <small>Cambridge</small>
          </span>
        </a>
        <p>Certified medical aesthetics, made personal.</p>
        <div className="social-links" aria-label="Social links">
          <a
            href="https://www.instagram.com/_.mkstudio_/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1BcvK4HjLX/?mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@mk_studio04"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </div>
      </footer>
      <VagaroWidget />
    </>
  );
}
