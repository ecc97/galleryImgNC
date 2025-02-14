import Header from "@/components/UI/organisms/header/Header";
import Navbar from "@/components/UI/organisms/navbar/Navbar";
import Hero from "@/components/UI/organisms/hero/Hero";
import GalleryTemplate from "@/components/UI/templates/GalleryTemplate";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const pageNumber = searchParams.page ? Number(searchParams.page) : 1;
  const response = await fetch(`${process.env.BASE_URL}/api/curated?page=${pageNumber}`);
  const data = await response.json();

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
