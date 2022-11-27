<script>
	import {Router, Link, Route} from "svelte-routing"
	import { afterUpdate} from 'svelte';

	afterUpdate(() => {
		if(document.getElementById("exampleTextarea")) scrollToBottom(document.getElementById("exampleTextarea"));
  })
	const scrollToBottom = (node) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  }
	import axios from "axios"
	import Cookies from "js-cookie"
  let loading = true
  let error = null
  let database = null
	export let id
	let output = ""

	const submit = (event) => {
		event.preventDefault()
		let {query} = event.target.elements
		axios.post(`/api/mysql/${id}`, {query: query.value}, {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			console.log("success")
			output += query.value + '\n'
			output += ">> " + res.data.output + "\n"
			event.target.reset()
		}).catch(err => {
			console.error(err)
			output += query.value + '\n'
			event.target.reset()
			output += ">> " +  "error executing query\n"
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
<h1 class="display-2 mb-5">{database.name}</h1>

<div class="form-group">
  <textarea class="form-control" id="exampleTextarea" rows="15" readonly bind:value={output}></textarea>
</div>
<form on:submit={submit}>
	<div class="form-floating mb-3">
		<input class="form-control" id="sql-input" type="text" required placeholder="s" name="query" autocomplete="off">
		<label for="sql-input">SQL Query</label>
	</div>

<button class="btn btn-primary btn-lg" type="submit">Submit</button>
</form>

{/if}