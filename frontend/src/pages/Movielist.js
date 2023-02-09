import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import './Movielist.css';
import { useParams } from "react-router-dom";
 
const Movielist = (props) => {
  let { id } = useParams();
  const [data, setdata] = useState({});

  useEffect(() => {
    const getdata = () => {
      axios(`http://localhost:4000/movies/${id}`).then((response) => {
        console.log(response.data.data);
        setdata(response.data.data);
      });
    };
    getdata();
  }, []);

  return (
    <>
      <Header />
      <div className=" data-container">
        <div className="image-container">
          <img className="image" src={data.Poster} />
        </div>
        <div className="Rightdata">
          <h3 >{data.Title}</h3>
          <p>
            <span><b>Released: </b></span>
            {data.Released}
          </p>
          <p>
            <span><b>Rated:</b> </span>
            {data.Rated}
          </p>
          <p>
            <span><b>Genre: </b></span>
            {data.Genre}
          </p>
          <p>
            <span>Runtime: </span>
            {data.Runtime}
          </p>
          <p>
            <span>Cast: </span>
            {data.Actors}
          </p>
          <p>
            <span>Director: </span>
            {data.Director}
          </p>
          <p>
            <span>Writer: </span>
            {data.Writer}
          </p>
          <p>
            <span>Plot: </span>
            {data.Plot}
          </p>

          <Link to="/booking" className="btn btn-primary">
            Book Seats
          </Link>
        </div>
      </div>
    </>
  );
};

export default Movielist;
