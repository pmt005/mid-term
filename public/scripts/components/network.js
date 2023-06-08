/* eslint-disable no-undef */
/* eslint-disable func-style */



$(document).ready(function() {

  function getAllItems(inputParam) {
    let url = "/api/items";
    if (inputParam) {
      url += "?" + inputParam;
    }
    return $.ajax(url,{method: 'GET'});
  }



















});
