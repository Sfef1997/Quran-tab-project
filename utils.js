
export  const clickLabelEvent =ele => {
 ele.addEventListener("keydown", (e) =>  {
    if (e.key === "Enter"){
        ele.click()
     }
 })
}

export const obsererElments = (sectionElemnets)=> {
  const options = { threshold: 0.5,}
    const callback = (entries)=> {
        entries.forEach((entry)=> {
            if(entry.isIntersecting){
                entry.target.classList.add("in-view")
            }else{
                    entry.target.classList.remove("in-view")
            }
        })
    }

    const observer = new IntersectionObserver(callback,options)
  sectionElemnets.forEach((ele)=>  observer.observe(ele) )
}