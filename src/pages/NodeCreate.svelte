<script>
  import axios from "axios"
	import Cookies from "js-cookie"
	import { navigate } from "svelte-routing";
	let error = null
  const submit = (event)  =>{
		event.preventDefault()
		let {file, name} = event.target.elements
		const formData = new FormData()
		formData.append('file', file.files[0])
		formData.append('name', name.value)
		axios.post("/api/node", formData, {headers:{"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			console.log("success")
			navigate("/nodejs", {replace: true})
		}).catch(err => {
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
 