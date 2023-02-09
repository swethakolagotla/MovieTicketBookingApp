import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  getAllmovies, thunkGet } from "../Redux/Thunk";
import { Link } from "react-router-dom";
const Movies = (props) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) =>  state.movieSlicer.movies);
  console.log(movies);
  useEffect(() => {
    dispatch(getAllmovies());
  }, []);
  return (
    <>
    
      <div className="row row-cols-4">
        
        {movies.map((ele,id) => (
        <div  key={id}className="card col-2 mx-auto" >
          <img
            width={"140px"}
            height={"220px"}
            src={ele.Poster}
            className="card-img-top"
            alt="..."
          /> 
          <div className="card-body">
            <h5 className="card-title">{ele.Title}</h5>
            <h6 className="card-title">
              { ele.Year} By&nbsp;{ ele.Director}{" "}
            </h6>
            <p className="card-title">
           { ele.Actors}
            </p>
           
            <Link to={`/movielist/${ele._id }`} className="btn btn-primary">
                GoTo Booking
            </Link>
          </div>
        </div>
        ))}
      </div>
    </>
  );
};
export default Movies;
