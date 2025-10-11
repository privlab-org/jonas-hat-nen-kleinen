import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const OpeningBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Konfiguration ===
  const MAX_HEIGHT = typeof window !== "undefined" ? window.innerHeight : 800;
  const MIN_HEIGHT = 60; // Schmale End-Höhe
  const NAV_HEIGHT = 80; // Navigation Höhe (5rem = 80px)
  const HIDE_EXTRAS_HEIGHT = 300; // Ab dieser Höhe verschwinden Subtitle + Button

  // === Berechnungen ===
  // Banner schrumpft SOFORT mit dem Scroll (kein Offset!)
  const scrollRange = MAX_HEIGHT - MIN_HEIGHT;
  const progress = Math.min(scrollY / scrollRange, 1);
  const currentHeight = MAX_HEIGHT - progress * scrollRange;

  // Zeige Subtitle + Button nur wenn Höhe > 300px
  const showExtras = currentHeight > HIDE_EXTRAS_HEIGHT;

  // Ping verschwindet im Endzustand (bei MIN_HEIGHT)
  const showPing = currentHeight > MIN_HEIGHT;

  // Dynamische Größen
  const pingSize = 32 - progress * 16; // 32px → 16px
  const titleSize = 7 - progress * 5.875; // 7rem → 1.125rem

  return (
    <>
      {/* Banner - sticky unter Nav mit dynamischer Höhe */}
      <div
        className="sticky top-20 z-40 overflow-hidden bg-tertiary shadow-lg"
        style={{
          height: `${currentHeight}px`,
        }}
      >
        {/* Radial Gradient Background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Single Content - scales down on scroll */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-4">
          {/* Animated Ping Indicator - verschwindet im Endzustand */}
          {showPing && (
            <span
              className="relative flex"
              style={{ width: `${pingSize}px`, height: `${pingSize}px` }}
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex h-full w-full rounded-full bg-secondary"></span>
            </span>
          )}

          {/* Main Banner Content - font size scales down */}
          <div className="space-y-2 text-center">
            <h1
              className="font-black tracking-tight text-primary"
              style={{ fontSize: `${titleSize}rem`, lineHeight: 1.1 }}
            >
              🎉 Neueröffnung ab 1 Januar 2026
            </h1>

            {/* Subtitle - Verschwindet bei 300px Höhe */}
            {showExtras && (
              <p className="text-xl font-semibold text-primary/90">
                Sichern Sie sich jetzt schon Ihren Wunschtermin!
              </p>
            )}
          </div>

          {/* CTA Button - Verschwindet bei 300px Höhe */}
          {showExtras && (
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 font-bold text-white shadow-xl hover:bg-secondary/90 focus:outline-none focus:ring-4 focus:ring-secondary/50 focus:ring-offset-2"
            >
              Jetzt vormerken
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </div>

      {/* Spacer: Hält Hero "unten" während Banner schrumpft */}
      {/* Wenn Banner von 100vh auf 60px schrumpft, nimmt dieser Spacer den Platz ein */}
      {/* So bleibt Hero sichtbar und scrollt NICHT weg, bis Banner auf MIN_HEIGHT ist */}
      <div
        style={{
          height: `${Math.max(0, MAX_HEIGHT - currentHeight)}px`,
        }}
      />

      {/* Padding zwischen Banner und Hero - verhindert "Auffressen" */}
      <div className="h-8 bg-gradient-to-b from-tertiary/20 to-transparent" />
    </>
  );
};

export default OpeningBanner;
