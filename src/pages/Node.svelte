<script>
  import { Link } from "svelte-routing"

let loading = true
let error=  null
try {
//let scripts = await axios.get("/api/nodejs")
let scripts = [{name: "testscript", status:"running", id:1 }]
}
catch(err){

}
const submit = (event)  =>{

}
// const delete = (id) => {
//     axios.delete(`/api/nodejs/{id}`)
// }
</script>
<Link to="nodecreate"><button class="btn btn-primary" type="button"> Upload (New Page)</button></Link>
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>john@example.com</td>
    </tr>
    <tr>
      <td>Mary</td>
      <td>Moe</td>
      <td>mary@example.com</td>
    </tr>
    <tr>
      <td>July</td>
      <td>Dooley</td>
      <td>july@example.com</td>
    </tr>
  </tbody>
</table>