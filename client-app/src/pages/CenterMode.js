import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
    {
    name:"photo1",
        url: "https://images.unsplash.com/photo-1595979805928-c8bac9684486?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
        name:"photo2",
        url: "https://images.unsplash.com/photo-1612993232871-47e86e7de1f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
        name:"photo3",
        url: "https://images.unsplash.com/photo-1612814399449-d62fc71234c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
        name:"photo4",
        url: "https://images.unsplash.com/photo-1613078676786-000bd2619d5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
        name:"photo5",
        url: "https://images.unsplash.com/photo-1613114016704-e573188468a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
        name:"photo6",
        url: "https://images.unsplash.com/photo-1613114016545-8352ff5b8d9c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
        name:"photo7",
        url: "https://images.unsplash.com/photo-1613144123668-d9c705841eba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
        name:"photo8",
        url: "https://images.unsplash.com/photo-1612703508477-00e02a9b170c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=662&q=80",
    },
    {
        name:"photo9",
        url: "https://images.unsplash.com/photo-1613026468322-c1b22cd40fca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },

]

export default class CenterMode extends Component {

    render() {
        const settings = {
            className: "center__slider",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
                <Slider {...settings}>
                    {photos.map((photos) => {
                        return (
                            <div>
                                <img width="100%"  height="640" src={photos.url}/>
                            </div>
                        )
                    })}
                </Slider>

        );
    }
}