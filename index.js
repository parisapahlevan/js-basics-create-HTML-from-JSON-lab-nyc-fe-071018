document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  
  const titanicButton = document.getElementById("Titanic")
const titanicButton = document.getElementById("Terminator 2")
  titanicButton.addEventListener("click", (event) =>{
    //do something here
  updateHTMLContent("Titanic")
})
terminatorButton.addEventListener("click", (event) => {
//do somethimg here
updateHTMLContent("Terminator")
})
});

function updateHTMLContent(movie){
  let title = document.getElementById("title")
  let director = document.getElementById("director")
  let genre =  document.getElementById("genre")
  let filmRating = document.getElementById("filmRating")
  let poster = document.getElementById("poster")
  let audienceScore = document.getElementById("audienceScore")
  let description = document.getElementById("description")
  let reviews = document.getElementById("reviews")
  
  
  
 titanic.innerHTML = movies["Titanic"].title
 director.innerHTML = movies["Titanic"].director
 genre.innerHTML = movies["Titanic"].genre
 filmRating.innerHTML = movies["Titanic"].filmRating
 poster.setAttribute("src", currentMovie.poster)
 description.innerHTML = movie["Titanic"].description
 audienceScore.innerHTML = movie["Titanic"].audienceScore
 let castInnerHTML = "<ul>"
 let reviewsInnerHTML = "<div>"
 
 for (let i = 0; currentMovie.cast.length; i++){
   let role = currentMovie.cast[i].role
   let actor = currentMovie.cast[i].actor
   castInnerHTML += ("<li>" + role + ": " + actor + "</li")
   
 }
 castInnerHTML += "</ul>"
 cast.innerHTML = castInnerHTML
 reviewsInnerHTML
 }
