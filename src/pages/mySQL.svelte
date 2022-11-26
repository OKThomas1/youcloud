<script>
import {Router, Link, Route} from "svelte-routing"
	import axios from "axios"
	import Cookies from "js-cookie"
  let loading = true
  let error = null
  let user = null
  
  let databases = [{name: "testdb", username:"testusername", password:"huh?", id:1 }]
  
  axios.get("/api/self", {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
		user = res.data.user
		loading = false
	}).catch(err => {
		console.error(err)
		error = "Could not get user"
		loading = false
	})

const submit = (event)  =>{

}
// const delete = (id) => {
//     axios.delete(`/api/mysql/{id}`)
// }
</script>

<h1 class="display-02">mySQL</h1>

<Link to="mysqlcreate"><button class="btn btn-primary" type="button"> Upload Database (New Page)</button></Link>

<table class="table table-hover">
  <thead>
    <tr>
      <th>Database Name</th>
      <th>Username</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    {#each databases as db}
      <tr>
        <Link to={`mysql/${db.id}`}>
          <td>{db.name}</td>
        </Link>
        <td>{db.username}</td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>
    {/each}
  </tbody>
</table>