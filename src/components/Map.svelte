<script>
  import L from "leaflet"
  import "leaflet/dist/leaflet.css"

  export let markerLocation
  let map
  let marker

  $: markerLocation && updateMap()

  function createMap(container) {
    let m = L.map(container, {
      preferCanvas: true,
    })
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(m)
    const icon = L.divIcon({
      html: `<div><img src="assets/icon-location.svg" alt=""/></div>`,
      className: "dummy",
    })
    marker = L.marker(markerLocation, { icon: icon }).addTo(m)
    m.setView(markerLocation, 6)
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

  function updateMap() {
    if (map !== undefined && marker !== undefined) {
      marker.setLatLng(markerLocation)
      map.setView(markerLocation, 10)
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
<div id="map" class="map" use:mapAction />
