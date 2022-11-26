<script>
import {Router, Link, Route} from "svelte-routing"
	import axios from "axios"
	import Cookies from "js-cookie"
  let loading = true
  let error = null
  let database = null
  export let params

  axios.get(`/api/mysql${params.id}`, {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
		database = res.data
		loading = false
	}).catch(err => {
		console.error(err)
		error = "Could not get user"
		loading = false
	})
</script>
{#if loading}
  <div class="d-flex justify-content-center align-items-center">
    <div class="my-5 spinner-border text-primary" style="width: 10rem; height: 10rem;" />
  </div>
{:else if error}
  <h1>{error}</h1>
{:else}
<h1 class="display-02">{database.name}</h1>

<div class="form-group">
  <textarea class="form-control" id="exampleTextarea" rows="20" readonly></textarea>
</div>

<input type="text">

<button class="btn btn-secondary" disabled>Import Script (.sql)</button>
<button class="btn btn-primary" >Submit</button>
{/if}