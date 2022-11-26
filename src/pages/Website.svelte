<script>
  import { Link } from "svelte-routing"

  let loading = true
  let error = null
  let websites = [{name: "testscript", url: "www.google.com", id: 1}]
  try {
    //let websites = await axios.get("/api/website")
  } catch (err) {

  }
  const submit = event => {}
  // const delete = (id) => {
  //     axios.delete(`/api/website/{id}`)
  // }
</script>

<h1 class="display-01">Websites</h1>

<Link to="websitecreate"><button class="btn btn-primary" type="button"> Upload (New Page)</button></Link>

<table class="table table-hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>URL</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    {#each websites as website}
      <tr>
        <td>{website.name}</td>
        <td>{website.url}</td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>
    {/each}
  </tbody>
</table>