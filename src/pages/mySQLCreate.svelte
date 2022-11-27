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

<h1 class="display-2 mb-5">Create Database</h1>
<p>The <strong>	Username and Password </strong> is what you will use to access the database</p>

<form on:submit={submit}>
	<div class="form-floating mb-3">
		<input id="database-name" class="form-control" required placeholder="s" type="text" name="name"/>
		<label for="database-name">Database Name</label>
	</div>
	<div class="form-floating mb-3">
		<input id="database-username" class="form-control" required placeholder="s" type="text" name="username"/>
		<label for="database-username" >Username</label>
	</div>
	<div class="form-floating mb-3">
		<input id="database-password" class="form-control" required placeholder="s" type="password" name="password"/>
		<label for="database-password" >Password</label>
	</div>
  <button class="btn btn-lg btn-primary" type="submit">Submit</button>
</form>
