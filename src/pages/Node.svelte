<script>
  import axios from "axios"
  import {Link} from "svelte-routing"
  import Cookies from "js-cookie"
  let loading = true
  let error = null
  let scripts
  let available

	axios.get("/api/node", {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
		console.log(res.data)
		scripts = res.data.scripts
		available = res.data.available 
		loading = false
	}).catch(err => {
		console.error(err)
		error = "Could not get nodejs scripts"
		loading = false
	})

	const remove = (id)  =>{
		axios.delete(`/api/node/${id}`, {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			scripts = scripts.filter(s => s.id !== id)
		}).catch(err => {
			console.error(err)
			error = "Could not delete nodejs scripts"
		})
	}

	const patch = (id) => {
		axios.patch(`/api/node/${id}`, {}, {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			scripts.find(e => e.id === id).status = res.data.status
			scripts = [...scripts]
		}).catch(err => {
			console.error(err)
			error = "Could not patch nodejs scripts"
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
  <h1 class="display-2">Node JS</h1>

  <Link to="nodecreate"><button class="btn btn-primary" type="button">Upload (New Page)</button></Link>

  {#if scripts.length === 0}
    <div class="container text-center bg-secondary">
      <h2>No Scripts Found</h2>
      <p>Please click <strong>Upload</strong> to add a Script</p>
      <p>You have <strong>{available}</strong> {available == 1 ? "script" : "scriptss"} available</p>
    </div>
  {:else}
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Update</th>
      		<th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {#each scripts as script}
          <tr>
            <td>{script.name}</td>
            <td>{script.status}</td>
            <td><button on:click={() => patch(script.id)} class="btn btn-{script.status === 'running' ? 'warning' : 'success'}">{script.status === "running" ? "Stop" : "Start"}</button></td>
        		<td><button class="btn btn-danger" on:click={() => remove(script.id)}>Delete</button></td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
{/if}
