import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">Impressum</span>
            </h1>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="p-8 rounded-2xl border border-border bg-card space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                <p className="text-muted-foreground">
                  PHYSIOVIO Praxis für Physiotherapie<br />
                  Max Mustermann<br />
                  Musterstraße 123<br />
                  12345 Musterstadt
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                <p className="text-muted-foreground">
                  Telefon: 0123 456789<br />
                  E-Mail: info@physiovio.de
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Berufsbezeichnung</h2>
                <p className="text-muted-foreground">
                  Physiotherapeut<br />
                  Zuständige Kammer: [Kammer eintragen]<br />
                  Verliehen in: Deutschland
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Aufsichtsbehörde</h2>
                <p className="text-muted-foreground">
                  [Name der zuständigen Aufsichtsbehörde]<br />
                  [Adresse der Behörde]<br />
                  [Stadt, PLZ]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Berufsrechtliche Regelungen</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Berufsordnung für Physiotherapeuten</li>
                  <li>Masseur- und Physiotherapeutengesetz (MPhG)</li>
                  <li>Ausbildungs- und Prüfungsverordnung (PhysTh-APrV)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  [USt-IdNr. eintragen]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Berufshaftpflichtversicherung</h2>
                <p className="text-muted-foreground">
                  [Name der Versicherung]<br />
                  [Adresse der Versicherung]<br />
                  Geltungsraum: Deutschland
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Redaktionell verantwortlich</h2>
                <p className="text-muted-foreground">
                  Max Mustermann<br />
                  Musterstraße 123<br />
                  12345 Musterstadt
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
                <p className="text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a><br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p className="text-muted-foreground">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <div className="pt-6 border-t border-border text-sm text-muted-foreground">
                <p>
                  Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">e-recht24.de</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
