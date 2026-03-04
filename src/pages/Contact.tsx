import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";

export default function Contact() {
  return (
    <main className="w-full mx-auto px-6 py-16 space-y-20">

      {/* Intro Section */}
      <section className="w-full mx-auto relative text-center space-y-6">
        {/* Animated wrapper */}
        <div
          className="relative opacity-0 animate-fade-in-up"
          style={{
            animationDuration: "0.35s",
            animationFillMode: "forwards",
            willChange: "opacity, transform",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={profile}
            alt="Lauren Sickles"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover mt-2"
          />
          <h1 className="text-5xl font-serif font-semibold mt-10">
            Lets get in touch
          </h1>
          <p className="text-lg text-foreground leading-relaxed">
            If you are interested in collaboration, publication, or thoughtful conversation,
            I welcome your message.
          </p>
          <p className="text-foreground/70 text-base">
            I aim to respond within a few business days.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto relative rounded-xl p-8 md:p-12">
        {/* Stable background */}
        <div className="absolute inset-0 rounded-xl bg-card/40" />
        {/* Animated content */}
        <div
          className="relative opacity-0 animate-fade-in-up"
          style={{
            animationDelay: "0.15s",
            animationDuration: "0.35s",
            animationFillMode: "forwards",
            willChange: "opacity, transform",
            backfaceVisibility: "hidden",
          }}
        >
          <form className="space-y-8">
            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition
                placeholder-transparent md:placeholder-foreground/60"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition
                placeholder-transparent md:placeholder-foreground/60"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition resize-none
                      placeholder-transparent md:placeholder-foreground/60"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                className="px-10 py-6 text-lg font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors duration-300"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Alternative Contact Note */}
      <section className="max-w-2xl mx-auto relative text-center space-y-4">
        {/* Animated wrapper */}
        <div
          className="relative opacity-0 animate-fade-in-up"
          style={{
            animationDelay: "0.3s",
            animationDuration: "0.35s",
            animationFillMode: "forwards",
            willChange: "opacity, transform",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-foreground text-base">Prefer email directly?</p>
          <p className="text-primary font-medium">hello@laurensickles.com</p>
        </div>
      </section>

    </main>
  );
}