$(document).ready(function () {
  function handleData(data) {
    for (i = 0; i < data.results.length; i++) {
      $("table tbody").append("<tr>" +
        "<td>" + data.results[i].name + "</td>" +
        "<td>" + data.results[i].model + "</td>" +
        "<td>" + data.results[i].max_atmosphering_speed + "</td>" +
        "<td>" + data.results[i].crew + "</td>" +
        "<td>" + data.results[i].passengers + "</td>" +
        "</tr>");
    }

    // console.log(data.results.length);
  }
  $.getJSON('https://swapi.co/api/starships/?format=json', handleData);
});
