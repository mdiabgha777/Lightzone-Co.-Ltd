import { Mail, Phone, MapPin } from "lucide-react";

export default function About() {
    return(
        <section id="contact"className="py-20 bg-[var(--accent-foreground)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Get in Touch</h2>
                    <p className="text-[var(--muted-foreground)] text-lg">
                        We'd love to hear from you!
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center p-6 rounded-lg bg-[var(--card)] hover:shadow-lg transition-shadow animate-fade-in">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-6 h-6 text-[var(--primary-foreground)]" />
                        </div>
                        <h3 className="font-semibold mb-2 text-[var(--foreground)]">Email Us</h3>
                        <p className="text-[var(--muted-foreground)]">info@lightzone.com</p>
                    </div>
                    
                    <div className="text-center p-6 rounded-lg bg-[var(--card)] hover:shadow-lg transition-shadow animate-fade-in">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-6 h-6 text-[var(--primary-foreground)]" />
                        </div>
                        <h3 className="font-semibold mb-2 text-[var(--foreground)]">Call Us</h3>
                        <p className="text-[var(--muted-foreground)]">+220 7999635</p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-[var(--card)] hover:shadow-lg transition-shadow animate-fade-in">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-6 h-6 text-[var(--primary-foreground)]" />
                        </div>
                        <h3 className="font-semibold mb-2 text-[var(--foreground)]">Visit Us</h3>
                        <p className="text-[var(--muted-foreground)]">Kairaba Avenue</p>
                        <p className="text-[var(--muted-foreground)]">G.N.I.C Building</p>
                    </div>
                </div>
            </div>
        </section>
    )
}