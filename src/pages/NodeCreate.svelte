<script>
  import axios from "axios"
  import Cookies from "js-cookie"
  import {navigate} from "svelte-routing"
  let error = null
  let loading = false
  const submit = event => {
    error = null
    loading = true
    event.preventDefault()
    let {file, name, port} = event.target.elements
    const formData = new FormData()
    formData.append("file", file.files[0])
    formData.append("name", name.value)
    formData.append("port", port.value)
    axios
      .post("/api/node", formData, {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}})
      .then(res => {
        console.log("success")
        loading = false
        navigate("/nodejs", {replace: true})
      })
      .catch(err => {
        loading = false
        console.error(err)
        error = "Error Uploading Script"
      })
  }
</script>

<h1 class="display-1 mb-5">Script Upload</h1>

<form on:submit={submit}>
  <div class="form-floating mb-3">
    <input id="script-name" class="form-control" required placeholder="s" type="text" name="name" autocomplete="off"/>
    <label for="script-name">Script Name</label>
  </div>
  <div class="form-floating mb-3">
    <input id="script-port" class="form-control" required placeholder="s" type="text" name="port" autocomplete="off"/>
    <label for="script-port">Port</label>
  </div>
	<div class="mb-3">
		<label for="formFile" class="form-label">Upload Script (.zip)</label>
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
