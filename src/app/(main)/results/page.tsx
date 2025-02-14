import ResultsTemplate from "@/components/UI/templates/ResultsTemplate";

interface SearchParams {
  query?: string;
  page?: string;
  color?: string;
  orientation?: string;
  size?: string;
}

interface IParamsProps {
  searchParams?: SearchParams;
}

export default async function ResultsPage({ searchParams = {} }: IParamsProps) {
  const { query, color, orientation, size } = searchParams;
  const page = searchParams.page ? Number(searchParams.page) : 1;

  if (!query) {
    return <p className="text-center text-gray-500 mt-10">Ingresa un término de búsqueda.</p>;
  }

  const searchParamsString = new URLSearchParams({
    page: page.toString(),
    query,
    ...(color && { color }),
    ...(orientation && { orientation }),
    ...(size && { size }),
  }).toString();

  const response = await fetch(`${process.env.BASE_URL}/api/search?${searchParamsString}`);
  const data = await response.json();

  return <ResultsTemplate dataGallery={data} />;
}
