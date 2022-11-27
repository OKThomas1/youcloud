<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import Todolist from "./Todolist.svelte";
  import Taskform from "./Taskform.svelte";
  import axios from "axios";
  import {onMount} from 'svelte';
  let loading = true;
  let error = null;
  let items = [];

  let now = new Date(), month, day, year;
	let dateString;
	
	onMount(()=> {
    month = '' + (now.getMonth() + 1),
    day = '' + now.getDate(),
    year = now.getFullYear();

  if (month.length < 2) 
    month = '0' + month;
  if (day.length < 2) 
    day = '0' + day;

  dateString = [year, month, day].join('-');
	})

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

  const getTasks = (e) => {
    const selectedval = e.detail;

    items = [];

    if(selectedval == 1) {
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

    }else if(selectedval == 2) {
      axios
    .get("http://localhost:3001/incompleted/")
    .then((res) => {
      items = res.data;
      loading = false;
    })
    .catch((err) => {
      console.error(err);
      error = "could not get items";
    });
    } else {
      axios
    .get("http://localhost:3001/completed/")
    .then((res) => {
      items = res.data;
      loading = false;
    })
    .catch((err) => {
      console.error(err);
      error = "could not get items";
    });
    }
  }
  

  const deleteTask = (e) => {
    const taskId = e.detail;

    axios
      .delete("http://localhost:3001/" + taskId + "/")
      .then((res) => {
        console.log("Deleted", res);
      })
      .catch((err) => {
        console.error(err);
      });

    items = items.filter((task) => task.id != taskId);
  };

  const submitText = (e) => {
    const text = e.detail;

    axios
    .post("http://localhost:3001/", {todo: text, postdate: dateString})
    .then((res) => {
      console.log(res.data);
      let newitem = {id: res.data.insertId, todo: text, completed: 0, postdate: dateString
      }
      items = [...items,newitem]
      document.getElementById("inputText").value = ""
    })
    .catch((err) => {
      console.error(err);
      console.log(err);
      document.getElementById("inputText").value = ""
      
    });

    



  }
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
  <Taskform on:filter-select={getTasks} on:submit-text={submitText}/>
  <Todolist Todo={items} on:delete-task={deleteTask} />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

  :global(*) {
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    color: black;
  }
</style>
