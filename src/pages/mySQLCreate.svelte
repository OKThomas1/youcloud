<script>
  let loading = true
  let error = null
  try {
    //let databases = await axios.get("/api/mysql")
    let databases = [{name: "testdb", username:"testusername", password:"huh?", id:1 }]
  } catch (err) {}
  const submit = event => {}
  // const delete = (id) => {
  //     axios.delete(`/api/mysql/{id}`)
  // }
</script>

<h1 class="display-01">Create Database</h1>

  <form on:submit={submit}>
    <label for="database-name">Database Name</label>
    <input id="database-name"type="text" />
    <label for="database-username">Username</label>
    <input id="database-username" type="text" />
    <label for="database-password">Password</label>
    <input id="database-password" type="password"/>
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
