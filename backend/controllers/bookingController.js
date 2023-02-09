import Book from "../models/bookModel.js";
 
const postData = (req, res) => {
  const { date, time,seats,amount } = req.body;
  const bookItem = new Book({
    date,
    time,
    seats,
    amount
  });
 bookItem.save()
    .then((data) => {
      console.log(data);
      res.status(201).json({
        status: "success",
        message: "successfully added",
      });
    })
    .catch((err) => {
      console.log(err, "Error");
    });
};


export {postData };
