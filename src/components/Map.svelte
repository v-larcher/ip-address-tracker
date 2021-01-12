<script>
  import L from "leaflet"
  import "leaflet/dist/leaflet.css"
  let map
  /*let map = L.map("map").setView([51.505, -0.09], 13)
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  L.marker([51.5, -0.09])
    .addTo(map)
    .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
    .openPopup()*/

  const initialView = [39.8283, -98.5795]
  function createMap(container) {
    let m = L.map(container, { preferCanvas: true }).setView(initialView, 5)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(m)

    return m
  }

  function mapAction(container) {
    map = createMap(container)
    return {
      destroy: () => {
        map.remove()
      },
    }
  }

  function resizeMap() {
    if (map) {
      map.invalidateSize()
    }
  }
</script>

<style>
  div {
    height: 500px;
    margin: -82px -8px 0px -8px;
    border: 3px solid green;
  }
</style>

<svelte:window on:resize={resizeMap} />
<div use:mapAction />
