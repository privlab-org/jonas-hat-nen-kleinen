import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileCheck } from "lucide-react";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
              <FileCheck className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">Allgemeine Geschäftsbedingungen</span>
            </h1>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="p-8 rounded-2xl border border-border bg-card space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">§ 1 Geltungsbereich</h2>
                <p className="text-muted-foreground">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Behandlungen und 
                  Leistungen, die von PHYSIOVIO Praxis für Physiotherapie erbracht werden. Mit der 
                  Inanspruchnahme unserer Leistungen akzeptiert der Patient diese AGB.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">§ 2 Terminvereinbarung</h2>
                <p className="text-muted-foreground mb-4">
                  Termine können telefonisch, per E-Mail oder über unser Online-Buchungssystem vereinbart 
                  werden. Die Bestätigung erfolgt in der Regel innerhalb von 24 Stunden.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Termine sollten rechtzeitig vereinbart werden</li>
                  <li>Bei Erstbehandlungen planen wir mehr Zeit ein</li>
                  <li>Bitte erscheinen Sie pünktlich zu Ihrem Termin</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">§ 3 Terminabsagen und Stornierungen</h2>
                <p className="text-muted-foreground mb-4">
                  Sollten Sie einen vereinbarten Termin nicht wahrnehmen können, bitten wir um 
                  rechtzeitige Absage:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Absagen müssen mindestens 24 Stunden vor dem Termin erfolgen</li>
                  <li>Bei kurzfristigeren Absagen oder Nichterscheinen behalten wir uns vor, 
                      eine Ausfallgebühr in Höhe von 50% der Behandlungskosten zu berechnen</li>
                  <li>Bei Privatpatienten wird die volle Behandlungsgebühr in Rechnung gestellt</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">§ 4 Behandlung</h2>
                <p className="text-muted-foreground mb-4">
                  Die physiotherapeutische Behandlung erfolgt auf Grundlage einer ärztlichen Verordnung 
                  oder als Privatleistung nach individueller Vereinbarung.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Bitte bringen Sie zur Erstbehandlung Ihre Verordnung und ggf. relevante 
                      Befunde mit</li>
                  <li>Die Behandlung wird individuell auf Ihre Beschwerden abgestimmt</li>
                  <li>Eine aktive Mitarbeit des Patienten ist für den Therapieerfolg wichtig</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">§ 5 Vergütung</h2>
                <p className="text-muted-foreground mb-4">
                  Die Abrechnung erfolgt nach den jeweils gültigen Gebührenordnungen:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Bei gesetzlich Versicherten erfolgt die Abrechnung direkt mit der Krankenkasse</li>
                  <li>Privatpatienten erhalten eine Rechnung nach GebüH</li>
                  <li>Selbstzahler erhalten eine Rechnung nach GebüH oder individueller Vereinbarung</li>
                  <li>Rezeptgebühren sind direkt bei Behandlungsbeginn zu entrichten</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">§ 6 Schweigepflicht</h2>
                <p className="text-muted-foreground">
                  Alle Mitarbeiter unterliegen der gesetzlichen Schweigepflicht. Ihre Daten werden 
                  vertraulich behandelt und nur für die Behandlung und Abrechnung verwendet. Eine 
                  Weitergabe an Dritte erfolgt nur mit Ihrer ausdrücklichen Einwilligung oder wenn 
                  dies gesetzlich vorgeschrieben ist.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">§ 7 Haftung</h2>
                <p className="text-muted-foreground mb-4">
                  Wir haften im Rahmen der gesetzlichen Bestimmungen für Schäden, die auf Vorsatz 
                  oder grober Fahrlässigkeit beruhen. Für leichte Fahrlässigkeit haften wir nur bei 
                  Verletzung wesentlicher Vertragspflichten.
                </p>
                <p className="text-muted-foreground">
                  Der Patient ist verpflichtet, persönliche Gegenstände selbst zu verwahren. Für 
                  abhanden gekommene Gegenstände übernehmen wir keine Haftung.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">§ 8 Hausrecht</h2>
                <p className="text-muted-foreground">
                  Das Praxispersonal übt das Hausrecht aus. Bei Verstößen gegen die Hausordnung oder 
                  unangemessenem Verhalten kann der Zutritt zur Praxis verweigert werden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">§ 9 Hygienevorschriften</h2>
                <p className="text-muted-foreground mb-4">
                  Zum Schutz aller Patienten und Mitarbeiter gelten folgende Hygienevorschriften:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Bei Infektionskrankheiten bitten wir um rechtzeitige Absage</li>
                  <li>Händedesinfektion beim Betreten der Praxis</li>
                  <li>Bitte bringen Sie ein eigenes Handtuch mit</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">§ 10 Schlussbestimmungen</h2>
                <p className="text-muted-foreground mb-4">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die 
                  Wirksamkeit der übrigen Bestimmungen davon unberührt.
                </p>
                <p className="text-muted-foreground">
                  Es gilt deutsches Recht. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz 
                  unserer Praxis.
                </p>
              </section>

              <div className="pt-6 border-t border-border text-sm text-muted-foreground">
                <p>Stand: Januar 2025</p>
                <p className="mt-2">
                  PHYSIOVIO Praxis für Physiotherapie<br />
                  Musterstraße 123, 12345 Musterstadt
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

export default AGB;
