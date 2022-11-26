<script>
import {Router, Link, Route} from "svelte-routing"
	import axios from "axios"
	import Cookies from "js-cookie"
  let loading = true
  let error = null
  let database = null
	export let id

	const submit = (event) => {
		event.preventDefault()
		let {query} = event.target.elements
		axios.post(`/api/mysql/${id}`, {query: query.value}, {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			console.log("success")
			event.target.reset()
		}).catch(err => {
			console.error(err)
		})
	}

  axios.get(`/api/mysql/${id}`, {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
		console.log(res.data)
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
<form on:submit={submit}>
<input type="text" name="query">

<button class="btn btn-disabled-secondary">Import Script (.sql)</button>
<button class="btn btn-primary" type="submit">Submit</button>
</form>

{/if}