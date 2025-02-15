import Header from "@/components/UI/organisms/header/Header";
import Navbar from "@/components/UI/organisms/navbar/Navbar";
import Hero from "@/components/UI/organisms/hero/Hero";
import GalleryTemplate from "@/components/UI/templates/GalleryTemplate";


type SearchParams = Promise<{ page?: string }>;
// interface IParamsProps {
//   searchParams: {
//     page?: string;
//   };
// }

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const page = params.page ? Number(params.page) : 1;
  const response = await fetch(`${process.env.BASE_URL}/api/curated?page=${page}`);
  const data = await response.json();

  return (
    <>
      <Header>
        <Navbar />
        <Hero />
      </Header>
      <GalleryTemplate dataGallery={data} currentPage={page} />
    </>
  );
}
