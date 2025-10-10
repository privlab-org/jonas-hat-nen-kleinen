import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const OpeningHours = () => {
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 animate-fade-in text-center">
            <div
              className="gradient-primary mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl"
              aria-hidden="true"
            >
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Öffnungszeiten</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Wir sind für Sie da.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Opening Hours Card */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              <h2 className="mb-6 flex items-center text-2xl font-semibold">
                <Calendar className="mr-3 h-6 w-6 text-secondary" aria-hidden="true" />
                Praxiszeiten
              </h2>
              <div className="space-y-4" role="table" aria-label="Öffnungszeiten der Praxis">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                      item.time === "Geschlossen"
                        ? "bg-muted/50"
                        : "bg-muted transition-colors hover:bg-muted/80"
                    }`}
                    role="row"
                  >
                    <span className="font-medium" role="cell">
                      {item.day}
                    </span>
                    <span
                      className={
                        item.time === "Geschlossen"
                          ? "text-muted-foreground"
                          : "font-medium text-secondary"
                      }
                      role="cell"
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Welcome Card */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">Bitte beachten Sie:</span> Wir
                    arbeiten ausschließlich nach Terminvereinbarung, um Ihnen die bestmögliche
                    Betreuung zu garantieren und Wartezeiten zu vermeiden.
                  </p>
                  <div className="rounded-xl bg-secondary/10 p-4">
                    <p className="text-sm font-medium text-secondary">
                      💡 Tipp: Buchen Sie Ihren Termin bequem online – schnell, einfach und rund um
                      die Uhr!
                    </p>
                  </div>
                  <Link
                    to="/booking"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-secondary px-6 py-3 font-medium text-white transition-colors hover:bg-secondary/90"
                  >
                    Jetzt Termin buchen
                  </Link>
                </div>
              </div>

              <div className="gradient-soft rounded-2xl border border-border p-8">
                <h3 className="mb-4 text-xl font-semibold">
                  Termine außerhalb der Öffnungszeiten?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  In besonderen Fällen können wir auch Termine außerhalb der regulären
                  Öffnungszeiten anbieten. Sprechen Sie uns einfach an!
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-secondary px-6 py-3 font-medium text-white transition-colors hover:bg-secondary/90"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 rounded-2xl border border-border bg-muted/50 p-8">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-4 text-xl font-semibold">Wichtige Hinweise</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Termine nur nach Vereinbarung – bitte buchen Sie online oder telefonisch</p>
                <p>
                  • Bei Terminabsagen bitten wir um rechtzeitige Benachrichtigung (mindestens 24h
                  vorher)
                </p>
                <p>• An Feiertagen bleibt unsere Praxis geschlossen</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default OpeningHours;
