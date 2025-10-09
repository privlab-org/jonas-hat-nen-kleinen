import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="PHYSIOVIO Logo" className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Professionelle Physiotherapie für Ihre Gesundheit und Ihr Wohlbefinden.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  Unser Team
                </Link>
              </li>
              <li>
                <Link to="/opening-hours" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  Öffnungszeiten
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <p className="text-sm text-muted-foreground">
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Tel: 0123 456789<br />
              info@physiovio.de
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 PHYSIOVIO. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
