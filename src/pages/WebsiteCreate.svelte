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

  <h1 class="display-01">Website Upload</h1>

  <form on:submit={submit}>
    <label for="website-input">Website Name</label>
    <input id="website-input"type="text" name="name" />
    <input type="file" name="file"/>
    <button class="btn btn-primary" type="submit">Upload</button>
  </form>

