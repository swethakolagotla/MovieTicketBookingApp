import Movie from "../models/movieModel.js";
import { cleanUp } from "../utils/common.js";
 import AdvancedFiltering from "../utils/advancedFilteringFunction.js";
 
const getData = async (req, res) => {
   const queryStringFinal = new AdvancedFiltering(req.query, Movie.find())
    .find()
    .sort()
    .pagination()
    .fields();

  const data = await queryStringFinal.queryString;

  const totalCount = await Movie.find().count();

  res.json({
    status: "success",
    length: data.length,
    totalCount,
    data,
  });
};
 
const getDatabyId = async (req, res) => {
  try {
    const data = await Movie.findById(req.params.id);
    
    res.json({
      status: "success",
      data,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.message,
    });
  }
};
 
 
export {  getData, getDatabyId };
