<script>
  import L from "leaflet"
  import "leaflet/dist/leaflet.css"

  export let markerLocation
  let map

  function createMap(container) {
    let m = L.map(container, { preferCanvas: true }).setView(markerLocation, 12)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(m)
    const icon = L.divIcon({
      html: `<div><img src="assets/icon-location.svg" alt=""/></div>`,
      className: "dummy",
    })
    L.marker(markerLocation, { icon: icon }).addTo(m)
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
  .map {
    height: 555px;
    margin: -82px -8px 0px -8px;
    border: 3px solid green;
  }
</style>

<svelte:window on:resize={resizeMap} />
<div class="map" use:mapAction />
