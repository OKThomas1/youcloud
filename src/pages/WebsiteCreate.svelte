<script>
	import Cookies from "js-cookie"
	import axios from "axios"
  const submit = event => {
		event.preventDefault()
		let {file, name} = event.target.elements
		const formData = new FormData()
		formData.append('file', file.files[0])
		formData.append('name', name.value)
		axios.post("/api/websites", formData, {headers:{"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			console.log(res)
		}).catch(err => {
			console.error(err)
		})
	}
</script>

  <h1 class="display-2 mb-5">Website Upload</h1>

  <form on:submit={submit}>
		<div class="form-floating mb-3">
			<input id="website-name" class="form-control" required placeholder="s" type="text" name="name" />
			<label for="website-name">Website Name</label>
		</div>
		<div class="mb-3">
			<label for="formFile" class="form-label">Upload Website (.zip)</label>
			<input class="form-control" type="file" name="file" id="formFile" accept=".zip">
		</div>
    <button class="btn btn-primary btn-lg" type="submit">Upload</button>
  </form>

