<script>
  import {Router, Link, Route} from "svelte-routing"
  import Home from "./pages/Home.svelte"
  import Nodejs from "./pages/Node.svelte"
  import NodeCreate from "./pages/NodeCreate.svelte"
  import mySQL from "./pages/mySQL.svelte"
  import mySQLCreate from "./pages/mySQLCreate.svelte"
  import Website from "./pages/Website.svelte"
  import WebsiteCreate from "./pages/WebsiteCreate.svelte"

  import logo from "./assets/logo.png"
	import axios from "axios"
  import MySqlItem from "./pages/mySQLItem.svelte"

	axios.defaults.baseURL = "http://localhost:8000"

  export let url = ""

</script>


<Router {url}>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link to="/"><img src="https://cdn.discordapp.com/attachments/1041569265813291048/1045169599433416744/logocroppped.png" alt="youCloud" /></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
    </div>
  </nav>
      
  <div class="container">
    <Route path="nodejs" component={Nodejs} />
    <Route path="nodecreate" component={NodeCreate} />
    <Route path="mysql" component={mySQL} />
    <Route path="mysqlcreate" component={mySQLCreate} />
    <Route path="mysql/:id" component={MySqlItem} let:params />
    <Route path="website" component={Website} />
    <Route path="websitecreate" component={WebsiteCreate} />
    <Route path="/"><Home /></Route>
  </div>

</Router>
