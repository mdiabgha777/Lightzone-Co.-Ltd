import React from 'react';
import Card from './ui/Card';
import {products} from '../Data/products';
export default function Products() {
    return(
        <section id="products" className="py-20 bg-[var(--primary-foreground)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Our Products</h2>
                    {/* <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">Explore our range of quality products.</p> */}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {products.map((item) => (
                        <Card 
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}