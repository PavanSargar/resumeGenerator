const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static("public"));


app.get("/", function(req, res) {
  res.render("resume");

});

app.post("/", function(req, res) {
  const data = req.body;
  const image = data.imageURL;
  const name = data.fullName;
  const email = data.emailId;
  const address = data.userAddress;
  const mobileNum = data.mobileNum;
  const summary = data.summaryPara;
  const linkedin = data.linkedinURL;
  
  //skill Items Separated with Comma
  const newSkillItem = req.body.skillItems;
  const sepSkillItems = newSkillItem.split(",");

  //hobby Items Separated with Comma
  const hobby = data.newHobbyItems;
  const sepHobby = hobby.split(",");

  //langKnown Items Separated with Comma
  const languages = data.langKnown;
  const sepLang = languages.split(",");

  //Academic Qualifications Sparated with Comma
  const education = data.educationList;
  const sepEducation = education.split(",");

  //Employment History Separated with Comma
  const empHistory = data.employmentHistory;
  const sepEmpHistory = empHistory.split(",");
   
  res.render("template", {
    number: mobileNum,
    imageURL: image,
    fullName: name,
    emailId: email,
    userAddress: address,
    summaryPara: summary,
    skillsList: sepSkillItems,
    hobbyList: sepHobby,
    langList: sepLang,
    educationList: sepEducation,
    empHistory: sepEmpHistory,
    linkedinURL: linkedin
 });

});






app.listen(process.env.PORT || 3000, function() {
  console.log("server running of port: 3000");
});
