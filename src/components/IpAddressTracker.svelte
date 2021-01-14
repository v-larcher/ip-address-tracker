<script>
  import SearchBar from "./SearchBar.svelte"
  import Table from "./Table.svelte"
  import Map from "./Map.svelte"

  let data
  let markerLocation = [51.5074, 0.1278]
  let searching = false

  function handleMessage(event) {
    console.log(event.detail.ip)
    getIPdata(event.detail.ip)
  }

  function getIPdata(ip) {
    searching = true
    fetch(
      `https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v1?apiKey=at_9bN0sOTlec9YB5zjvoBdmRJovxzPq&ipAddress=${ip}`
    )
      .then((response) => response.json())
      .then((r) => {
        searching = false
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
  h1 {
    margin-top: 2rem;
    color: white;
    text-align: center;
    font-weight: 500;
  }
  .col {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  header {
    background: url("../assets/pattern-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 18rem;
    margin-left: -0.5rem;
    width: 100vw;
  }
  @media screen and (max-width: 376px) {
    h1 {
      font-size: 29px;
    }
  }
  .lds-ripple {
    position: relative;
    transform: translate(0%, 20%);
    width: 10rem;
    height: 10rem;
    z-index: 4000;
  }
  .lds-ripple div {
    position: absolute;
    border: 0.5rem solid white;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    z-index: 4000;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 5rem;
      left: 5rem;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 10rem;
      height: 10rem;
      opacity: 0;
    }
  }
</style>

<header>
  <div class="col">
    <h1>IP Address Tracker</h1>
    <SearchBar on:ip={handleMessage} />
    <Table {...data} />
    {#if searching}
      <div class="lds-ripple">
        <div />
        <div />
      </div>
    {/if}
  </div>
</header>

<Map {markerLocation} />
