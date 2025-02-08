import ResultsTemplate from "@/components/UI/templates/ResultsTemplate";

interface IParamsProps {
  searchParams: {
    query?: string;
    page?: string;
  };
}

export default async function ResultsPage({ searchParams }: IParamsProps) {
  const params = await searchParams;
  const { query } = params;
  const page = params.page ? Number(params.page) : 1;
  if (!query) {
    return <p className="text-center text-gray-500 mt-10">Ingresa un término de búsqueda.</p>;
  }

  const response = await fetch(`${process.env.BASE_URL}/api/search?page=${page}&query=${query}`);
  const data = await response.json();
  console.log(data)

  return <ResultsTemplate dataGallery={data} />;
}
