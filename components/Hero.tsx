'use client';
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";

export default function Hero(){

    const ScrollToView = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section id="home" className="hero-gradient pt-24 pb-16 md:pt-32 md:pb-24 text-[var(--primary-foreground)] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
                    <h2 className="text-5xl font-bold leading-tight">
                        Premium Quality Products, Delivered Locally
                    </h2>
                    <p className="text-lg opacity-90">
                        Lightzone is your trusted partner for importing and distributing premium international brands. 
                        We bring world-class dairy products and beverages directly to your doorstep.
                    </p>
                </div>
                <div className="flex gap-4 justify-center">
                    <Button
                        variant="secondary"
                        size="md"
                        className="bg-[var(--card)] text-[var(--primary)] mt-8 gap-3 cursor-pointer"
                        onClick={() => ScrollToView('products')}
                    >
                        Explore Products
                        <ArrowRight size={18} />
                    </Button>
                    <Button
                        variant="outline"
                        size="md"
                        className="mt-8 gap-3 
                        text-[var(--primary-foreground)] hover:bg-[var(--card)] hover:text-[var(--primary)] cursor-pointer"
                        onClick={() => ScrollToView('products')}
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    )
}