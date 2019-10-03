const urlData =
  "https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00";
$.ajax({
  method: "GET",
  url: urlData,
  dataType: "JSON"
}).done(function(data) {
  console.log(data);
  Object.keys(data).forEach(function(key) {
    let $assigmnentA = $(`.assignmentAData`);
    $assigmnentA.append(`<div> Date from: ${data[key].DATETIME_FROM} </div>`);
    $assigmnentA.append(`<div> Date from: ${data[key].DATETIME_TO} </div>`);
    $assigmnentA.append(`<div> Machine: ${data[key].MACHINE} </div>`);
    //Part1
    $assigmnentA.append(`<div> Production: ${data[key].PRODUCTION} </div>`);
    //Part2
    $assigmnentA.append(
      `<div> Scrap percentage: ${data[key].SCRAP_PERCENTAGE} </div>`
    );
    //Part3
    $assigmnentA.append(
      `<div> Downtime percentage: ${data[key].DOWNTIME_PERCENTAGE} </div>`
    );
    //Part4
    $assigmnentA.append(`<ul class="assigmnentATableUl${key}"></ul>`);
    Object.keys(data[key])
      .filter(function(k) {
        return /^H/.test(k);
      })
      .forEach(function(k) {
        $(`.assigmnentATableUl${key}`).append(
          `<li> <div>${k}</div> <div>${data[key][k]}</div></li>`
        );
        console.log(data[key][k] + " " + key);
      });
    $assigmnentA.append(`<div class="spaceDiv"></div>`);
  });
});
