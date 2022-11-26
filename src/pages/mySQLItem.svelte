<script>
import { Link } from "svelte-routing"

let loading = true
let error=  null
let database = {name: "testdb", username:"testusername", password:"huh?", id:1 }
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

<h1 class="display-02">{database.name}</h1>
