<script>
  let loading = true
  let error = null
  try {
    //let scripts = await axios.get("/api/nodejs")
    let scripts = [{name: "testscript", status: "running", id: 1}]
  } catch (err) {}
  const submit = event => {}
  // const delete = (id) => {
  //     axios.delete(`/api/nodejs/{id}`)
  // }
</script>

<h1 class="display-01">Website Upload</h1>

  <form on:submit={submit}>
    <label for="script-input">Script Name</label>
    <input id="script-input"type="text" />
    <input type="file" />
    <button class="btn btn-primary" type="submit">Upload</button>
  </form>

