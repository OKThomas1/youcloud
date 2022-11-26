<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";

  /*
  let all = [];
  let completed = [];
  let incompleted = [];

  function addAll() {
    all = [...all, " "];
  }
  function addCompleted() {
    completed = [...completed, " "];
  }
  function addIncompleted() {
    incompleted = [...incompleted, " "];
  }

  function removeAll(index) {
    all = [...all.slice(0, index), ...all.slice(index + 1)];
  }
  function removeCompleted(index) {
    completed = [...completed.slice(0, index), ...completed.slice(index + 1)];
  }
  function removeIncompleted(index) {
    incompleted = [
      ...incompleted.slice(0, index),
      ...incompleted.slice(index + 1),
    ];
  }
  */
</script>

<header>
  <h1>ToDo App</h1>
</header>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

  :global(*) {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: black;
  }

  header {
    width: 100%;
    max-width: 36em;
    margin: 0 auto;
    padding: 5em 0;
    text-align: left;
  }

  /* :global(body) {
    background-color: #555555;
  } */
</style>
