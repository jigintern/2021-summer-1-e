
import L from 'https://code4sabae.github.io/leaflet-mjs/leaflet.mjs'

window.onload = async function() {
    const data = [
    { lat: 35.943560, lng: 136.188917, name: '鯖江駅' },
    { lat: 35.944539, lng: 136.186222, name: 'Hana道場' },
    { lat: 35.942795, lng: 136.198881, name: 'めがね会館' },
    { lat: 35.949658, lng: 136.258142, name: 'JAPAN CRAFT HOUSE' },
    ]

    const map = L.map('mapid')
    set 国土地理院地図 https://maps.gsi.go.jp/development/ichiran.html
    L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
        attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>"',
        maxZoom: 18,
    }).addTo(map)

    let iconlayer = L.layerGroup()
    iconlayer.addTo(map)
    const lls = []
    for (const item of data) {
    const ll = [ item.lat, item.lng ]
    const marker = L.marker(ll, { title: item.name })
    marker.bindPopup(item.name)
    iconlayer.addLayer(marker)
    lls.push(ll)
    }
    if (lls.length)
    map.fitBounds(lls)
}