<script>
  import axios from "axios"
  import {Link, navigate} from "svelte-routing"
  import Cookies from "js-cookie"

  let loading = true
  let error = null
  let websites = []
  let available

  axios
    .get("/api/websites", {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}})
    .then(res => {
      console.log(res.data)
      websites = res.data.websites
      available = res.data.available
      loading = false
    })
    .catch(err => {
      console.error(err)
      error = "Could not get website"
      loading = false
    })

  const remove = id => {
    axios
      .delete(`/api/websites/${id}`, {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}})
      .then(res => {
        websites = websites.filter(w => w.id !== id)
				available++
      })
      .catch(err => {
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
  <h1 class="display-2 mb-5">Websites</h1>

<button class="btn btn-primary btn-lg" disabled={available === 0} type="button" on:click={() => navigate("websitecreate")}> Upload Website</button>

  {#if websites.length === 0}
    <div class="container text-center mt-4">
      <h2>No Websites Found</h2>
      <p>Please click <strong>Upload</strong> to add a Website</p>
      <p>You have <strong>{available}</strong> {available == 1 ? "website" : "websites"} available</p>
    </div>
  {:else}
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
{/if}
