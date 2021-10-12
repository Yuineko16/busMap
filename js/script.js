window.onload = function () {
  var map = L.map('map').setView([36.5603916510293,139.9546031898826], 13);

 // 描画
 var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 19
});

 // マーカーにする画像を読み込む
  var Icon = L.icon({
    iconUrl: 'icon.png',
    iconRetinaUrl: 'icon.png',
    iconSize: [20, 30],
    iconAnchor: [10, 30],
    popupAnchor: [0, -40] 
  });
  var IconLRT = L.icon({
    iconUrl: 'iconLRT.png',
    iconRetinaUrl: 'iconLRT.png',
    iconSize: [20, 30],
    iconAnchor: [10, 30],
    popupAnchor: [0, -40] 
  });
  var IconB = L.icon({
    iconUrl: 'iconB.png',
    iconRetinaUrl: 'iconB.png',
    iconSize: [20, 30],
    iconAnchor: [10, 30],
    popupAnchor: [0, -40] 
  });

//引用元 https://qiita.com/TakeshiNickOsanai/items/783caa9f31bcf762da16
tileLayer.addTo(map);
L.geoJson(
  LRTstops,
  {
    onEachFeature: function(feature, layer){
      if (feature.properties && feature.properties.title && feature.properties.description) {
        layer.bindPopup("<p class='popup-title '><b>" + feature.properties.title +"</b></p><p><img src="+ feature.properties.image +" alt='画像' width='250px'></p><p>"+feature.properties.description + "</p>");
      }
    }
    , pointToLayer: function( feature, latlng ) {
      //引用元 https://teratail.com/questions/33751
      var icn = Icon; // デフォルトアイコンを指定
      if ( feature.properties && feature.properties.category === 'LRT' ) {
        icn = IconLRT;
      }
      else if(feature.properties && feature.properties.category === 'B'){
        icn = IconB;
      }
      return L.marker( latlng, { icon: icn });
    }
  }
).addTo(map);


L.geoJson(
  LrtRoute, 
  {
    color: 'yellow',
    opacity: 0.8,
    onEachFeature: function onEachFeature(feature,layer){
      //if(feature.properties && feature.properties.popupContent){
        //layer.bindPopup(feature.properties.popupContent);
      //}
    }
  }
).addTo(map);
L.geoJson(
  bRoute, 
  {
    color: 'aqua',
    opacity: 0.8,
    onEachFeature: function onEachFeature(feature,layer){
      //if(feature.properties && feature.properties.popupContent){
        //layer.bindPopup(feature.properties.popupContent);
      //}
    }
  }
).addTo(map);


}

var LRTstops = [{
        "type": "Feature",
        "properties": {
          "title": "宇都宮駅",
          "description": "宇都宮の中心にある駅です",
          "image": "01.jpg",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.89966, 36.55930,],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "宿郷町",
          "description": "宿郷町です",
          "image": "02.jpg",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.90363, 36.55831],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "東宿郷",
          "description": "東宿郷です",
          "image": "03.jpg",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.907832, 36.55799],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "今泉町",
          "description": "今泉町です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.91594, 36.55754],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "陽東",
          "description": "陽東です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.92290, 36.55730],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "宇大工学部前",
          "description": "宇大工学部前です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.92992, 36.55704],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "平石",
          "description": "平石です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.93932,36.55501],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "平石中央小学校前",
          "description": "平石中央小学校前です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.94463,36.55483],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "飛山城跡",
          "description": "飛山城跡です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.96341,36.54840],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "清陵高校前",
          "description": "清陵高校前です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.97626,36.54496],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "清原地区市民センター前",
          "description": "清原地区市民<br>センター前です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.98427,36.54763],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "グリーンスタジアム前",
          "description": "グリーンスタジアム前です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.98312,36.55387],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "ゆいの杜西",
          "description": "ゆいの杜西です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.98719,36.56743],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "ゆいの杜中央",
          "description": "ゆいの杜中央です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.99276,36.56773],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "ゆいの杜東",
          "description": "ゆいの杜東です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [139.99860,36.56762],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "芳賀台",
          "description": "芳賀台です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [140.00647,36.56611],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "芳賀町工業団地管理<br>センター前",
          "description": "芳賀町工業団地管理センター前です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [140.01050,36.56499],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "かしの森公園前",
          "description": "かしの森公園前です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [140.01469,36.57227],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "芳賀・高根沢工業団地",
          "description": "芳賀・高根沢工業団地です",
          "category": "LRT"
        },
        "geometry": {
          "coordinates": [140.01176,36.57917],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "清原管理センター前",
          "description": "清原管理センター前です",
          "category": "B"
        },
        "geometry": {
          "coordinates": [139.98427,36.54763],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "東洋紡フィルムソリューション前",
          "description": "東洋紡フィルムソリューション前です",
          "category": "B"
        },
        "geometry": {
          "coordinates": [139.98935,36.54587],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "JT北関東工場前",
          "description": "JT北関東工場前です",
          "category": "B"
        },
        "geometry": {
          "coordinates": [139.99075,36.54132,],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "ロックペイント宇都宮工場前",
          "description": "ロックペイント宇都宮工場前です",
          "category": "B"
        },
        "geometry": {
          "coordinates": [139.98624,36.53808],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "マルハニチロ宇都宮工場前",
          "description": "マルハニチロ宇都宮工場前です",
          "category": "B"
        },
        "geometry": {
          "coordinates": [139.98084,36.53917,],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title": "中外製薬工業宇都宮工場前",
          "description": "中外製薬工業宇都宮工場前です",
          "category": "B"
        },
        "geometry": {
          "coordinates": [139.97943,36.54368],
          "type": "Point"
        }
      }
    ];



      var LrtRoute = {
        "type": "FeatureCollection",
        "name": "LRTroute",
        "crs": { "type": "name",
        "properties": {
          "name": "urn:ogc:def:crs:OGC:1.3:CRS84" 
        }
      },
        "features": [
        { 
          "type": "Feature",
          "properties": { 
            "osm_id": "12419662", 
            "name": "宇都宮ライトレール", 
            "type": "route", 
            "other_tags": "\"route\"=>\"railway\"" 
          }, 
          "geometry": { 
            "type": "MultiLineString", 
            "coordinates": [ 
              [ [ 139.9353468, 36.5569036 ], [ 139.9339535, 36.5569471 ], [ 139.933525, 36.5569602 ], [ 139.9329538, 36.556959 ], [ 139.9311889, 36.5569897 ], [ 139.9307997, 36.5569879 ], [ 139.928789099999989, 36.5570531 ], [ 139.9280032, 36.5570781 ], [ 139.927557900000011, 36.5571144 ], [ 139.9263482, 36.5571638 ], [ 139.9253972, 36.5571985 ], [ 139.924533700000012, 36.5572289 ], [ 139.9243031, 36.5572364 ], [ 139.923719799999986, 36.5572427 ], [ 139.9222388, 36.5572889 ], [ 139.921574099999987, 36.5573216 ], [ 139.9195522, 36.5573856 ], [ 139.919050700000014, 36.5573982 ], [ 139.9185377, 36.5574069 ], [ 139.9181504, 36.5574224 ], [ 139.91776440000001, 36.557439 ], [ 139.9165304, 36.5574808 ], [ 139.9157309, 36.5575066 ], [ 139.915210800000011, 36.5575224 ], [ 139.91480150000001, 36.5575366 ], [ 139.9142392, 36.5575542 ], [ 139.9131166, 36.5575901 ], [ 139.9122792, 36.5576232 ], [ 139.911598199999986, 36.5576685 ], [ 139.9106131, 36.5577376 ], [ 139.908777, 36.5578774 ], [ 139.907453, 36.5579686 ], [ 139.9049039, 36.5581597 ], [ 139.9026141, 36.5583334 ], [ 139.900178399999987, 36.5585151 ], [ 139.89987, 36.5585375 ], [ 139.8996977, 36.5585504 ], [ 139.8995731, 36.5585792 ], [ 139.8994826, 36.5586227 ], [ 139.8994193, 36.558683 ], [ 139.8993906, 36.5587711 ], [ 139.899402900000013, 36.5588617 ], [ 139.899434500000012, 36.5589952 ], [ 139.899574699999988, 36.5595041 ] ], [ [ 139.936282, 36.5567211 ], [ 139.9361533, 36.556784 ], [ 139.9360303, 36.5568214 ], [ 139.9358306, 36.5568594 ], [ 139.9356929, 36.5568833 ], [ 139.935491500000012, 36.5568979 ], [ 139.9353468, 36.5569036 ] ], [ [ 139.9368167, 36.5558301 ], [ 139.936523599999987, 36.5564451 ], [ 139.9364277, 36.5565936 ], [ 139.9363162, 36.5567009 ], [ 139.936282, 36.5567211 ] ], [ [ 139.938089600000012, 36.5549625 ], [ 139.9379615, 36.5549629 ], [ 139.937813299999988, 36.5549716 ], [ 139.93766, 36.5549844 ], [ 139.9375126, 36.5550189 ], [ 139.9373928, 36.5550712 ], [ 139.937254200000012, 36.5551644 ], [ 139.9371548, 36.5552614 ], [ 139.9370189, 36.5554447 ], [ 139.9368845, 36.5556878 ], [ 139.9368167, 36.5558301 ] ], [ [ 139.9384363, 36.5549609 ], [ 139.938089600000012, 36.5549625 ] ], [ [ 139.939958100000013, 36.5549218 ], [ 139.939651, 36.5549312 ], [ 139.938628099999988, 36.5549577 ], [ 139.9384363, 36.5549609 ] ], [ [ 139.940733, 36.5548939 ], [ 139.939958100000013, 36.5549218 ] ], [ [ 139.941263600000013, 36.5548806 ], [ 139.940733, 36.5548939 ] ], [ [ 139.9490753, 36.5546663 ], [ 139.948754799999989, 36.5546846 ], [ 139.9484335, 36.5546936 ], [ 139.9483912, 36.5546943 ], [ 139.9478512, 36.5547035 ], [ 139.9456367, 36.5547604 ], [ 139.9450559, 36.5547786 ], [ 139.9427861, 36.5548377 ], [ 139.941263600000013, 36.5548806 ] ], [ [ 139.9492115, 36.5546546 ], [ 139.9490753, 36.5546663 ] ], [ [ 139.9519912, 36.5538036 ], [ 139.9511113, 36.5542382 ], [ 139.9508274, 36.5543594 ], [ 139.9505076, 36.5544757 ], [ 139.9503191, 36.5545228 ], [ 139.949829200000011, 36.554602 ], [ 139.94934760000001, 36.5546429 ], [ 139.9492115, 36.5546546 ] ], [ [ 139.954027200000013, 36.5527689 ], [ 139.9521811, 36.5537105 ], [ 139.9519912, 36.5538036 ] ], [ [ 139.9600165, 36.5499581 ], [ 139.954027200000013, 36.5527689 ] ], [ [ 139.9619295, 36.5490366 ], [ 139.9600165, 36.5499581 ] ], [ [ 139.9641365, 36.5479761 ], [ 139.963907400000011, 36.5480812 ], [ 139.9631178, 36.548462 ], [ 139.9619295, 36.5490366 ] ], [ [ 139.9644358, 36.5478259 ], [ 139.9641365, 36.5479761 ] ], [ [ 139.9656822, 36.5472156 ], [ 139.9644358, 36.5478259 ] ], [ [ 139.9684653, 36.5458879 ], [ 139.9656822, 36.5472156 ] ], [ [ 139.968872800000014, 36.5456984 ], [ 139.9684653, 36.5458879 ] ], [ [ 139.9719943, 36.5444584 ], [ 139.9716487, 36.5445205 ], [ 139.9710069, 36.5447217 ], [ 139.9707625, 36.5448024 ], [ 139.9705731, 36.5448709 ], [ 139.9702203, 36.5450224 ], [ 139.969839799999988, 36.5452195 ], [ 139.968872800000014, 36.5456984 ] ], [ [ 139.972339799999986, 36.5443964 ], [ 139.9719943, 36.5444584 ] ], [ [ 139.9727346, 36.5443785 ], [ 139.972339799999986, 36.5443964 ] ], [ [ 139.97571, 36.5447853 ], [ 139.9742637, 36.5445022 ], [ 139.9738644, 36.5444291 ], [ 139.973413099999988, 36.5443801 ], [ 139.972844, 36.5443736 ], [ 139.9727346, 36.5443785 ] ], [ [ 139.9826931, 36.5551828 ], [ 139.982822, 36.5547718 ], [ 139.9828651, 36.554676 ], [ 139.9830121, 36.5543336 ], [ 139.983057300000013, 36.5542331 ], [ 139.98310330000001, 36.5540986 ], [ 139.983126, 36.5540238 ], [ 139.9832682, 36.5535446 ], [ 139.9834846, 36.5528586 ], [ 139.9839785, 36.5511946 ], [ 139.9843708, 36.5499078 ], [ 139.9847632, 36.548639 ], [ 139.98494070000001, 36.5480468 ], [ 139.984955899999989, 36.5479746 ], [ 139.984953600000011, 36.5479052 ], [ 139.9849279, 36.5478442 ], [ 139.984873, 36.5477682 ], [ 139.9847959, 36.5477091 ], [ 139.9847072, 36.5476688 ], [ 139.984616100000011, 36.5476432 ], [ 139.9842028, 36.5475599 ], [ 139.9840269, 36.5475277 ], [ 139.983890699999989, 36.5475068 ], [ 139.9837367, 36.5474871 ], [ 139.979905300000013, 36.5467079 ], [ 139.979671599999989, 36.5466527 ], [ 139.979503200000011, 36.5466196 ], [ 139.9793176, 36.5465511 ], [ 139.979166600000013, 36.5464504 ], [ 139.9790255, 36.546302 ], [ 139.978755400000011, 36.5458402 ], [ 139.9786492, 36.5456512 ], [ 139.978546200000011, 36.5455055 ], [ 139.978439, 36.5454097 ], [ 139.978312, 36.5453325 ], [ 139.9780743, 36.5452688 ], [ 139.97571, 36.5447853 ] ], [ [ 139.9823791, 36.5562514 ], [ 139.9824539, 36.5558671 ], [ 139.9824915, 36.5557415 ], [ 139.9825727, 36.5554648 ], [ 139.982607, 36.5553715 ], [ 139.9826682, 36.5552448 ], [ 139.9826931, 36.5551828 ] ], [ [ 139.9828407, 36.5628279 ], [ 139.9827756, 36.5624883 ], [ 139.982385099999988, 36.560132 ], [ 139.9821866, 36.5589428 ], [ 139.982127600000013, 36.5586261 ], [ 139.98211950000001, 36.5583288 ], [ 139.9821222, 36.5579086 ], [ 139.9821484, 36.5574756 ], [ 139.982177900000011, 36.5572042 ], [ 139.9822139, 36.5568704 ], [ 139.982272, 36.5566134 ], [ 139.982322399999987, 36.5564503 ], [ 139.9823791, 36.5562514 ] ], [ [ 139.983130499999987, 36.5639836 ], [ 139.9828407, 36.5628279 ] ], [ [ 139.9833653, 36.5651397 ], [ 139.9832189, 36.564387 ], [ 139.983130499999987, 36.5639836 ] ], [ [ 139.983498700000013, 36.5659784 ], [ 139.9833653, 36.5651397 ] ], [ [ 139.984907600000014, 36.5669615 ], [ 139.9846043, 36.5669492 ], [ 139.9843804, 36.5669296 ], [ 139.9842314, 36.5669025 ], [ 139.9840613, 36.5668583 ], [ 139.983995599999986, 36.5668406 ], [ 139.983891699999987, 36.5667867 ], [ 139.9838157, 36.5667348 ], [ 139.9837492, 36.5666766 ], [ 139.9836837, 36.5665932 ], [ 139.98362, 36.5664933 ], [ 139.9835677, 36.5663282 ], [ 139.983498700000013, 36.5659784 ] ], [ [ 140.0118031, 36.5792097 ], [ 140.014502099999987, 36.5730429 ], [ 140.0146136, 36.5727757 ], [ 140.0147074, 36.5725284 ], [ 140.0147498, 36.5723266 ], [ 140.0147445, 36.5720012 ], [ 140.014735699999989, 36.5718519 ], [ 140.0147215, 36.5716942 ], [ 140.014652500000011, 36.5713687 ], [ 140.0146383, 36.5712934 ], [ 140.0142569, 36.5705335 ], [ 140.0132318, 36.5684315 ], [ 140.0125081, 36.5670258 ], [ 140.011458800000014, 36.5649136 ], [ 140.0113901, 36.5648283 ], [ 140.0112966, 36.5647907 ], [ 140.011211300000014, 36.5647891 ], [ 140.010965199999987, 36.5648276 ], [ 140.0079361, 36.5656805 ], [ 140.0028944, 36.5670784 ], [ 140.0018787, 36.5673485 ], [ 140.0013372, 36.5674522 ], [ 140.0007391, 36.5675062 ], [ 140.000417, 36.567529 ], [ 139.9995534, 36.5675574 ], [ 139.9990261, 36.5675986 ], [ 139.997651100000013, 36.5676313 ], [ 139.997076, 36.5676199 ], [ 139.995816100000013, 36.5676427 ], [ 139.994400399999989, 36.5676782 ], [ 139.9929582, 36.5677024 ], [ 139.991549600000013, 36.5677308 ], [ 139.990809899999988, 36.5677606 ], [ 139.9900586, 36.5677639 ], [ 139.989420700000011, 36.5677365 ], [ 139.988932799999986, 36.5677032 ], [ 139.9885688, 36.5676704 ], [ 139.9884113, 36.5676529 ], [ 139.9879424, 36.5675895 ], [ 139.987766599999986, 36.5675563 ], [ 139.9875917, 36.5675156 ], [ 139.987392699999987, 36.5674651 ], [ 139.9861644, 36.5671355 ], [ 139.9859524, 36.567093 ], [ 139.9856749, 36.5670398 ], [ 139.9853627, 36.5669952 ], [ 139.985248399999989, 36.5669826 ], [ 139.984907600000014, 36.5669615 ] ] ] } }
        ]
      };
      var bRoute = {
        "type": "FeatureCollection",
        "name": "LRTroute",
        "crs": { "type": "name",
        "properties": {
          "name": "urn:ogc:def:crs:OGC:1.3:CRS84" 
        }
      },
        "features": [
        { 
          "type": "Feature",
          "properties": { 
            "name": "新設B路線", 
            "type": "route"
          }, 
          "geometry": { 
            "type": "MultiLineString", 
            "coordinates": [ 
              [ [139.98427,36.54763], [139.98851,36.54843], [139.98935,36.54587],  [139.99075,36.54132,], [139.99136,36.53916], [139.98624,36.53808], [139.98144,36.53717], [139.98084,36.53917,], [139.97890,36.54541], [139.97879,36.54553], [139.97873,36.54557], [139.97926,36.54640], [139.97945,36.54653], [139.98427,36.54763]] 
            ] } }
        ]
      };

