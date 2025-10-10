import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import teamImage from "@/assets/team-image.jpg";
import teamAnna from "@/assets/team-anna.jpg";
import teamMarkus from "@/assets/team-markus.jpg";
import teamLisa from "@/assets/team-lisa.jpg";
import teamThomas from "@/assets/team-thomas.jpg";

const Team = () => {
  const team = [
    {
      name: "Dr. Anna Schmidt",
      role: "Leitende Physiotherapeutin",
      specialization: "Manuelle Therapie, Sportphysiotherapie",
      description: "15 Jahre Erfahrung in der Behandlung von Sport- und Alltagsverletzungen",
      image: teamAnna,
    },
    {
      name: "Markus Weber",
      role: "Physiotherapeut",
      specialization: "Orthopädie, Neurologie",
      description: "Spezialisiert auf neurologische Rehabilitation und orthopädische Nachsorge",
      image: teamMarkus,
    },
    {
      name: "Lisa Müller",
      role: "Physiotherapeutin",
      specialization: "Lymphdrainage, Beckenbodentherapie",
      description: "Zertifizierte Therapeutin für Lymphologie und prä-/postnatale Behandlungen",
      image: teamLisa,
    },
    {
      name: "Thomas Klein",
      role: "Physiotherapeut",
      specialization: "Manuelle Therapie, CMD",
      description: "Experte für Kiefergelenksstörungen und manuelle Behandlungstechniken",
      image: teamThomas,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Unser <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lernen Sie unsere erfahrenen und engagierten Therapeuten kennen, die
              Sie auf Ihrem Weg zur Genesung begleiten.
            </p>
          </div>

          {/* Team Image */}
          <div className="mb-20 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={teamImage}
                alt="PHYSIOVIO Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <Avatar className="w-20 h-20 flex-shrink-0">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="gradient-primary text-white text-xl font-bold">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      <span className="font-medium">Spezialisierung:</span> {member.specialization}
                    </p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Section */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl gradient-soft border border-border">
            <h2 className="text-3xl font-bold mb-6 text-center">Unsere Philosophie</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
              <p>
                Bei PHYSIOVIO glauben wir an eine partnerschaftliche Zusammenarbeit zwischen
                Therapeut und Patient. Wir begleiten Sie professionell auf Ihrem Weg zur
                Genesung, aber die aktive Mitarbeit liegt bei Ihnen.
              </p>
              <p>
                Unser Team vereint jahrelange Erfahrung mit modernsten Behandlungsmethoden.
                Jeder Therapeut bringt seine individuellen Stärken ein, um Ihnen die
                bestmögliche Behandlung zu bieten.
              </p>
              <p>
                Wir legen großen Wert auf kontinuierliche Weiterbildung und arbeiten nach
                neuesten wissenschaftlichen Erkenntnissen – immer mit dem Ziel, Ihre
                Lebensqualität nachhaltig zu verbessern.
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

export default Team;
