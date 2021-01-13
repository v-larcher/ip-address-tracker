<script>
  import SearchBar from "./SearchBar.svelte"
  import Table from "./Table.svelte"
  import Map from "./Map.svelte"

  let data
  let markerLocation = [39.8283, -98.5795]

  function handleMessage(event) {
    console.log(event.detail.ip)
    getIPdata(event.detail.ip)
  }

  function getIPdata(ip) {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v1?apiKey=at_9bN0sOTlec9YB5zjvoBdmRJovxzPq&ipAddress=${ip}`
    )
      .then((response) => response.json())
      .then((r) => {
        data = {
          ip_address: ip,
          location: `${r.location.region}, ${r.location.city.replace(
            /[^A-Z]/g,
            ""
          )} ${r.location.postalCode}`,
          timezone: `UTC ${r.location.timezone}`,
          isp: r.isp,
        }
        markerLocation = [r.location.lat, r.location.lng]
      })
  }
</script>

<style>
  .background {
    position: absolute;
    margin: -29px 0px 0px -8px;
    width: 100%;
    height: 30%;
    z-index: -1;
  }
  h1 {
    color: white;
    text-align: center;
    font-weight: 500;
  }
</style>

<img class="background" src="assets/pattern-bg.png" alt="" />
<h1>IP Address Tracker</h1>
<SearchBar on:ip={handleMessage} />
<Table {...data} />
<Map {markerLocation} />
