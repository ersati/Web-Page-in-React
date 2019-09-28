import React from 'react'
import Article from '../components/Article'


const articles = [
    {
        id: 1,
        title: 'Home sweet Home',
        author: ' Zbigniew Zamachowski',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae alias nostrum id ratione, necessitatibus voluptatem perspiciatis ullam obcaecati architecto unde repellendus iure tempore nihil consequatur recusandae consequuntur error numquam deleniti. '
    },
    {
        id: 2,
        title: 'How is outside',
        author: ' Julian Mach',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae alias nostrum id ratione, necessitatibus voluptatem perspiciatis ullam obcaecati architecto unde repellendus iure tempore nihil consequatur recusandae consequuntur error numquam deleniti. '
    },
    {
        id: 3,
        title: 'From street to a Mansion',
        author: ' Władymir Kier',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae alias nostrum id ratione, necessitatibus voluptatem perspiciatis ullam obcaecati architecto unde repellendus iure tempore nihil consequatur recusandae consequuntur error numquam deleniti. '
    },
    {
        id: 4,
        title: 'DIY',
        author: ' Kamil Plam',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae alias nostrum id ratione, necessitatibus voluptatem perspiciatis ullam obcaecati architecto unde repellendus iure tempore nihil consequatur recusandae consequuntur error numquam deleniti. '
    },
]

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
        <Article key={article.id} {...article}/>
    ))
    return (
    <>
    {artList}
    </>  );
}
 
export default HomePage;