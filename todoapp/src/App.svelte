<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import Todolist from "./Todolist.svelte";
  let test = [
    {
      text: "red",
    },
    {
      text: "green",
    },
  ];
</script>

<main>
  <Todolist Todo={test} />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

  :global(*) {
    font-family: "Poppins", sans-serif;

    width: 100vh;
    text-decoration: none;
    color: black;
    background-color: #7d6e83;
    text-align: center;
    margin-left: 7em;
  }
</style>
