import React from 'react';

const BlogCard = (props) =>
{

console.log(props);

    return  ( 
    <div className="blogCard">  
    <h3> {props.title} </h3>
    <p> { props.className} </p>
    <p> {props.description} </p>
    </div>
    )
}

export default BlogCard;