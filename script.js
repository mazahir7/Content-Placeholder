"use strict";


const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const managerName = document.getElementById("name");
const date = document.getElementById("date");

const removeBg = document.querySelectorAll(".animated-bg");
const removeTextBg = document.querySelectorAll(".animated-bg-text");

setTimeout(showData, 3000);

const manUtd = {
  "name": "Manchester United",
  "stadiumImage": '<img src="images/stadiums/manchesterUnited.jpg" alt="manchesterUnited">',
  "about": "Manchester United, an iconic football institution, echoes triumphs carved in history's annals, uniting legacies of legends and the fervor of a global fan mosaic, painting the sport's canvas with shades of glory and passion.",
  "managerInfo": {
    "name": "Eric Ten Hag",
    "profilePicture": '<img src="images/managers/erik-ten-hag.jpg" alt="manchesterUnited">',
    "dateOfAppointment": "April 21, 2022"
  }
}


function showData() {
  header.innerHTML = manUtd.stadiumImage;
  title.innerHTML = manUtd.name;
  excerpt.innerHTML = manUtd.about;
  profile_img.innerHTML = manUtd.managerInfo.profilePicture;
  managerName.innerHTML = manUtd.managerInfo.name;
  date.innerHTML = manUtd.managerInfo.dateOfAppointment;

  removeBg.forEach((bg) => bg.classList.remove("animated-bg"));
  removeTextBg.forEach((bg) => bg.classList.remove("animated-bg-text"));
}