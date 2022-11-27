<script>
  import {Router, Link, Route} from "svelte-routing"
  import Home from "./pages/Home.svelte"
  import Nodejs from "./pages/Node.svelte"
  import NodeCreate from "./pages/NodeCreate.svelte"
  import mySQL from "./pages/mySQL.svelte"
  import mySQLCreate from "./pages/mySQLCreate.svelte"
  import Website from "./pages/Website.svelte"
  import WebsiteCreate from "./pages/WebsiteCreate.svelte"
	import axios from "axios"
  import MySqlItem from "./pages/mySQLItem.svelte"

	axios.defaults.baseURL = window.location.origin 

  export let url = ""

</script>


<Router {url}>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <div class="container">
      <Link to="/"><img src="https://cdn.discordapp.com/attachments/1041569265813291048/1045169599433416744/logocroppped.png" alt="youCloud" /></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a href="/logout/" class="navbar-brand">Logout
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  

      
  <div class="container text-center">
    <Route path="nodejs" component={Nodejs} />
    <Route path="nodecreate" component={NodeCreate} />
    <Route path="mysql" component={mySQL} />
    <Route path="mysqlcreate" component={mySQLCreate} />
    <Route path="mysql/:id" let:params><MySqlItem id="{params.id}"/> </Route>
    <Route path="website" component={Website} />
    <Route path="websitecreate" component={WebsiteCreate} />
    <Route path="/"><Home /></Route>
  </div>

</Router>
