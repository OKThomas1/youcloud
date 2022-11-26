<script>
  import axios from "axios"
  import { Link } from "svelte-routing"
	import Cookies from "js-cookie"

  let loading = true
  let error = null
  let websites = []

	axios.get("/api/websites", {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
		console.log(res.data)
		websites = res.data 
		loading = false
	}).catch(err => {
		console.error(err)
		error = "Could not get website"
		loading = false
	})

	const remove = (id)  =>{
		axios.delete(`/api/websites/${id}`, {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			websites = websites.filter(w => w.id !== id)
		}).catch(err => {
			console.error(err)
			error = "Could not delete website"
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
<h1 class="display-01">Websites</h1>

<Link to="websitecreate"><button class="btn btn-primary" type="button"> Upload (New Page)</button></Link>

<table class="table table-hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>URL</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    {#each websites as website}
      <tr>
        <td>{website.name}</td>
        <td>{website.url}</td>
        <td><button class="btn btn-danger" on:click={() => remove(website.id)}>Delete</button></td>
      </tr>
    {/each}
  </tbody>
</table>
{/if}