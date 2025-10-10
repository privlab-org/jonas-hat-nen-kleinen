import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main id="main-content" className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full gradient-primary mb-6">
              <span className="text-6xl font-bold text-white">404</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Seite nicht <span className="text-gradient">gefunden</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Zur Startseite
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
            >
              <button type="button" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </button>
            </Button>
          </div>
          
          <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border">
            <h2 className="text-lg font-semibold mb-3">Schnellzugriff</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/team" className="text-sm text-secondary hover:underline">
                Unser Team
              </Link>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <Link to="/opening-hours" className="text-sm text-secondary hover:underline">
                Öffnungszeiten
              </Link>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <Link to="/contact" className="text-sm text-secondary hover:underline">
                Kontakt
              </Link>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <Link to="/booking" className="text-sm text-secondary hover:underline">
                Termin buchen
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
