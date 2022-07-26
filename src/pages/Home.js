import React from 'react'
import {Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Home.css'

const Home = () => {
  const {data:articles, isPending, error} = useFetch('http://localhost:3000/articles')
  return (
    <section className="container">
    <h1>Articles</h1>
    <div className = "home">
     {/* <h2>Articles</h2> */}
     {isPending && <div> Loading...</div>}
     {error && <div>{error}</div>}
     {articles && articles.map((article) => (
      <div className="card" key={article.id}>
        <h2>{article.title}</h2>
        <h4> - By {article.author}</h4>
        <Link to={`/articles/${article.id}`}>Read more...</Link>
      </div>
     ))}
    </div>
    </section>
  )
}

export default Home