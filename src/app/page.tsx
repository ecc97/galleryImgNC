import Image from "next/image";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/api/pexels`);
  const data = await response.json();
  const images = data.photos;
  console.log(images)
  return (
    <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Galería de Imágenes</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img: any) => (
                    <div key={img.id} className="relative w-full h-60">
                        <Image src={img.src.medium} alt={img.photographer} layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                ))}
            </div>
        </main>
  );
}
