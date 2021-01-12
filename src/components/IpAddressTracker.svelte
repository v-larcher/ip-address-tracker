<script>
  import SearchBar from "./SearchBar.svelte"
  import Table from "./Table.svelte"
  import Map from "./Map.svelte"
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
<Table />
<Map />
