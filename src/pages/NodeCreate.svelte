<script>
  import axios from "axios"
	import Cookies from "js-cookie"
	import { navigate } from "svelte-routing";
	let error = null
	let loading = false
	let success = false
  const submit = (event)  =>{
		loading = true
		event.preventDefault()
		let {file, name} = event.target.elements
		const formData = new FormData()
		formData.append('file', file.files[0])
		formData.append('name', name.value)
		axios.post("/api/node", formData, {headers:{"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			console.log("success")
			loading = false
			success = true
			navigate("/nodejs", {replace: true})
		}).catch(err => {
			loading = false
			console.error(err)
			error = "Error uploading script"
		})
  }

  </script>

  <form on:submit={submit} >
    <label for="name">Script Name</label>
    <input type="text" name="name" id="name">
    <input type="file" name="file">
    <button class="btn btn-primary" type="submit">Upload</button>
  </form>

	{#if loading}
  <div class="d-flex justify-content-center align-items-center">
    <div class="my-5 spinner-border text-primary" style="width: 10rem; height: 10rem;" />
  </div>
	{:else if error}
	<div class="alert alert-dismissible alert-danger">
		<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
		<strong>{error}</strong> Try submitting again.
	</div>
	{:else if success}
	<div class="alert alert-dismissible alert-success">
		<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
		<strong>Well done!</strong> You successfully uploaded a script
	</div>
{/if}
