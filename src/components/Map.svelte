<script>
  import L from "leaflet"
  import "leaflet/dist/leaflet.css"

  export let markerLocation
  let map
  let marker = null

  $: markerLocation && updateMap()

  function createMap(container) {
    let m = L.map(container, {
      preferCanvas: true,
      zoomControl: false,
    })
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(m)
    m.setView(markerLocation, 3)
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
    if (map !== undefined) {
      if (marker === null) {
        const icon = L.divIcon({
          html: `<div class="marker-location"><img src="assets/icon-location.svg" alt=""/></div>`,
          className: "marker-location",
        })
        marker = L.marker(markerLocation, { icon: icon }).addTo(map)
      } else {
        marker.setLatLng(markerLocation)
      }
      map.setView(markerLocation, 15)
    }
  }
</script>

<svelte:window on:resize={resizeMap} />
<div id="map" class="map" use:mapAction />

<style>
  .map {
    height: calc(100vh - 18rem);
    width: 100vw;
    margin: 0 auto;
    margin-left: -0.5rem;
  }
  :global(.marker-location) {
    transform: translate(-0.825rem, -0.25rem);
  }
</style>
