import Header from "@/components/UI/organisms/header/Header";
import Navbar from "@/components/UI/organisms/navbar/Navbar";
import Hero from "@/components/UI/organisms/hero/Hero";
import GalleryTemplate from "@/components/UI/templates/GalleryTemplate";

interface IParamsProps {
  searchParams: {
    page?: string;
  }
}

export default async function Home({ searchParams }: IParamsProps) {
  const { page } = searchParams;
  const pageNumber = page ? Number(page) : 1;
  const response = await fetch(`${process.env.BASE_URL}/api/curated?page=${pageNumber}`);
  const data = await response.json();
  // console.log(data)

  return (
    <>
      <Header>
        <Navbar />
        <Hero />
      </Header>
      <GalleryTemplate dataGallery={data} currentPage={pageNumber} />
    </>
  );
}
