import ResultsTemplate from "@/components/UI/templates/ResultsTemplate";

interface IParamsProps {
  searchParams: {
    query?: string;
    page?: string;
  };
}

export default async function ResultsPage({ searchParams }: IParamsProps) {
  const { query } = await searchParams;
  const page = searchParams.page ? Number(searchParams.page) : 1;
  if (!query) {
    return <p className="text-center text-gray-500 mt-10">Ingresa un término de búsqueda.</p>;
  }

  const response = await fetch(`${process.env.BASE_URL}/api/search?query=${query}?page=${page}`);
  const data = await response.json();

  return <ResultsTemplate dataGallery={data} />;
}
