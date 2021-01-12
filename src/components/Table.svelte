<script>
  export let ip_address = "127.213.020.198"
  export let location = "Brooklyn, NY 10001"
  export let timezone = "UTC -05:00"
  export let isp = "SpaceX Starlink"
</script>

<style>
  .title {
    color: hsl(0, 0%, 59%);
    margin-bottom: 10px;
    letter-spacing: 1.5px;
    font-size: 12px;
    font-weight: 700;
  }
  .data {
    color: hsl(0, 0%, 17%);
    font-size: 24px;
    font-weight: 500;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5em;
    margin: auto;
    width: 75%;
    border: 3px solid green;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 15px 15px 0px hsla(0, 0%, 59%, 35%);
  }

  .cell {
    margin: 30px 0px 30px 30px;
    padding: 0px 0px 0px 20px;
    border: 3px solid blue;
    width: 70%;
  }
  div {
    position: relative;
    z-index: 2000;
  }
</style>

<div class="grid">
  <div class="cell">
    <div class="title">IP ADDRESS</div>
    <div class="data">{ip_address}</div>
  </div>

  <div class="cell">
    <div class="title">LOCATION</div>
    <div class="data">{location}</div>
  </div>

  <div class="cell">
    <div class="title">TIMEZONE</div>
    <div class="data">{timezone}</div>
  </div>

  <div class="cell">
    <div class="title">ISP</div>
    <div class="data">{isp}</div>
  </div>
</div>
