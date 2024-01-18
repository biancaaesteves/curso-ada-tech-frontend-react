import React from "react";
import './styles.css';

/*
this.props = {
    title="Designing Dashboards"
}


*/
export function Article ({ title, provider, description, thumbnail, link }) {
        return (
            <article id="article">
                <img src={thumbnail} alt={title} />
            
                <div className="article-infos">
                    <h2>{title}</h2>
                    <h3>{provider}</h3>
                    <p>{description}</p>
                    <p>Leia a notícia completa:</p>
                    <p>{link}</p>
                </div>
            </article>
        )
    }

