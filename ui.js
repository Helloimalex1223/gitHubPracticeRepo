let infoContainer = document.getElementById("infoContainer");
let repoTitleDiv = document.createElement("div");
repoTitleDiv.classList.add("repoTitleDiv");

let repoContainer = document.createElement("div");
repoContainer.classList.add("repoContainer");

// let statsContainer = document.createElement("div");
// statsContainer.classList.add("statsContainer");

// let testP = document.createElement("p");
// testP.textContent = "This is a test paragraph";
// statsContainer.appendChild(testP);




// infoContainer.appendChild(statsContainer);
infoContainer.appendChild(repoContainer);

//add event listener to the GetName button to get the username from the input field
let userNameText = document.getElementById("getName");
userNameText.addEventListener("click", function() {
  let userNameValue = document.getElementById("input").value;
    

  let repoSectionTitle = document.getElementById("repoTitle");
  repoSectionTitle.innerHTML += " for " + userNameValue;
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

            let repoWatchers = document.createElement("p");
            repoWatchers.classList.add("repoWatchers");
            repoWatchers.textContent = "Watchers: " + data[i].watchers_count;
            
            //append the repoForks element to the repoDiv
            repoDiv.appendChild(repoName);
            repoDiv.appendChild(repoForks);
            repoDiv.appendChild(repoWatchers);

            //set the text content of the repoName element to the name of the repo
            repoName.textContent = "Repo name: " + data[i].name;
            repoContainer.appendChild(repoDiv);


            //total the number of forks, watchers, and repos. Append them to the repoStats div.
            let totalForks = 0;
            let totalWatchers = 0;
            let totalRepos = data.length;
            let totalStars = 0;
            totalStars += data[i].stargazers_count;
            totalForks += data[i].forks_count;
            totalWatchers = data[i].watchers_count;

            let repoCount = document.getElementById("repoCount");
            let forkCount = document.getElementById("forkCount");
            let watcherCount = document.getElementById("watcherCount");
            let starCount = document.getElementById("starCount");
            
            starCount.textContent = totalStars;
            repoCount.textContent = totalRepos;
            forkCount.textContent = totalForks;
            watcherCount.textContent = totalWatchers;

}})
.catch((error) => {
    console.log(error);
    let errorText = document.createElement("p");
    errorText.textContent = error;
    infoContainer.appendChild(errorText);
  })

});