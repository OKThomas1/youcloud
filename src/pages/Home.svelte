<script>
  let loading = true
  let error = null
  let user = null
  try {
    //const user = await axios.get("/api/user")
    user = {username: "Thomas", nodejsleft: 1, mysqlleft: 1, webstiesleft: 1}
    loading = false
  } catch (err) {
    error = "could not get data"
    loading = false
  }
</script>

{#if loading}
<div class="d-flex justify-content-center align-items-center">
  <div class="my-5 spinner-border text-primary" style="width: 10rem; height: 10rem;"></div>
</div>
{:else if error}
  <h1>{error}</h1>
{:else}
  <div class="container mt-5 d-flex justify-content-center">
    <p class="display-2">Hello {user.username}</p>
  </div>
  <div class="row bg-primary">
    <div class="col-md-4 card h1">Node</div>
    <div class="col-md-4 card h1">mySQL</div>
    <div class="col-md-4 card h1">Website</div>

  </div>
{/if}
