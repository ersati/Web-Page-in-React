import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Geraniums",
    author: " Beverley Nichols, Merry Hall",
    text:
      "“Long experience has taught me that people who do not like geraniums have something morally unsound about them. Sooner or later you will find them out; you will discover that they drink, or steal books, or speak sharply to cats. Never trust a man or a woman who is not passionately devoted to geraniums.”"
  },
  {
    id: 2,
    title: "Roses",
    author: "H.L. Mencken, A Book of Burlesques",
    text:
      "“An idealist is one who, on noticing that a rose smells better than a cabbage, concludes that it makes a better soup.”"
  },
  {
    id: 3,
    title: "Tulips",
    author: "Marianne Williamson",
    text:
      "“A tulip doesn’t strive to impress anyone. It doesn’t struggle to be different than a rose. It doesn’t have to. It is different. And there’s room in the garden for every flower. You didn’t have to struggle to make your face different than anyone else’s on earth. It just is. You are unique because you were created that way. Look at little children in kindergarten. They’re all different without trying to be. As long as they’re unselfconsciously being themselves, they can’t help but shine. It’s only later, when children are taught to compete, to strive to be better than others, that their natural light becomes distorted.”"
  },
  {
    id: 4,
    title: "Daisy",
    author: "Maryam Faresh, Daisy",
    text: `“You can't be sad when Daisy is around, she won't let you.”`
  }
];

const HomePage = () => {
  // const artList = articles.map(article => (
  //     <article className='home' key={article.id}>
  //         <h3>{article.title}</h3>
  //         <span>{article.author}</span>
  //         <div>{article.text}</div>
  //     </article>
  // )
  // )

  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <>{artList} </>;
};

export default HomePage;
