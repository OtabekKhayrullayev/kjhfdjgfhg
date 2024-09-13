"use strict";

AOS.init(); //bot token

var telegram_bot_id = "6213010812:AAF7nknlBoP3HIr5ddTphXmzySeYQAleW2o"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id

var chat_id = 1669981432; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)

var u_name, email, message;

var ready = function ready() {
  u_name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;
};

var sendtelegram = function sendtelegram() {
  ready();
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    },
    "data": JSON.stringify({
      "chat_id": chat_id,
      "text": message
    })
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  return false;
};