<script>
  import {Router, Link, Route} from "svelte-routing"

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
    <div class="my-5 spinner-border text-primary" style="width: 10rem; height: 10rem;" />
  </div>
{:else if error}
  <h1>{error}</h1>
{:else}
  <div class="container mt-5 d-flex justify-content-center">
    <p class="display-2">Hello {user.username}</p>
  </div>
  <div class="row bg-primary">
    <div class="col-md-4">
       <Link to="nodejs">
        <div class="m-4 card">
          <div class="card-header">
            <h2 class="h2 card-title">Node</h2>
          </div>
        </div>
      </Link>
    </div>
    <div class="col-md-4">
       <Link to="nodejs">
        <div class="m-4 card">
          <div class="card-header">
            <h2 class="h2 card-title">mySQL</h2>
          </div>
        </div>
      </Link>
    </div>
    <div class="col-md-4">
       <Link to="nodejs">
        <div class="m-4 card">
          <div class="card-header">
            <h2 class="h2 card-title">Website</h2>
          </div>
        </div>
      </Link>
    </div>
  </div>
{/if}
