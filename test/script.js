"use strict";

const main = async () => {
  const map = L.map("map");

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const geoJson = await getGeoJson("../json/sample.geojson");

  const mapGeoJson = L.geoJson(geoJson).addTo(map);
  map.fitBounds(mapGeoJson.getBounds());
};

async function getGeoJson(filepath) {
  const response = await fetch(filepath);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

main();
