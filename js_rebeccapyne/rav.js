
let form, list, image, span
window.addEventListener("load",()=>{
    form = document.querySelector("#form")
    list = document.querySelector("#list")
    image = document.querySelector("#userimage")
    span = document.querySelector("#span")
   
    form.addEventListener("submit",(event)=>{

            event.preventDefault()
            const formData = new FormData(form)
            console.log("formData", formData)
            const data = Object.fromEntries(formData)
            console.log("data", data)
            const username = data.username
            fetch(`https://api.github.com/users/${data.username}`)
            .then((response)=>{
             return response.json()
            })
            .then((data)=>{
                const {avatar_url, public_repos, followers} = data
                image.setAttribute("src", avatar_url)
                span.innerHTML = username
                const li1 = document.createElement('li')
                li1.innerHTML = `Public Repos: ${public_repos}`
                const li2 = document.createElement('li')
                li2.innerHTML = `Followers: ${followers}`
                list.innerHTML = ""
                list.appendChild(li1)Jac
                list.appendChild(li2)
                console.log("response", data)
            })
    })
})

<script type="text/javascript" src="//js.ravelry.com/javascripts/dug.js"></script><!-- you can customize this template -->
<script id="dugjs-template" type="text/x-dug-template">
  {{#projects}}
    <div class="rav_project">
      <a class="rav_title" href="{{url}}">{{name}}</a>
      <a class="rav_photo rav_photo_count_{{photoCount}}" href="#"><img src="{{thumbnail.src}}"></a>

      </div>
    </div>
  {{/projects}}
</script>
<script>
    dug({
      cacheExpire: 0,
      endpoint: "http://api.ravelry.com/projects/BexxP/progress.json?key=3974d7dffe72f0c77a6ec26beeb36d87025fcae9&status=in-progress&notes=false",
      template: '#dugjs-template'
    });
  
  </script>