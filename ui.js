let infoContainer = document.getElementById("infoContainer");
let repoTitleDiv = document.createElement("div");
repoTitleDiv.classList.add("repoTitleDiv");

let repoContainer = document.createElement("div");
repoContainer.classList.add("repoContainer");

let errorText = document.createElement("p");

let totalForks = 0;
let totalWatchers = 0;
let totalStars = 0;

infoContainer.appendChild(repoContainer);

userNameField = document.getElementById("input");

//add event listener to the GetName button to get the username from the input field
let userNameText = document.getElementById("getName");
userNameText.addEventListener("click", function() {
  let userNameValue = userNameField.value;
  //clear the input field after getting the value
  userNameField.value= "";

  let repoSectionTitle = document.getElementById("repoTitle");
  repoSectionTitle.innerHTML = "Repository information for " + userNameValue;
  //call the API to get the data for the username typed
    getData(userNameValue).then((data) => {
    console.log(data);

    errorText.textContent = "";
    //if there is already a child node in the repoContainer, remove it before appending new ones
    if(repoContainer.hasChildNodes())
    {
      repoContainer.replaceChildren();

      //reset the star/watcher/fork/repo count to 0 before appending new ones
      totalForks = 0;
      totalWatchers = 0;
      totalStars = 0;
    }

    //add styles after the repoContainer is built
    repoContainer.style.padding = "2rem";
    repoContainer.style.border = "1px solid black";


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
            
            
            let repoStars = document.createElement("p");
            repoWatchers.classList.add("repoStars");
            repoStars.textContent = "Stars: " + data[i].stargazers_count;

            //append the repoForks element to the repoDiv
            repoDiv.appendChild(repoName);
            repoDiv.appendChild(repoForks);
            repoDiv.appendChild(repoWatchers);
            repoDiv.appendChild(repoStars);

            //set the text content of the repoName element to the name of the repo
            repoName.textContent = "Repo name: " + data[i].name;
            repoContainer.appendChild(repoDiv);


            //total the number of forks, watchers, and repos. Append them to the repoStats div.
            let totalRepos = data.length;
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
      if(repoContainer.hasChildNodes())
    {
      repoContainer.replaceChildren();

      //reset the star/watcher/fork/repo count to 0 before appending new ones
      totalForks = 0;
      totalWatchers = 0;
      totalStars = 0;
    }
    console.log(error);
    errorText.textContent = error;
    repoContainer.appendChild(errorText);
  })

});