import { Link } from "react-router-dom";

const ArticleLink = (article) => {
  return (
    <Link to= {`/article/${article.article.id}`}>
      <article className="article-link">
        <h3>{article.article.data.title[0].text}</h3>
        <img
          src={article.article.data.thumbnail_image.url}
          alt={article.article.data.thumbnail_image.alt}
          className="article-link-image"
        />
        <p className="article-link-description">
          {article.article.data.description[0].text}
        </p>
      </article>
    </Link>
  );
};

export default ArticleLink;
