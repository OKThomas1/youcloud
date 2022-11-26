<script>
  let loading = true
  let error = null
  try {
    //let websites = await axios.get("/api/website")
    let websites = [{name: "testscript", status: "running", id: 1}]
  } catch (err) {
    
  }
  const submit = event => {}
  // const delete = (id) => {
  //     axios.delete(`/api/website/{id}`)
  // }
</script>

  <h1 class="display-01">Website Upload</h1>

  <form on:submit={submit}>
    <label for="website-input">Website Name</label>
    <input id="website-input"type="text" />
    <input type="file" />
    <button class="btn btn-primary" type="submit">Upload</button>
  </form>

