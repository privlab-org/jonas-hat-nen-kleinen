import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Building2, Users } from "lucide-react";
import teamImage from "@/assets/team-image.png";
import teamJonas from "@/assets/team-jonas.png";
import teamVater from "@/assets/team-vater.png";
import teamOma from "@/assets/team-oma.png";

const Team = () => {
  const team = [
    {
      name: "Dr. Prof. Jonas",
      role: "Leitender Physiotherapeut",
      specialization: "Schwanz Massagen",
      description: "30 Jahre Jung, 45 Jahre Berufserfahrung",
      image: teamJonas,
    },
    {
      name: "Dr. Prof. Jonas sein Vater",
      role: "Senior Physiotherapeut",
      specialization: "Spielt Jäger in WOW.",
      description: "Raid: 2x Täglich 18 mal die Woche.",
      image: teamVater,
    },
    {
      name: "Dr. Prof. Jonas seine Oma",
      role: "Oberste Physiotherapeutin",
      specialization: "Nur Deko.",
      description: "Kann sich kaum noch bewegen.",
      image: teamOma,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content" className="pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 animate-fade-in text-center">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
              Über <span className="text-gradient">Uns</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Lernen Sie unser Team und unsere moderne Praxis kennen – Ihr Partner für Gesundheit
              und Wohlbefinden.
            </p>
          </div>

          {/* Unsere Praxis Section - JETZT ZUERST */}
          <section className="mb-20">
            <div className="mb-12 flex items-center justify-center">
              <div
                className="gradient-primary mr-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                aria-hidden="true"
              >
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                <span className="text-gradient">Unsere Praxis</span>
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Praxis Image */}
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={teamImage}
                    alt="PHYSIO VIO Praxis - Moderne Räumlichkeiten und professionelle Ausstattung"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Praxis Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                  <h3 className="mb-4 text-2xl font-bold">Moderne Ausstattung</h3>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Unsere Praxis bietet Ihnen eine angenehme und professionelle Atmosphäre für Ihre
                    Behandlung. Mit modernster Ausstattung und hellen, freundlichen Räumen schaffen
                    wir die idealen Bedingungen für Ihre Genesung.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span className="text-muted-foreground">
                        Modernste Trainings- und Therapiegeräte
                      </span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span className="text-muted-foreground">Helle und klimatisierte Räume</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span className="text-muted-foreground">Barrierefreier Zugang für alle</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span className="text-muted-foreground">Kostenlose Parkplätze vor Ort</span>
                    </li>
                  </ul>
                </div>

                <div className="gradient-soft rounded-2xl border border-border p-8">
                  <h3 className="mb-4 text-xl font-bold">Unsere Philosophie</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Bei PHYSIO VIO steht der Mensch im Mittelpunkt. Wir nehmen uns Zeit für Sie und
                    erstellen individuelle Behandlungspläne, die genau auf Ihre Bedürfnisse
                    zugeschnitten sind. Vertrauen, Kompetenz und Empathie sind die Grundpfeiler
                    unserer Arbeit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Unser Team Section - JETZT DANACH */}
          <section>
            <div className="mb-12 flex items-center justify-center">
              <div
                className="gradient-primary mr-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                aria-hidden="true"
              >
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                <span className="text-gradient">Unser Team</span>
              </h2>
            </div>

            {/* Mitarbeiter Boxen - Foto links, Text rechts - KLEINER */}
            <div className="space-y-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:scale-[1.01] hover:border-secondary/50 hover:shadow-xl"
                >
                  <div className="grid items-center gap-6 lg:grid-cols-[280px_1fr]">
                    {/* Foto Links - Kleiner */}
                    <div className="relative h-64 overflow-hidden bg-muted lg:h-72">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text Rechts - Kompakter */}
                    <div className="p-6 lg:pr-8">
                      <h3 className="mb-2 text-2xl font-bold transition-colors group-hover:text-secondary">
                        {member.name}
                      </h3>
                      <p className="mb-3 text-base font-semibold text-secondary">{member.role}</p>
                      <p className="mb-3 text-sm text-muted-foreground">
                        <span className="font-semibold">Spezialisierung:</span>{" "}
                        {member.specialization}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Team;
