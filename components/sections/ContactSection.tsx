import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-8 relative z-10"
    >
      <header className="space-y-2 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Get in touch
        </h2>
        <p className="text-base italic text-cyan-300/80">
          drop me a line — I read every message
        </p>
      </header>

      <ContactForm />
    </section>
  );
}
