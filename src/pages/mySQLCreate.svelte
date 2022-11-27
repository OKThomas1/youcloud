<script>
  import axios from "axios"
	import Cookies from "js-cookie"
	import { navigate } from "svelte-routing";
	let v = ""
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

<h1 class="display-1 mb-5">Create Database</h1>
<p>The <strong>Username</strong> and <strong>Password</strong> is what you will use if you are accessing the database remotely</p>

<form on:submit={submit}>
	<div class="form-floating mb-3">
		<input id="dbn" class="form-control" required placeholder="s" type="text" name="name" autocomplete="off"/>
		<label for="dbn">Database Name</label>
	</div>
	<div class="form-floating mb-3">
		<input id="dbu" class="form-control" required placeholder="s" type="text" name="username" autocomplete="off" bind:value={v}/>
		<label for="dbu" >Username</label>
	</div>
	<div class="form-floating mb-3">
		<input id="dbp" class="form-control" required placeholder="s" name="password" type="password" autocomplete="off" readonly={v === ""}/>
		<label for="dbp" >Password</label>
	</div>
  <button class="btn btn-lg btn-primary" type="submit">Submit</button>
</form>
