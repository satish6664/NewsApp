export default function News(props){
    return  <div className="news-article">
        <div className="Img">
            <img src={props.article.urlToImage}/>
        </div>
        <h2>{props.article.title}</h2>
        <p>{props.article.description?.substring(0,100).concat("...")} <a href={props.article.url} target="_blank">Read more</a></p>
        <div className="Source">
            <p>Author: {props.article.author}</p>
            <p>{props.article.source.name}</p>
        </div>
    </div>
   ;
}