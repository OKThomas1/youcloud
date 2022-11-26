<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import Todolist from "./Todolist.svelte";
  import axios from "axios";
  let loading = true;
  let error = null;
  let items = [];
  axios
    .get("http://localhost:3001/")
    .then((res) => {
      items = res.data;
      loading = false;
    })
    .catch((err) => {
      console.error(err);
      error = "could not get items";
    });

  const deleteTask = (e) => {
    const taskId = e.detail;
  };
</script>

{#if loading}
  <div class="d-flex justify-content-center align-items-center">
    <div
      class="my-5 spinner-border text-primary"
      style="width: 10rem; height: 10rem;"
    />
  </div>
{:else if error}
  <h1>{error}</h1>
{/if}

<main class="container">
  <Todolist Todo={items} on:delete-task={deleteTask} />
</main>

<style>
</style>
