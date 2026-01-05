import Image from "next/image";

interface CardProps {
  image: string;
  name: string;
  description: string;
}

export default function Card({ image, name, description }: CardProps) {
  return (
    <div className="bg-[var(--card)] rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
      {/* Image Section */}
      <div className="w-full h-56 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={300}
          height={200}
          className="object-contain w-auto h-48"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-[var(--accent)] mb-2">{name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}