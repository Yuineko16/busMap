var output = 0;

function getTime(x,y){
    var elem = document.getElementById("output");
    t=(((x-y)/60000 | 0)+540)
    elem.innerHTML+=(t/60 |0) + "時"+t%60+"分"
  }
  function getData() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200 && output == 0) {
          var elem = document.getElementById("output");

          elem.innerHTML += "-----ルート情報-----<br/>";
          var docelem = xmlhttp.responseXML.documentElement;

          var date　= docelem.getElementsByTagName("date");
            elem.innerHTML += "日付" + ":" +date[0].textContent + "<br/>";
          
          var cents = docelem.getElementsByTagName("cents");
            elem.innerHTML += "運賃" + ":" + cents[0].textContent + "<br/>";
          
          var startTime = docelem.getElementsByTagName("startTime");
          //t=((startTime[0].textContent-date[1].textContent)/60000 | 0)+540

            elem.innerHTML += "出発時間"+ ":" ;
            getTime(startTime[0].textContent,date[1].textContent);
            elem.innerHTML += "<br/>";
          
          var endTime = docelem.getElementsByTagName("endTime");
            elem.innerHTML += "到着時間" + ":";
            getTime(endTime[0].textContent,date[1].textContent);
            elem.innerHTML += "<br/>";

          elem.innerHTML += "-----ルート詳細-----<br/>";

          var name = docelem.getElementsByTagName("name");
          var route = docelem.getElementsByTagName("route");
          var headsign = docelem.getElementsByTagName("headsign");
          var arrival = docelem.getElementsByTagName("arrival");
          var departure = docelem.getElementsByTagName("departure");
          j=0;
          for (i = 0; i < name.length; i++) {
          
            if(name[i].textContent!="Origin"&&name[i].textContent!="Destination"){
              if(i%2==0){
               
                 elem.innerHTML += "路線" + ":" + route[j].textContent + "<br/>"
                 elem.innerHTML += "行先"+ ":" + headsign[j].textContent + "<br/>"
                 j++;

                }
              if(arrival[i].textContent!=""&&arrival[i].textContent!=arrival[i-1].textContent){
                  elem.innerHTML += "到着時間"+ ":" ;
                  getTime(arrival[i].textContent,date[1].textContent);
                  elem.innerHTML += "<br/>";}
              elem.innerHTML += "駅名" + ":" + name[i].textContent + "<br/>"
              
                 
              if(departure[i].textContent!=""&&departure[i].textContent!=departure[i+1].textContent){
                elem.innerHTML += "発車時間" + ":" ;
                getTime(departure[i].textContent,date[1].textContent);
                elem.innerHTML += "<br/>";}
              if(i%2==1)
                elem.innerHTML += "-----乗り換え-----<br/>";
              }  
            }     
            elem.innerHTML += "到着<br/>";
          elem.innerHTML += "----------<br/>";
          output = 1;
        } else {
          //alert("status = " + xmlhttp.status);
        }
      }
    }
    xmlhttp.open("GET", "result.xml");
    xmlhttp.send();
  }
