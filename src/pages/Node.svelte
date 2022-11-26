<script>
import { Link } from "svelte-routing"

let loading = true
let error=  null
let scripts = [{name: "testscript", status:"running", id:1 }]
try {
//let scripts = await axios.get("/api/nodejs")
}
catch(err){

}
const submit = (event)  =>{

}
// const delete = (id) => {
//     axios.delete(`/api/nodejs/{id}`)
// }
</script>

<h1 class="display-01">Node JS</h1>

<Link to="nodecreate"><button class="btn btn-primary" type="button"> Upload (New Page)</button></Link>

<table class="table table-hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    {#each scripts as script}
      <tr>
        <td>{script.name}</td>
        <td>{script.status}</td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>
    {/each}
  </tbody>
</table>