<script>
  import {Router, Link, Route} from "svelte-routing"
	import axios from "axios"
	import Cookies from "js-cookie"
  let loading = true
  let error = null
  let user = null
  axios.get("/api/self", {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}).then(res => {
		user = res.data.user
		loading = false
	}).catch(err => {
		console.error(err)
		error = "Could not get user"
		loading = false
	})

</script>

{#if loading}
  <div class="d-flex justify-content-center align-items-center">
    <div class="my-5 spinner-border text-primary" style="width: 10rem; height: 10rem;" />
  </div>
{:else if error}
  <h1>{error}</h1>
{:else}
    <p class="display-2" style="height:20rem;">Hello {user.username}</p>

  <div class="row bg-dark">
    <div class="col-md-4">
       <Link to="nodejs">
        <div class="card border-primary mb-3">
          <div class="card-header">Icon</div>
          <div class="card-body">
            <h4 class="card-title">Node</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
    </div>
    <div class="col-md-4">
       <Link to="mysql">
        <div class="card border-primary mb-3">
          <div class="card-header">Icon</div>
          <div class="card-body">
            <h4 class="card-title">MySQL</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
    </div>
    <div class="col-md-4">
       <Link to="website">
        <div class="card border-primary mb-3">
          <div class="card-header">Icon</div>
          <div class="card-body">
            <h4 class="card-title">Website</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
{/if}
