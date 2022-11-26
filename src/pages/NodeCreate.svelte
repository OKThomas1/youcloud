<script>
  let loading = true
  let error=  null
  try {
  //let scripts = await axios.get("/api/nodejs")
  let scripts = [{name: "testscript", status:"running", id:1 }]
  }
  catch(err){
  
  }
  const submit = (event)  =>{
  
  }
  // const delete = (id) => {
  //     axios.delete(`/api/nodejs/{id}`)
  // }
  </script>
  <form on:submit={submit}>
    <label for="">Script Name</label>
    <input type="text">
    <input type="file">
    <button class="btn btn-primary" type="submit">Upload</button>
  
  </form>
 