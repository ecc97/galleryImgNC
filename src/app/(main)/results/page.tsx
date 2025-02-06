import ResultsTemplate from "@/components/UI/templates/ResultsTemplate";

interface IParamsProps {
  searchParams: {
    query?: string;
  };
}

export default async function ResultsPage({ searchParams }: IParamsProps) {
  const { query } = searchParams;
  if (!query) {
    return <p className="text-center text-gray-500 mt-10">Ingresa un término de búsqueda.</p>;
  }

  const response = await fetch(`${process.env.BASE_URL}/api/pexels?query=${query}`);
  const data = await response.json();

  return <ResultsTemplate dataGallery={data} />;
}
