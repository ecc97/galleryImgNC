import ResultsTemplate from "@/components/UI/templates/ResultsTemplate";
type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 
// interface IParamsProps {
//   searchParams: {
//     query?: string;
//     page?: string;
//     color?: string;
//     orientation?: string;
//     size?: string;
//   };
// }

export default async function ResultsPage(props: {params: Params, searchParams: SearchParams}) {
  // const params = await searchParams;
  // const { query, color, orientation, size } = params;
  // const page = params.page ? Number(params.page) : 1;
  const searchParams = await props.searchParams
  const { query, color, orientation, size, page } = searchParams;

  const queryString = Array.isArray(query) ? query[0] : query;

  if (!queryString) {
    return <p className="text-center text-gray-500 mt-10">Ingresa un término de búsqueda.</p>;
  }
  
  const currentPage = page ? parseInt(page as string, 10) : 1;

  const searchParamsString = new URLSearchParams({
    page: currentPage.toString(),
    query: queryString as string,
    ...(color && { color: Array.isArray(color) ? color[0] : color }),
    ...(orientation && { orientation: Array.isArray(orientation) ? orientation[0] : orientation }),
    ...(size && { size: Array.isArray(size) ? size[0] : size }),
  }).toString();

  const response = await fetch(`${process.env.BASE_URL}/api/search?${searchParamsString}`);
  const data = await response.json();

  return <ResultsTemplate dataGallery={data} />;
}
