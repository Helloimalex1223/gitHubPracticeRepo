let infoContainer = document.getElementById("infoContainer");
let repoName = document.createElement("h2");
repoName.textContent = "Repository Name";
repoName.classList.add("repoName");

let repoContainer = document.createElement("div");
repoContainer.classList.add("repoContainer");

infoContainer.appendChild(repoContainer);

//append the repoName element to the repoName div
repoContainer.appendChild(repoName);


//add event listener to the GetName button to get the username from the input field
let userNameText = document.getElementById("getName");
userNameText.addEventListener("click", function() {
  let userNameValue = document.getElementById("input").value;
    
  //call the API to get the data for the username typed
    getData(userNameValue).then((data) => {
    console.log(data);
    for(let i = 0; i < data.length; i++) 
        {
            //dynamically create a div element for each repo and append it to the infoContainer div
            let repoDiv = document.createElement("p");
            repoDiv.textContent = data[i].name;
            repoContainer.appendChild(repoDiv);
        }
});
});