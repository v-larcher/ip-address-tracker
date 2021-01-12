<script>
  import SearchBar from "./SearchBar.svelte"
  import Table from "./Table.svelte"
  import Map from "./Map.svelte"

  let data
  let markerLocation = [39.8283, -98.5795]

  async function getIPdata(ip) {
    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_9bN0sOTlec9YB5zjvoBdmRJovxzPq&ipAddress=${ip}`
    )
    console.log(response)
    data = {
      ip_address: ip,
      location: `${response.location.region}, ${response.location.city.replace(
        /[^A-Z]/g,
        ""
      )} ${response.location.postalCode}`,
      timezone: `UTC ${response.location.timezone}`,
      isp: response.isp,
    }
    markerLocation = [response.location.lat, response.location.lng]
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
<SearchBar />
<Table {...data} />
<Map {markerLocation} />
