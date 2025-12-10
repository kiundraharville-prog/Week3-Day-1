let url = "https://zqzaksrblkhmunxivhzn.supabase.co/rest/v1/leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxemFrc3JibGtobXVueGl2aHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4ODczOTAsImV4cCI6MjA4MDQ2MzM5MH0.rk-W1WcQyNTwbHJUXBE4bQMFA6HVIOTudyez-Cmb2AE";

async function saveUser() {
    event.preventDefault()
    let name = document.getElementById("contactName").value ;
    let email = document.getElementById("contactEmail").value ;
    let message = document.getElementById("contactMessage").value ;

    let newUser= {
        name:name,
        email:email,
        message:message,
    }
    console.log(newUser)
    let response = await fetch(url , {
        method: "POST",
        headers: {
            "apikey" : apikey,
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify(newUser)
    })
    console.log("Lead Created")

}

  
    



