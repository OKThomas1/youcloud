<script>
	import {Router, Link, Route} from "svelte-routing"
	import axios from "axios"
	import Cookies from "js-cookie"
  let loading = true
  let error = null
  let databases = null
  
  axios.get("/api/mysql", {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
		databases = res.data
		loading = false
	}).catch(err => {
		console.error(err)
		error = "Could not get user"
		loading = false
	})

	const remove = (id) => {
		axios.delete(`/api/mysql/${id}`,  {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			console.log(res.data)
			databases = databases.filter(db => db.id !== id)
		}).catch(err => {
			console.error(err)
			error = "Error deleting database"
		})
	}
</script>


{#if loading}
  <div class="d-flex justify-content-center align-items-center">
    <div class="my-5 spinner-border text-primary" style="width: 10rem; height: 10rem;" />
  </div>
{:else if error}
  <h1>{error}</h1>
{:else}
<h1 class="display-02">mySQL</h1>

<Link to="mysqlcreate"><button class="btn btn-primary" type="button">Upload Database (New Page)</button></Link>

<table class="table table-hover">
  <thead>
    <tr>
      <th>Database Name</th>
      <th>Username</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    {#each databases as db}
      <tr>
        <Link to={`mysql/${db.id}`}>
          <td>{db.name}</td>
        </Link>
        <td>{db.username}</td>
        <td><button class="btn btn-danger" on:click={() => remove(db.id)}>Delete</button></td>
      </tr>
    {/each}
  </tbody>
</table>
{/if}