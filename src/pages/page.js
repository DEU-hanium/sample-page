import { Link, useParams } from "react-router-dom";

function Page() {
  const { page } = useParams();
  const currentPage = parseInt(page);

  return (
    <div>
      <h1>Page {currentPage}</h1>
      {currentPage > 1 && <Link to={`/${currentPage - 1}`}>Previous Page</Link>}
      <Link to={`/${currentPage + 1}`}>Next Page</Link>
    </div>
  );
}

export default Page;
