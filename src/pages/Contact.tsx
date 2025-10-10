import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Vorname muss mindestens 2 Zeichen lang sein").max(50, "Vorname zu lang"),
  lastName: z.string().trim().min(2, "Nachname muss mindestens 2 Zeichen lang sein").max(50, "Nachname zu lang"),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein").max(255, "E-Mail zu lang"),
  phone: z.string().trim().min(5, "Telefonnummer zu kurz").max(20, "Telefonnummer zu lang"),
  message: z.string().trim().min(10, "Nachricht muss mindestens 10 Zeichen lang sein").max(1000, "Nachricht zu lang"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Nachricht gesendet!",
        description: "Wir melden uns schnellstmöglich bei Ihnen.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Fehler im Formular",
          description: "Bitte überprüfen Sie Ihre Eingaben.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main id="main-content" className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">Kontakt</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir freuen uns
              auf Ihre Nachricht.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl border border-border bg-card shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Nachricht senden</h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Vorname <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Max"
                      className={`w-full ${errors.firstName ? "border-destructive" : ""}`}
                      required
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="text-sm text-destructive mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Nachname <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Mustermann"
                      className={`w-full ${errors.lastName ? "border-destructive" : ""}`}
                      required
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="text-sm text-destructive mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-Mail <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="max@beispiel.de"
                    className={`w-full ${errors.email ? "border-destructive" : ""}`}
                    required
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefon <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0123 456 789"
                    className={`w-full ${errors.phone ? "border-destructive" : ""}`}
                    required
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-sm text-destructive mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Ihre Nachricht <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Wie können wir Ihnen helfen?"
                    className={`w-full min-h-[150px] ${errors.message ? "border-destructive" : ""}`}
                    required
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Wird gesendet...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" aria-hidden="true" />
                      Nachricht senden
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl border border-border bg-card shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Kontaktinformationen</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Adresse</p>
                      <address className="text-muted-foreground not-italic">
                        Musterstraße 123<br />
                        12345 Musterstadt<br />
                        Deutschland
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Telefon</p>
                      <a
                        href="tel:+49123456789"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        0123 456 789
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mo-Fr: 08:00 - 18:00 Uhr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">E-Mail</p>
                      <a
                        href="mailto:info@physiovio.de"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        info@physiovio.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="p-8 rounded-2xl border border-border bg-muted/30 h-64 flex items-center justify-center" role="img" aria-label="Kartenbereich - Integration folgt">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-secondary mx-auto mb-3" aria-hidden="true" />
                  <p className="text-muted-foreground">
                    Kartenintegration kommt hier hin
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-6 rounded-2xl gradient-soft border border-border">
                <h3 className="font-semibold mb-2">Anfahrt</h3>
                <p className="text-sm text-muted-foreground">
                  Kostenlose Parkplätze direkt vor der Praxis. Mit öffentlichen
                  Verkehrsmitteln: Bus 123 & 456, Haltestelle "Musterplatz"
                </p>
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

export default Contact;
