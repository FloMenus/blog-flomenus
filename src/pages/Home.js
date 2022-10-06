import { useAllPrismicDocumentsByType } from "@prismicio/react";

import ArticleLink from "../components/ArticleLink";


const Home = () => {
  const [articles] = useAllPrismicDocumentsByType('article');
  return (
    <div>
        <h1>Home</h1>
        {articles && (
            <section className="article-wrapper">
                {articles.map((article) => (
                    <ArticleLink key={article.id} article={article} />
                ))}
            </section>
        )}
    </div>
  );
};

export default Home;
