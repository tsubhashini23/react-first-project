import logo from './logo.svg';
import './App.css';
import React from 'react';
import BlogCard from './BlogCard';

function App() {

  /*const firstName = 'Ajay';
  const lastName = 'Madhusudhan';*/


 /* const blogObj = 
  {
    title : 'My Family',
    description: 'This is my Family.Meet my family',
    title1: 'My School',
    description1: 'This is my school.Visit my school',
    title2 : 'My Home',
    description2: 'This is my home. Meet my neighbours'
  }
  
  
   /*<div>
      <h1> {getFullName(firstName, lastName)} </h1>
      </div>

        <div className="blogCard">  
        <h3> {blogObj.title} </h3>
        <p> {blogObj.description} </p>
        </div>

        <div className="blogCard">  
        <h3> {blogObj.title1} </h3>
        <p> {blogObj.description1} </p>
        </div>

        <div className="blogCard">  
        <h3> {blogObj.title2} </h3>
        <p> {blogObj.description2} </p>
        </div>
        
        */

  const objArray =
   [
    {
      id: 1,
      title : 'My Family',
      description: 'This is my Family.Meet my family'
    }
    ,
    {     
      id: 2,
      title: 'My School',
    description: 'This is my school.Visit my school'}
    ,
    {
      id: 3,
      title: 'My Home',
    description: 'This is my home. Meet my neighbours'
    }

  ]

  const blogCards = objArray.map((item,pos) => 
  {

   return(

    <BlogCard className = {'Blog'} key = {pos} title = {item.title} description = {item.description} />
       
    /*<div>

    <div className="blogCard" key = {item.id}>  
    <h3> {item.title} </h3>
    <p> {item.description} </p>
    </div>


    </div>*/

   );
      
    }
  
  )
  
  return (
    <div className="App">

      {blogCards}
        
        </div>

  );

}

export default App;
