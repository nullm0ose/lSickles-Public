import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [cooldown, setCooldown] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isValid, setIsValid] = useState(false);

  const MAX_MESSAGE_LENGTH = 1500;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    setIsValid(
      name.trim() !== "" &&
      emailRegex.test(email) &&
      message.trim() !== "" &&
      message.length <= MAX_MESSAGE_LENGTH
    );
  }, [name, email, message]);

  const sendEmail = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!form.current || cooldown || !isValid) return;

    const botcheck = form.current.elements.namedItem("botcheck") as HTMLInputElement | null;
    if (botcheck?.value) return;

    setSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC
      );

      setStatus("success");
      form.current.reset();
      setName("");
      setEmail("");
      setMessage("");

      setCooldown(true);
      setTimeout(() => setCooldown(false), 30000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setSending(false);
  };

  return (
    <main className="w-full mx-auto px-6 py-16 space-y-20">
      {/* Intro Section */}
      <section className="w-full mx-auto relative text-center space-y-6">
        <div className="relative opacity-0 animate-fade-in-up"
          style={{ animationDuration: "0.35s", animationFillMode: "forwards", willChange: "opacity, transform", backfaceVisibility: "hidden" }}
        >
          <img src={profile} alt="Lauren Sickles" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover mt-2" />
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-pro leading-snug tracking-tight text-foreground/95 mt-13 text-center font-medium">
            Let’s Get in Touch
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-center max-w-prose mx-auto">
            If you’re interested in collaboration, publication, or simply a thoughtful conversation, I’d love to hear from you.
          </p>
          <p className="mt-2 text-base leading-relaxed text-foreground/70 text-center max-w-prose mx-auto">
            I usually respond within a few business days.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto relative rounded-xl p-6 md:p-12">
        <div className="absolute inset-0 rounded-xl bg-card/40" />
        <div className="relative opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.15s", animationDuration: "0.35s", animationFillMode: "forwards", willChange: "opacity, transform", backfaceVisibility: "hidden" }}
        >
          <form ref={form} onSubmit={sendEmail as any} className="space-y-8">
            {/* Honeypot */}
            <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition placeholder-transparent md:placeholder-foreground/60"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition placeholder-transparent md:placeholder-foreground/60"
              />
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-foreground">Message</label>
              <textarea
                name="message"
                rows={6}
                required
                value={message}
                maxLength={MAX_MESSAGE_LENGTH}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition resize-none placeholder-transparent md:placeholder-foreground/60"
              />
              <p className="text-xs text-muted-foreground text-right">
                {message.length}/{MAX_MESSAGE_LENGTH}
              </p>
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={sending || cooldown || !isValid}
                className="px-10 py-6 text-lg font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors duration-300 disabled:opacity-60"
              >
                {sending ? "Sending..." : cooldown ? "Please wait..." : "Send Message"}
              </Button>
              {status === "success" && cooldown && (
                <p className="text-green-600 text-sm mt-4">Your message was sent successfully!</p>
              )}
              {status === "error" && cooldown && (
                <p className="text-red-600 text-sm mt-4">Something went wrong. Please try again later.</p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Alternative Contact Note */}
      <section className="max-w-2xl mx-auto relative text-center space-y-4">
        <div className="relative opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationDuration: "0.35s", animationFillMode: "forwards", willChange: "opacity, transform", backfaceVisibility: "hidden" }}
        >
          <p className="text-foreground text-base">Prefer email directly?</p>
          <p className="text-primary font-medium">hello@laurensickles.com</p>
        </div>
      </section>
    </main>
  );
}