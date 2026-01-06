export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[var(--muted)] text-[var(--foreground)]"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Who We Are
            </h2>

            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-6">
              <strong className="text-[var(--foreground)]">Lightzone</strong> is
              a professional import and distribution company delivering premium
              dairy products and beverages to local markets through reliable,
              efficient supply chains.
            </p>

            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
              We partner with globally recognized brands to ensure consistent
              quality, dependable availability, and long-term value for our
              customers.
            </p>
          </div>

          {/* RIGHT: STATS */}
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-[var(--background)] rounded-2xl shadow-sm">
              <p className="text-4xl font-bold">12+</p>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">
                Years of Excellence
              </p>
            </div>

            <div className="p-6 bg-[var(--background)] rounded-2xl shadow-sm">
              <p className="text-4xl font-bold">1,000+</p>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">
                Retail & Business Partners
              </p>
            </div>

            <div className="p-6 bg-[var(--background)] rounded-2xl shadow-sm">
              <p className="text-4xl font-bold">Nationwide</p>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">
                Distribution Coverage
              </p>
            </div>

            <div className="p-6 bg-[var(--background)] rounded-2xl shadow-sm">
              <p className="text-4xl font-bold">Premium</p>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">
                International Brands
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}