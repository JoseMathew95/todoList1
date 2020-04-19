const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

const items = ["Buy Grocery", "Cook fish", "Cook some rice"];
const workItems = [];

app.get("/", function(req,res){
  const day = date.getDay();
  res.render("lists",{ListTitle:day, newListItems:items});
})

app.post("/", function(req,resp){
  const item = req.body.newItem;
  const listName = req.body.addButton;

  if(listName === "Work"){
    workItems.push(item);
    resp.redirect("/work");
  }else{
    items.push(item);
    resp.redirect("/");
  }
})

app.get("/work", function(req, resp){
  resp.render("lists",{ListTitle:"Work", newListItems:workItems});
})

app.get("/about", function(req, resp){
  resp.render("about");
})

app.listen(3000,function(){
  console.log("Server started on port 3000..");
})
