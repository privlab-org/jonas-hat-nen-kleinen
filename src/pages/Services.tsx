import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import {
  Activity,
  Droplets,
  HandMetal,
  Brain,
  Dumbbell,
  Sparkles,
  Zap,
  Radio,
  Flame,
  Snowflake,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    // Wenn dieselbe Box geklickt wird, schließe sie. Sonst öffne die neue.
    setOpenIndex(openIndex === index ? null : index);
  };
  const services = [
    {
      icon: Activity,
      title: "Krankengymnastik (KG)",
      description:
        "Gezielte Bewegungstherapie zur Wiederherstellung, Erhaltung und Förderung der Gesundheit. Durch individuelle Übungen verbessern wir Ihre Beweglichkeit, Kraft und Koordination. Ideal nach Operationen, Verletzungen oder bei chronischen Beschwerden.",
      features: ["Individuelle Therapiepläne", "Schmerzlinderung", "Beweglichkeitsförderung"],
    },
    {
      icon: Droplets,
      title: "Manuelle Lymphdrainage (MLD)",
      description:
        "Sanfte Massagetechnik zur Aktivierung des Lymphsystems und Förderung des Lymphabflusses. Besonders wirksam bei Schwellungen, Ödemen nach Operationen oder Verletzungen. Die rhythmischen Griffe unterstützen die natürliche Entgiftung des Körpers.",
      features: ["Ödembehandlung", "Entstauungstherapie", "Postoperative Nachsorge"],
    },
    {
      icon: HandMetal,
      title: "Manuelle Therapie (MT)",
      description:
        "Spezielle Handgrifftechniken zur Behandlung von Funktionsstörungen des Bewegungsapparates. Wir mobilisieren Gelenke, dehnen verkürzte Muskeln und behandeln Blockaden. Besonders effektiv bei Gelenkschmerzen, Bewegungseinschränkungen und Verspannungen.",
      features: ["Gelenkbehandlung", "Mobilisation", "Schmerztherapie"],
    },
    {
      icon: Brain,
      title: "Krankengymnastik nach Bobath (KG Bobath)",
      description:
        "Spezielles neurophysiologisches Behandlungskonzept für Patienten mit neurologischen Erkrankungen. Durch gezielte Bewegungsanbahnung verbessern wir gestörte Bewegungsmuster. Ideal nach Schlaganfall, bei Parkinson oder Multipler Sklerose.",
      features: ["Neurologische Rehabilitation", "Bewegungsanbahnung", "Alltagstraining"],
    },
    {
      icon: Dumbbell,
      title: "Krankengymnastik am Gerät (KGG)",
      description:
        "Gerätegestütztes Training zur Verbesserung von Kraft, Ausdauer und Koordination. An modernen Trainingsgeräten arbeiten wir gezielt an Ihren individuellen Schwachstellen. Perfekt für den Muskelaufbau und die Stabilisierung nach Verletzungen.",
      features: ["Muskelaufbau", "Stabilisationstraining", "Funktionelles Training"],
    },
    {
      icon: Sparkles,
      title: "Klassische Massagetherapie (KMT)",
      description:
        "Bewährte Massagetechniken zur Lockerung verspannter Muskulatur und Förderung der Durchblutung. Durch gezielte Griffe lösen wir Verhärtungen, lindern Schmerzen und steigern Ihr Wohlbefinden. Ideal zur Entspannung und Regeneration.",
      features: ["Muskellösung", "Durchblutungsförderung", "Entspannung"],
    },
    {
      icon: Zap,
      title: "Elektrotherapie (ET)",
      description:
        "Therapeutische Anwendung von elektrischem Strom zur Schmerzlinderung und Muskelstimulation. Die elektrischen Impulse fördern die Durchblutung, lockern die Muskulatur und unterstützen den Heilungsprozess. Wirksam bei akuten und chronischen Schmerzen.",
      features: ["Schmerzreduktion", "Muskelstimulation", "Durchblutungsförderung"],
    },
    {
      icon: Radio,
      title: "Ultraschalltherapie",
      description:
        "Behandlung mit hochfrequenten Schallwellen, die tief ins Gewebe eindringen. Fördert die Heilung, lockert Verklebungen und lindert Entzündungen. Besonders wirksam bei Sehnenreizungen, Muskelverhärtungen und chronischen Schmerzzuständen.",
      features: ["Tiefenwärme", "Gewebeheilung", "Schmerzlinderung"],
    },
    {
      icon: Flame,
      title: "Wärmetherapie (Fango/Heißluft)",
      description:
        "Wohltuende Wärmeanwendungen zur Muskelentspannung und Durchblutungsförderung. Fango-Packungen oder Heißluft bereiten das Gewebe optimal auf weitere Behandlungen vor. Ideal zur Lockerung bei Verspannungen und chronischen Schmerzen.",
      features: ["Muskelentspannung", "Durchblutungsförderung", "Vorbereitung"],
    },
    {
      icon: Snowflake,
      title: "Kältetherapie (KT)",
      description:
        "Gezielte Kälteanwendungen zur Schmerzlinderung und Entzündungshemmung. Kälte reduziert Schwellungen, hemmt Entzündungsprozesse und lindert akute Schmerzen. Perfekt nach Verletzungen, Operationen oder bei entzündlichen Erkrankungen.",
      features: ["Entzündungshemmung", "Abschwellung", "Akute Schmerzlinderung"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main
        id="main-content"
        className="bg-gradient-to-b from-secondary/5 via-transparent to-transparent pb-20 pt-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 animate-fade-in text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              <span className="text-gradient">Unsere Leistungen</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Professionelle Physiotherapie mit modernsten Behandlungsmethoden für Ihre Gesundheit
              und Ihr Wohlbefinden.
            </p>
          </div>

          {/* Services Accordion */}
          <div className="mb-16 space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="via-secondary/8 group overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-card/90 to-card/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:from-secondary/10 hover:via-secondary/15 hover:to-secondary/10 hover:shadow-xl"
              >
                {/* Header - Immer sichtbar, klickbar */}
                <button
                  onClick={() => toggleService(index)}
                  className="flex w-full items-center justify-between gap-3 rounded-l-2xl border-l-4 border-secondary/40 p-4 text-left transition-all hover:border-secondary hover:bg-gradient-to-r hover:from-secondary/15 hover:to-secondary/10 sm:gap-4 sm:p-6"
                >
                  <h3 className="text-base font-bold transition-colors group-hover:text-secondary sm:text-xl">
                    {service.title}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 sm:h-6 sm:w-6 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Content - Smoother & synchrone Animation */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="mb-6 leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="gradient-soft rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/20 via-secondary/15 to-secondary/25 p-8 text-center shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Individuelle Beratung gewünscht?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              Jeder Patient ist einzigartig. Gerne beraten wir Sie persönlich, welche
              Behandlungsmethoden für Ihre individuellen Bedürfnisse am besten geeignet sind.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-primary/90 hover:to-secondary hover:shadow-xl"
              >
                Jetzt Termin vereinbaren
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center rounded-xl border-2 border-secondary bg-gradient-to-r from-secondary/20 to-secondary/10 px-8 py-3 font-semibold text-primary shadow-md transition-all hover:scale-105 hover:border-secondary hover:from-secondary/30 hover:to-secondary/20 hover:shadow-lg"
              >
                Unser Team kennenlernen
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Services;
