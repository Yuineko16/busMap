var output = 0;
function getTime(x, y) {
  var elem = document.getElementById("output");
  var t = (((x - y) / 60000 | 0) + 540)
  var m = t % 60;
  if(m<10){
    m = '0'+ m;
  }
  return (t / 60 | 0) + ":" + m;
}

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4) {
    if (xmlhttp.status == 200 & output == 0) {
      var elem = document.getElementById("output");

      var docelem = xmlhttp.responseXML.documentElement;
      var date = docelem.getElementsByTagName("date");
      var cents = docelem.getElementsByTagName("cents");
      var startTime = docelem.getElementsByTagName("startTime");
      var endTime = docelem.getElementsByTagName("endTime");
      //t=((startTime[0].textContent-date[1].textContent)/60000 | 0)+540

      elem.innerHTML += "<div class='keiro-content'><p class='keiro-title'>ルート情報</p>"
        + "<p>日付 : " + date[0].textContent + "</p>"
        + "<p>運賃" + " : " + cents[0].textContent + "円</p>"
        + "<p>出発時間" + " : " + getTime(startTime[0].textContent, date[1].textContent) + "</p>"
        + "<p>到着時間" + " : " + getTime(endTime[0].textContent, date[1].textContent) + "</p>";


      var name = docelem.getElementsByTagName("name");
      var route = docelem.getElementsByTagName("route");
      var headsign = docelem.getElementsByTagName("headsign");
      var arrival = docelem.getElementsByTagName("arrival");
      var departure = docelem.getElementsByTagName("departure");

      elem.innerHTML += "<div class='keiro-content'><p class='keiro-title'>ルート詳細</p>";


      var j = 0;
      for (i = 0; i < name.length; i++) {

        if (name[i].textContent != "Origin" && name[i].textContent != "Destination") {

          if (i % 2 == 0) {

            if (route[j].textContent == "" && headsign[j].textContent == "") {
              elem.innerHTML += "<p>移動手段" + " : " + "徒歩" + "</p>"
            }
            else {
              if(route[j].textContent == "新設B路線"){
                elem.innerHTML += "<p>移動手段" + " : " + "バス" + "</p>"}
              else if(route[j].textContent == "宇都宮LRT"){
                elem.innerHTML += "<p>移動手段" + " : " + "LRT" + "</p>"
              }
              elem.innerHTML += "<p>路線" + " : " + route[j].textContent + "</p>"
              + "<p>行先" + " : " + headsign[j].textContent + "</p>"
            }
            j++;
          }

          if (arrival[i].textContent != "" && arrival[i].textContent != arrival[i - 1].textContent) {
            elem.innerHTML += "<p>到着時間" + " : " + getTime(arrival[i].textContent, date[1].textContent) + "</p>";
          }

          elem.innerHTML += "<p>駅名" + " : " + name[i].textContent + "</p>"

          if (departure[i].textContent != "" && departure[i].textContent != departure[i + 1].textContent) {
            elem.innerHTML += "<p>出発時間" + " : " + getTime(departure[i].textContent, date[1].textContent) + "</p>";
          }

          

          if (i % 2 == 1 &&  i!=name.length-1) {
            elem.innerHTML += "<div class='blank'></div>";
            elem.innerHTML += "</div><p>-----乗り換え-----</p>";
          }
        }
      }
      elem.innerHTML += "<div class='blank'></div>";
      elem.innerHTML += "<p>到着</p>";
    } else {
      alert("status = " + xmlhttp.status);
    }
  }
}
xmlhttp.open("GET", "result.xml");
xmlhttp.send();
