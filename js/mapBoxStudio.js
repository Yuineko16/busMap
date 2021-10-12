
mapboxgl.accessToken = 'pk.eyJ1IjoieXVpbmVrbzE2IiwiYSI6ImNrdHV2aWh2ZDBsdHgyb21yNmN5ZWVqNDYifQ.4YMNY9aRSGc1v4ByN0BTgw';
var map = new mapboxgl.Map({ 
    container: 'map', style: 'mapbox://styles/yuineko16/cku00kpk61tyd17ml7wzcu3w9',
    center: [139.9546031898826,36.5603916510293],
    zoom: 12.5
});

/* 
イベントリスナーの追加
ユーザがマップ上の要素をクリックしたときに作動
*/
map.on('click', ({ point }) => {
    // If the user clicked on one of your markers, get its information.
    const features = map.queryRenderedFeatures(point, { 
      folders: ['Bus']
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];
  
    /* 
    Create a popup, specify its options 
    and properties, and add it to the map.
    */

 const popup = new mapboxgl.Popup({ offset: [0, -15] })
 .setLngLat(feature.geometry.coordinates)
 .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    .addTo(map);
});