import { clickLabelEvent, obsererElments } from "./utils"

let questionLabels = document.querySelectorAll(".faq__question")
const sectionElments = document.querySelectorAll("section")

console.log(questionLabels)

questionLabels.forEach((ele)=>  clickLabelEvent(ele))
obsererElments(sectionElments)
