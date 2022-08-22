const button = document.querySelector("button")
const sectionEl = document.querySelector("#section-el")
const inputEl = document.querySelector("#input-el")
const form = document.querySelector("form")


sectionEl.innerHTML = localStorage.getItem("section")



form.addEventListener("submit", (eo) =>{

   eo.preventDefault()


   const task =  ` <div class="task"> 
        <span class="icon-star icon"></span>
        <p class="task-text" >${inputEl.value}</p>
        <div>
          <span class="icon-remove icon"></span>
          <span class="icon-check icon" ></span>
        </div>
     </div>`

    sectionEl.innerHTML += task 

    inputEl.value = ""  


   localStorage.setItem("section",sectionEl.innerHTML)



})





sectionEl.addEventListener("click", (eo) => {

 

  if(eo.target.className === "icon-remove icon") 
     {
        eo.target.parentElement.parentElement.remove()
        
        localStorage.setItem("section",sectionEl.innerHTML)

    }
   else if (eo.target.className ==="icon-check icon") 
     {
      eo.target.classList.add("change-btn")
      const  check = `<span class="icon-spinner4 icon" ></span>`
      eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish")

      eo.target.parentElement.innerHTML += check 

    
      document.querySelector(".change-btn").remove()

      localStorage.setItem("section",sectionEl.innerHTML)

      
      
     } 
   else if  (eo.target.className === "icon-spinner4 icon" ) 
     {
       eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish")

       eo.target.classList.add("change-btn")

       const addcheck = `<span class="icon-check icon" ></span>`

       eo.target.parentElement.innerHTML += addcheck

       
      document.querySelector(".change-btn").remove()

      localStorage.setItem("section",sectionEl.innerHTML)
       
     } 
   else if (eo.target.className === "icon-star icon")
     {
       eo.target.classList.add("star")

       const taskdiv = eo.target.parentElement.innerHTML

       eo.target.parentElement.classList.add("delete")
       
       sectionEl.innerHTML = `<div class="task"> ${taskdiv}  </div>  ${sectionEl.innerHTML} `



       document.querySelector(".delete").remove()


       localStorage.setItem("section",sectionEl.innerHTML)
       
       
     }
   else if (eo.target.className ==="icon-star icon star")
     {
      
       sectionEl.append(eo.target.parentElement)
       eo.target.classList.remove("star")



     localStorage.setItem("section",sectionEl.innerHTML)


     }

}
)
