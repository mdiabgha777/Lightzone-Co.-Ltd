export default function About() {
  return (
    <section id="about"className="py-20 bg-[var(--muted)] text-[var(--foreground)]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>

        <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-6">
          Lightzone is a trusted import and distribution company specializing in
          premium dairy products and beverages. We proudly partner with
          internationally recognized brands such as <strong>Lurpak</strong>,{" "}
          <strong>Peak</strong>, and <strong>Arla</strong> to deliver
          world-class quality to local markets.
        </p>

        <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
          Our commitment to excellence ensures that every product we distribute
          meets the highest quality standards — providing our customers with
          reliable, premium options for their homes and businesses.
        </p>
      </div>
    </section>
  );
}