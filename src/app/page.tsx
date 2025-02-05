import Header from "@/components/UI/organisms/header/Header";
import Navbar from "@/components/UI/organisms/navbar/Navbar";
import Hero from "@/components/UI/organisms/hero/Hero";
import GalleryTemplate from "@/components/UI/templates/GalleryTemplate";

interface IParamsProps {
  searchParams: {
    query?: string;
    page?: string;
  }
}

export default async function Home({ searchParams }: IParamsProps) {
  const { query } = await searchParams;
  const finalQuery = query || "popular";
  const response = await fetch(`${process.env.BASE_URL}/api/pexels?query=${finalQuery}`);
  const data = await response.json();
  console.log(data)

  return (
    <>
      <Header>
        <Navbar />
        <Hero />
      </Header>
      <GalleryTemplate dataGallery={data} />
    </>
  );
}
