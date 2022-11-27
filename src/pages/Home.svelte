<script>
  import {Router, Link, Route, navigate} from "svelte-routing"
  import axios from "axios"
  import Cookies from "js-cookie"
  import Fa from 'svelte-fa'
  import { faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons'
  import { faNodeJs} from '@fortawesome/free-brands-svg-icons'

  let loading = true
  let error = null
  let user = null
  axios
    .get("/api/self", {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}})
    .then(res => {
      user = res.data.user
      loading = false
    })
    .catch(err => {
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
  <p class="display-2 mb-5" >Hello {user.username}</p>
  
  <div class="container text-justify mb-5">
    <p>You Have {user.nodejsAvailable} Node Scripts Available</p>
    <p>You Have {user.mysqlAvailable} MySQL Databases Available</p>
    <p>You Have {user.websitesAvailable} Websites Available</p>
  </div>

  <div class="row" >
    <div class="col-md-4">
      <div class="card border-primary mb-3" style="cursor: pointer;"  on:click={()=>navigate("/nodejs")} >
        <div class="card-header"><Fa icon={faNodeJs} size="2.5x" /></div>
        <div class="card-body">
          <h4 class="card-title">Node</h4>
          <p class="card-text">Run your NodeJS express servers here. Start and stop your servers whenever you want through the UI.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card border-primary mb-3" style="cursor: pointer;"  on:click={()=>navigate("/mysql")} >
          <div class="card-header"><Fa icon={faDatabase} size="2.5x" /></div>
          <div class="card-body">
            <h4 class="card-title">MySQL</h4>
            <p class="card-text">Create a MySQL database and user. Send queries through the built in UI or connect remotely.</p>
          </div>
        </div>
    </div>
    <div class="col-md-4">
      <div class="card border-primary mb-3" style="cursor: pointer;"  on:click={()=>navigate("/website")} >
          <div class="card-header"><Fa icon={faGlobe} size="2.5x" /></div>
          <div class="card-body">
            <h4 class="card-title">Website Hosting</h4>
            <p class="card-text">Host your static site or single page application through the website hosting service.</p>
          </div>
        </div>
    </div>
  </div>
{/if}
