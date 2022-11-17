import React, { Fragment } from 'react';
import '../styles/article.css';

const Article = ({posts, search}) =>{
    const changeDate = (date) =>{
        const newDate = new Date(date);
        return newDate.toDateString();
    } 
    return(
        <>
            <div id="news-container">
            {posts.filter((s) =>{
                    return search && search.length > 2 ? s.title.match(new RegExp(search, "gi")): s
                })
                .map((post) => {
                return (
                    <article className="news-article" key={post.objectID}>
                        <div className="article-row1">
                            <h5>{post.title}</h5>
                        </div>
                        <div className="article-row2">
                            <p> <a href={post.url}>Read More...</a></p> 
                        </div>
                        <div className='article-row3'>
                        <p><i className="far fa-calendar-alt"></i> : {changeDate(post.created_at)}</p>
                        <p><i className="fas fa-user-shield"></i> : {post.author}</p>
                        </div>
                    </article>
                );
                })}
            </div>
        </>
    );                                        
}

export default Article;