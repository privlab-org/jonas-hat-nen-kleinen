import { useState, useEffect } from "react";
import { X, Cookie, CheckCircle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing banner slightly for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(savedPreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border-2 border-border rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Wir respektieren Ihre Privatsphäre
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu
                    verbessern. Einige sind notwendig für den Betrieb der Website,
                    während andere uns helfen, diese Website und Ihre Erfahrung zu
                    verbessern.
                  </p>
                  <Link
                    to="/datenschutz"
                    className="text-sm text-secondary hover:underline font-medium"
                  >
                    Mehr erfahren in unserer Datenschutzerklärung
                  </Link>
                </div>
              </div>
              <button
                onClick={handleRejectAll}
                className="p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
                aria-label="Banner schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleOpenSettings}
                variant="outline"
                className="flex-1 sm:flex-none"
              >
                <Settings className="h-4 w-4 mr-2" />
                Einstellungen
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="flex-1 sm:flex-none"
              >
                Nur notwendige
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-auto bg-secondary hover:bg-secondary/90 text-white"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Cookie-Einstellungen</DialogTitle>
            <DialogDescription>
              Verwalten Sie Ihre Cookie-Präferenzen. Sie können Ihre Auswahl jederzeit
              ändern.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-muted/50">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">Notwendige Cookies</h4>
                  <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full font-medium">
                    Immer aktiv
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Diese Cookies sind für die grundlegende Funktionalität der Website
                  erforderlich und können nicht deaktiviert werden.
                </p>
              </div>
              <Switch checked={true} disabled className="mt-1" />
            </div>

            {/* Functional Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border">
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Funktionale Cookies</h4>
                <p className="text-sm text-muted-foreground">
                  Diese Cookies ermöglichen erweiterte Funktionen wie personalisierte
                  Inhalte und gespeicherte Präferenzen.
                </p>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, functional: checked })
                }
                className="mt-1"
              />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border">
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Analyse-Cookies</h4>
                <p className="text-sm text-muted-foreground">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer
                  Website interagieren, indem sie anonymisierte Informationen sammeln.
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, analytics: checked })
                }
                className="mt-1"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border">
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Marketing-Cookies</h4>
                <p className="text-sm text-muted-foreground">
                  Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen
                  und die Effektivität von Werbekampagnen zu messen.
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, marketing: checked })
                }
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t">
            <Button
              onClick={handleRejectAll}
              variant="outline"
              className="flex-1"
            >
              Alle ablehnen
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="flex-1 bg-secondary hover:bg-secondary/90 text-white"
            >
              Auswahl speichern
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="flex-1 bg-secondary hover:bg-secondary/90 text-white"
            >
              Alle akzeptieren
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
