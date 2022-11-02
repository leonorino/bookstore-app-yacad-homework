import { BookGallery } from "./pages/BookGallery/BookGallery";
import { Layout } from "./components/Layout/Layout";
import * as mockData from "./constants/mock";
import { BookDetails } from "./pages/BookDetails/BookDetails";

export const App = () => {
  const book = mockData.books[3];
  return <Layout>
    {/* <BookGallery data={mockData}/> */}
    <BookDetails book={book}/>
  </Layout>;
}
