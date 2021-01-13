<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  export let ip = ""

  function onClick() {
    dispatch("ip", { ip })
    ip = ""
  }
</script>

<style>
  .container {
    border: 1px solid red;
    width: 100%;
  }
  form {
    margin: auto;
    width: 25%;
    border: 3px solid green;
    padding: 10px;
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
  }
</style>

<div class="container">
  <form>
    <input
      type="text"
      class="text-input"
      bind:value={ip}
      placeholder="Search for any IP address or domain" />
    <button type="button" class="button" on:click={onClick}>
      <img src="assets/icon-arrow.svg" alt="" />
    </button>
  </form>
</div>
