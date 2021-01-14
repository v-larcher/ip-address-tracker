<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  export let ip = ""

  function submit() {
    dispatch("ip", { ip })
    ip = ""
  }
  function handleKeydown(event) {
    if (event.keyCode === 13) {
      submit()
    }
  }
</script>

<style>
  .container {
    width: 100%;
  }
  .search-bar {
    margin: 0 auto;
    max-width: 30em;
    min-width: 12em;
    padding: 1rem 3rem 0rem 3rem;
  }
  .text-input {
    margin: 0px -4px 0px 0px;
    border-radius: 15px 0px 0px 15px;
    color: gray;
    width: 90%;
    height: 50px;
  }
  .button {
    background-color: black;
    border-color: black;
    color: white;
    border-radius: 0px 15px 15px 0px;
    width: 10%;
    height: 50px;
    cursor: pointer;
  }

  .button:hover {
    background-color: hsl(0, 0%, 10%);
  }

  @media screen and (max-width: 376px) {
    .text-input {
      font-size: 89%;
    }
    .search-bar {
      padding: 0.45rem 2rem 0rem 2rem;
    }
  }
</style>

<svelte:window on:keydown={handleKeydown} />

<div class="container">
  <div class="search-bar">
    <input
      type="text"
      class="text-input"
      bind:value={ip}
      placeholder="Search for any IP address or domain" />
    <button type="button" class="button" on:click={submit}>
      <img src="assets/icon-arrow.svg" alt="" />
    </button>
  </div>
</div>
