<script>
  import axios from "axios"
	import Cookies from "js-cookie"
	import { navigate } from "svelte-routing";

  const submit = event => {
		event.preventDefault()
		let {name, username, password} = event.target.elements
		axios.post("/api/mysql", {name: name.value, username: username.value, password: password.value}, {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
			console.log(res.data)
			navigate("/mysql", {replace: true})
		}).catch(err => {
			console.error(err)
		})
	}

</script>

<h1 class="display-01">Create Database</h1>

<form on:submit={submit}>
  <label for="database-name">Database Name</label>
  <input id="database-name" type="text" name="name"/>
  <label for="database-username">Username</label>
  <input id="database-username" type="text" name="username"/>
  <label for="database-password">Password</label>
  <input id="database-password" type="password" name="password"/>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>
