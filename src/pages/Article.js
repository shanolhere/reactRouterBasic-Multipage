import React, { useEffect } from "react";
import { useParams,useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import './Home.css'

const Article = () => {
  //const params = useParams();
  const {idhere} = useParams() 
  //-- object destructuring
  //console.log(params)
  const url = "http://localhost:3000/articles/" + idhere;
  //console.log(url)

  const { data: article, isPending, error } = useFetch(url);
  const history = useHistory()
  
  useEffect(()=> {
    if(error){
        //redirect
        //history.goBack()
        setTimeout(() => {
            history.push('/')
        },2000)
    }
  },[error,history])

  return (
    <div>
      {isPending && <div>loading...</div>}
      {error && <div> {error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <h4> By {article.author}</h4>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};

export default Article;
