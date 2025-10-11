import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";

const Contact = () => {
  const hours = [
    { day: "Montag", time: "08:00 - 18:00" },
    { day: "Dienstag", time: "08:00 - 18:00" },
    { day: "Mittwoch", time: "08:00 - 20:00" },
    { day: "Donnerstag", time: "08:00 - 18:00" },
    { day: "Freitag", time: "08:00 - 16:00" },
    { day: "Samstag", time: "Geschlossen" },
    { day: "Sonntag", time: "Geschlossen" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content" className="pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 animate-fade-in text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Kontakt & Öffnungszeiten</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir freuen uns auf Ihre
              Nachricht.
            </p>
          </div>

          {/* Öffnungszeiten Section */}
          <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-lg">
            <div className="mb-6 flex items-center justify-center">
              <div
                className="gradient-primary mr-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                aria-hidden="true"
              >
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">
                <span className="text-gradient">Öffnungszeiten</span>
              </h2>
            </div>
            <div className="mx-auto max-w-2xl">
              <div className="space-y-3" role="table" aria-label="Öffnungszeiten der Praxis">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between rounded-lg px-6 py-4 ${
                      item.time === "Geschlossen"
                        ? "bg-muted/50"
                        : "bg-muted transition-colors hover:bg-muted/80"
                    }`}
                    role="row"
                  >
                    <span className="flex items-center font-medium" role="cell">
                      <Calendar className="mr-3 h-5 w-5 text-secondary" aria-hidden="true" />
                      {item.day}
                    </span>
                    <span
                      className={
                        item.time === "Geschlossen"
                          ? "text-muted-foreground"
                          : "font-semibold text-secondary"
                      }
                      role="cell"
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-secondary/10 p-4 text-center">
                <p className="text-sm font-medium text-secondary">
                  💡 Termine nur nach Vereinbarung – Buchen Sie online oder rufen Sie uns an!
                </p>
              </div>
            </div>
          </div>

          {/* Kontaktinformationen - Zentriert, ohne Formular */}
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Contact Information */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-semibold">Kontaktinformationen</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium">Adresse</p>
                    <address className="not-italic text-muted-foreground">
                      Metzgerei Vogel GmbH
                      <br />
                      Alte Dorfstraße 35 • Ursulapoppenricht
                      <br />
                      92256 Hahnbach
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium">Telefon</p>
                    <a
                      href="tel:+49123456789"
                      className="text-muted-foreground transition-colors hover:text-secondary"
                    >
                      0123 456 789
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">Mo-Fr: 08:00 - 18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="gradient-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                    <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium">E-Mail</p>
                    <a
                      href="mailto:info@physiovio.de"
                      className="text-muted-foreground transition-colors hover:text-secondary"
                    >
                      info@physiovio.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.7890123456!2d11.825678!3d49.628901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f3e1234567890%3A0x1234567890abcdef!2sAlte%20Dorfstra%C3%9Fe%2035%2C%2092256%20Hahnbach!5e0!3m2!1sde!2sde!4v1728567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Standort: Alte Dorfstraße 35, Ursulapoppenricht, 92256 Hahnbach"
                className="grayscale transition-all duration-300 hover:grayscale-0"
              ></iframe>
            </div>

            {/* Quick Info */}
            <div className="gradient-soft rounded-2xl border border-border p-6">
              <h3 className="mb-2 font-semibold">Anfahrt</h3>
              <p className="text-sm text-muted-foreground">
                Kostenlose Parkplätze direkt vor der Praxis. Mit öffentlichen Verkehrsmitteln: Bus
                123 & 456, Haltestelle "Musterplatz"
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Contact;
