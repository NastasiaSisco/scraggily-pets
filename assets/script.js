var urlBreeds = "https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=h4wf8DBUeKwOsqWiLWoU7VN06DEPb7llyE8Sk3Stb1Kyr5ecda&client_secret=KMjhTXuUMtsH7IsUq6eKKcWUkTGBA5JbrHCgil4R"
var apiKey = "h4wf8DBUeKwOsqWiLWoU7VN06DEPb7llyE8Sk3Stb1Kyr5ecda"
var secret = "KMjhTXuUMtsH7IsUq6eKKcWUkTGBA5JbrHCgil4R"

fetch("https://api.petfinder.com/v2/oauth2/token", {
    body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
})
.then(res => res.json())
.then(data => {
  console.log(data)
  fetchDog(data.access_token)
})
function fetchDog(token){
  fetch("https://api.petfinder.com/v2/animals?type=dog",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(res => res.json())
  .then(data => {
    console.log(data)
  })
}