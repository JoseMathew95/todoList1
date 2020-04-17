const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req,res){


  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0: day = "weekEnd";
      break;
    case 1: day = "WeekDay";
      break;
    case 2: day = "WeekDay";
      break;
    case 3: day = "WeekDay";
      break;
    case 4: day = "WeekDay";
      break;
    case 5: day = "WeekDay";
      break;
    case 6: day = "weekEnd";
      break;
    default: console.log("unknown day..");

  }

  res.render("lists",{kindOfDay:day});
})

app.listen(3000,function(){
  console.log("Server started on port 3000..");
})
