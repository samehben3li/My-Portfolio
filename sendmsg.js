function check(event){
    event.preventDefault();
    
    const url="http://localhost:3000/contact";
    const data = {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "subject": document.getElementById("subject").value,
        "desc": document.getElementById("desc").value,
    };
    const otherParams ={
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data),
        method: "POST",
        mode: "cors"
    };
    fetch(url,otherParams).then(function(response){
        if (response.ok){
            alert(response.json());
        } else {
            throw new Error("could not reach the API : "+response.statusText);
        }
    }).then(function (data){
        document.getElementById("btn").innerHTML = data.encoded;
    }).catch(function(error){
        document.getElementById("btn").innerHTML = error.message;
    });
    return true;
}