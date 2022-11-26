<script>
import { Link } from "svelte-routing"

let loading = true
let error=  null
let databases = [{name: "testdb", username:"testusername", password:"huh?", id:1 }]
try {
//let databasees = await axios.get("/api/mysql")
}
catch(err){

}
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
      <th>username</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    {#each databases as db}
      <tr>
        <td>{db.name}</td>
        <td>{db.username}</td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>
    {/each}
  </tbody>
</table>