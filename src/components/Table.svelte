<script>
  export let ip_address = "- - - -"
  export let location = "- - - -"
  export let timezone = "- - - -"
  export let isp = "- - - -"
</script>

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

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 1.5em;
    width: 75%;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 15px 15px 0px hsla(0, 0%, 59%, 35%);
    transform: translate(0%, 35%);
  }
  .cell {
    margin: 2rem;
    padding: 0px 1rem 0px 0px;
    width: 70%;
  }
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
  div {
    z-index: 3000;
  }
  @media screen and (min-width: 1384px) {
    .cell:not(:last-child) {
      border-right: 1px solid hsl(0, 0%, 90%);
    }
  }
  @media screen and (min-width: 1720px) {
    .grid {
      grid-template-columns: none;
      grid-template-areas: "a b c d";
      transform: translate(0%, 50%);
    }
    .cell {
      margin: 0 auto;
      width: 75%;
    }
    .title {
      margin-top: 2.25rem;
      margin-bottom: 0.35rem;
      font-size: 13px;
    }
    .data {
      margin-top: 0.35rem;
      margin-bottom: 2.25rem;
      font-size: 26px;
    }
  }
  @media screen and (max-width: 665px) {
    .grid {
      gap: 0em;
      transform: translate(0%, 5%);
      width: 80%;
      grid-template-areas: "a" "b" "c" "d";
      text-align: center;
    }
    .cell {
      margin: 0 auto;
      width: 70%;
    }
    .title {
      margin-left: 1rem;
      margin-top: 1rem;
      margin-bottom: 0.25rem;
      font-size: 10px;
    }
    .data {
      margin-left: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 1rem;
      font-size: 18px;
    }
  }
  @media screen and (min-width: 666px) and (max-width: 1439px) {
    .grid {
      gap: 0.1em;
      transform: translate(0%, 5%);
      width: 80%;
      grid-template-columns: none;
      grid-template-areas: "a b" "c d";
      text-align: center;
    }
    .cell {
      margin: 0 auto;
      width: 75%;
    }
    .title {
      margin-left: 1rem;
      margin-top: 1.75rem;
      margin-bottom: 0.25rem;
      font-size: 11px;
    }
    .data {
      margin-left: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 2rem;
      font-size: 22px;
    }
  }
</style>
