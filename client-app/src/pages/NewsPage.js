import React from 'react'
import {NavigationBar} from "./NavigationBar";
import {useState,useEffect} from "react";



export function Article(props) {
    const {article} = props
    console.log(props)

    const [isOpen,setIsOpen] = useState(props.defaultOpen);
    const body = isOpen && <section className="card-text">{article.text}</section>
    function handleClick(){
        setIsOpen(!isOpen)
        console.log('clicked')
    }
    useEffect(() =>{
        console.log('---', 'mounting')
    })
    useEffect(() =>{
        console.log('---', 'mounting')
    })
    return (
        <div className="card">
                <div className="card-header">
                    <h2>
                        {article.title}
                    <button className="btn btn-primary btn-lg float-end" onClick={handleClick}>{ isOpen ? 'close' : 'open'}</button>
                    </h2>
                </div>
            <div className="card-body">
                <h6 className="card-subtitle text-muted"> Creation date: {(new Date(article.date)).toDateString()}</h6>
                {body}
            </div>
        </div>
    )
}


export default Article;