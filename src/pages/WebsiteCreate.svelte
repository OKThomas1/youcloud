<script>
	import Cookies from "js-cookie"
	import axios from "axios"
	let error = null
  let loading = false
  const submit = event => {
		error = null
    loading = true
		event.preventDefault()
		let {file, name} = event.target.elements
		const formData = new FormData()
		formData.append('file', file.files[0])
		formData.append('name', name.value)
		axios.post("/api/websites", formData, {headers:{"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			console.log(res)
			loading = false
		}).catch(err => {
			loading = false
			console.error(err)
			error = "Error Uploading Website"
		})
	}
</script>

  <h1 class="display-2 mb-5">Website Upload</h1>

  <form on:submit={submit}>
		<p class="text-center">Your website will be available at *websitename*.*customdomain*</p>
		<div class="form-floating mb-3">
			<input id="website-name" class="form-control" required placeholder="s" type="text" name="name" autocomplete="off"/>
			<label for="website-name">Website Name</label>
		</div>
		<div class="mb-3">
			<label for="formFile" class="form-label">Upload Website (.zip)</label>
			<input class="form-control" type="file" name="file" id="formFile" accept=".zip">
		</div>
    <button class="btn btn-primary btn-lg" type="submit">Upload</button>
  </form>

{#if loading}
  <div class="d-flex justify-content-center align-items-center">
    <div class="my-5 spinner-border text-primary" style="width: 10rem; height: 10rem;" />
  </div>
{:else if error}
  <div class="alert alert-dismissible alert-danger">
    <button type="button" class="btn-close" data-bs-dismiss="alert" />
    <strong>{error}</strong> Try submitting again.
  </div>
{/if}