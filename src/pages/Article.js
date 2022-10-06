import { useParams } from "react-router-dom";
import { usePrismicDocumentByID } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

const Article = ({ slice }) => {
  const { id } = useParams();
  const [article] = usePrismicDocumentByID(`${id}`);
  return (
    <>
      {article && (
        <div className="article-page">
          {console.log(article)}
          <h1>{article.data.title[0].text}</h1>
          <img
            src={article.data.thumbnail_image.url}
            alt={article.data.thumbnail_image.alt}
            className="article-page-image"
          />
          <p className="article-page-description">
            {article.data.description[0].text}
          </p>
          <PrismicRichText field={article.data.content}  />
      
        </div>
      )}
    </>
  );
};

export default Article;
