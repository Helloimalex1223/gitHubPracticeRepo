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
            let repoDiv = document.createElement("div");
            repoDiv.classList.add("repoDiv");

            let repoName = document.createElement("p");
            repoName.classList.add("repoName");


            let repoForks = document.createElement("p");
            repoForks.classList.add("repoForks");
            repoForks.textContent = "Forks: " + data[i].forks_count;

            //append the repoForks element to the repoDiv
            repoDiv.appendChild(repoName);
            repoDiv.appendChild(repoForks);

            //set the text content of the repoName element to the name of the repo
            repoName.textContent = "Repo name: " + data[i].name;
            repoContainer.appendChild(repoDiv);
        }
});
});