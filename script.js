/* ==========================================
   MATERIA MATERIAL SCIENCE WEBSITE
   JAVASCRIPT ENGINE
========================================== */


/* ==========================================
   MATERIAL DATABASE
========================================== */


const materials = [

{
    name: "Nickel",
    category: "Metal",
    description:
    "A corrosion-resistant transition metal used in batteries, alloys, and electrochemical systems.",
    applications:
    [
        "Nickel batteries",
        "Superalloys",
        "Electroplating",
        "Catalysts"
    ]
},


{
    name: "Silicon",
    category: "Semiconductor",
    description:
    "The foundation of modern electronics due to its controllable electrical properties.",
    applications:
    [
        "Computer chips",
        "Solar panels",
        "Sensors",
        "Integrated circuits"
    ]
},


{
    name: "Titanium",
    category: "Metal",
    description:
    "A lightweight and extremely strong metal with excellent corrosion resistance.",
    applications:
    [
        "Aircraft",
        "Medical implants",
        "Spacecraft",
        "Sports equipment"
    ]
},


{
    name: "Aluminum",
    category: "Metal",
    description:
    "A lightweight recyclable metal with excellent strength-to-weight ratio.",
    applications:
    [
        "Vehicles",
        "Aircraft",
        "Electronics",
        "Construction"
    ]
},


{
    name: "Steel",
    category: "Metal",
    description:
    "One of the most important engineering materials due to its strength and affordability.",
    applications:
    [
        "Buildings",
        "Bridges",
        "Machines",
        "Tools"
    ]
},


{
    name: "Copper",
    category: "Metal",
    description:
    "A highly conductive metal essential for electrical systems.",
    applications:
    [
        "Wiring",
        "Motors",
        "Electronics",
        "Power systems"
    ]
},


{
    name: "Graphene",
    category: "Nanomaterial",
    description:
    "A one-atom-thick carbon material with exceptional strength and conductivity.",
    applications:
    [
        "Flexible electronics",
        "Sensors",
        "Batteries",
        "Nanotechnology"
    ]
},


{
    name: "Carbon Fiber",
    category: "Composite",
    description:
    "A lightweight composite known for high strength and stiffness.",
    applications:
    [
        "Aircraft",
        "Racing vehicles",
        "Sports equipment",
        "Robotics"
    ]
},


{
    name: "Lithium Materials",
    category: "Energy",
    description:
    "Materials used in rechargeable battery technology.",
    applications:
    [
        "Electric vehicles",
        "Phones",
        "Energy storage",
        "Grid batteries"
    ]
},


{
    name: "Ceramics",
    category: "Ceramic",
    description:
    "Hard materials capable of surviving high temperatures and harsh environments.",
    applications:
    [
        "Engines",
        "Electronics",
        "Medical implants",
        "Coatings"
    ]
},


{
    name: "Polymers",
    category: "Polymer",
    description:
    "Large molecular materials used for lightweight and flexible applications.",
    applications:
    [
        "Plastics",
        "Medical devices",
        "Packaging",
        "Composites"
    ]
}


];








/* ==========================================
   PAGE INITIALIZATION
========================================== */


document.addEventListener(
"DOMContentLoaded",
function(){


console.log(
"Materia Website Loaded"
);



initializeAnimations();


initializeInteractions();



});
/* ==========================================
   MATERIAL CARD GENERATOR
========================================== */


function displayMaterials(materialList = materials){


const container =
document.querySelector(".material-grid");



if(!container){

return;

}




container.innerHTML = "";




materialList.forEach(material => {



const card =
document.createElement("div");



card.className =
"material-card";





card.innerHTML = `


<h3>
${material.name}
</h3>


<p>
${material.description}
</p>



<span>
${material.category}
</span>



<h4>
Applications:
</h4>



<ul>

${material.applications
.map(app => `<li>${app}</li>`)
.join("")}

</ul>



`;



container.appendChild(card);



});



}








/* ==========================================
   SEARCH SYSTEM
========================================== */


function initializeSearch(){



const searchInput =
document.querySelector("#materialSearch");



if(!searchInput){

return;

}





searchInput.addEventListener(
"input",
function(){



const searchValue =
this.value.toLowerCase();




const filteredMaterials =
materials.filter(material =>



material.name
.toLowerCase()
.includes(searchValue)



||
material.category
.toLowerCase()
.includes(searchValue)



);



displayMaterials(filteredMaterials);



});



}








/* ==========================================
   CATEGORY FILTER SYSTEM
========================================== */


function initializeFilters(){



const buttons =
document.querySelectorAll(
".filters button"
);



if(buttons.length === 0){

return;

}




buttons.forEach(button => {



button.addEventListener(
"click",
function(){



const category =
this.innerText;



if(category === "All"){


displayMaterials();


return;


}





const filtered =
materials.filter(material =>


material.category
.includes(category)


);



displayMaterials(filtered);



});



});



}








/* ==========================================
   INITIALIZE INTERACTIONS
========================================== */


function initializeInteractions(){



displayMaterials();


initializeSearch();


initializeFilters();



}
/* ==========================================
   SCROLL ANIMATION SYSTEM
========================================== */


function initializeAnimations(){



const elements =
document.querySelectorAll(

".material-card," +
".science-card," +
".technology-card," +
".research-card," +
".challenge-card," +
".manufacturing-card," +
".testing-card," +
".resource-card," +
".career-card"

);





const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



entry.target.style.opacity =
"1";



entry.target.style.transform =
"translateY(0)";



}



});


},


{

threshold:
0.15

}



);






elements.forEach(element=>{



element.style.opacity =
"0";



element.style.transform =
"translateY(40px)";



element.style.transition =
"all .6s ease";



observer.observe(element);



});



}









/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */


function initializeNavbar(){



const navbar =
document.querySelector(".navbar");



if(!navbar){

return;

}




window.addEventListener(
"scroll",
()=>{



if(window.scrollY > 50){



navbar.style.background =
"rgba(255,255,255,0.95)";



navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.08)";



}

else{



navbar.style.background =
"rgba(255,255,255,0.8)";



navbar.style.boxShadow =
"none";



}



});



}








/* ==========================================
   ATOMIC MODEL INTERACTION
========================================== */


function initializeAtom(){



const atom =
document.querySelector(".atomic-model");



if(!atom){

return;

}





atom.addEventListener(
"mousemove",
(event)=>{



const rect =
atom.getBoundingClientRect();



const x =
event.clientX - rect.left;



const y =
event.clientY - rect.top;



const moveX =
(x - rect.width/2) / 15;



const moveY =
(y - rect.height/2) / 15;




atom.style.transform =
`

translate(${moveX}px,${moveY}px)

`;



});






atom.addEventListener(
"mouseleave",
()=>{



atom.style.transform =
"translate(0,0)";



});



}








/* ==========================================
   SMOOTH PAGE NAVIGATION
========================================== */


function initializeSmoothScroll(){



const links =
document.querySelectorAll(
'a[href^="#"]'
);




links.forEach(link=>{



link.addEventListener(
"click",
function(event){



const target =
document.querySelector(
this.getAttribute("href")
);



if(target){



event.preventDefault();



target.scrollIntoView({

behavior:
"smooth"

});



}



});



});



}








/* ==========================================
   START EXTRA FEATURES
========================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{



initializeNavbar();


initializeAtom();


initializeSmoothScroll();



});
/* ==========================================
   MATERIAL STATISTICS COUNTER
========================================== */


function initializeCounters(){


const counters =
document.querySelectorAll(".stat h2");



counters.forEach(counter=>{


const target =
counter.innerText;



if(isNaN(target)){

return;

}



let current = 0;



const speed = 40;



const updateCounter = ()=>{


if(current < Number(target)){


current++;


counter.innerText =
current + "+";


setTimeout(
updateCounter,
speed
);


}



else{


counter.innerText =
target + "+";


}



};



updateCounter();



});


}









/* ==========================================
   MATERIAL COMPARISON FOUNDATION
========================================== */



let comparisonList = [];





function addToComparison(materialName){



const material =
materials.find(
item =>
item.name === materialName
);



if(!material){

return;

}





if(
comparisonList.length >= 2
){

console.log(
"Maximum of two materials allowed"
);


return;

}




comparisonList.push(material);



console.log(
"Comparison:",
comparisonList
);



}









function compareMaterials(){



if(comparisonList.length < 2){


console.log(
"Select two materials first"
);



return;


}




const first =
comparisonList[0];



const second =
comparisonList[1];





return {


materialOne:
first.name,


materialTwo:
second.name,


categories:

[
first.category,
second.category
]



};



}








/* ==========================================
   RANDOM MATERIAL FEATURE
========================================== */


function randomMaterial(){



const index =
Math.floor(

Math.random()
*
materials.length

);



return materials[index];



}









/* ==========================================
   SEARCH HIGHLIGHT FEATURE
========================================== */


function highlightSearch(text, search){



if(!search){

return text;

}




const regex =
new RegExp(
search,
"gi"
);




return text.replace(

regex,

match =>
`<mark>${match}</mark>`

);



}









/* ==========================================
   PERFORMANCE LOG
========================================== */


function websiteStatus(){



console.log(

`
================================

Materia System Online

Materials Loaded:
${materials.length}

Interactive Features:
Enabled

================================
`

);



}








/* ==========================================
   FINAL WEBSITE STARTUP
========================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


initializeCounters();


websiteStatus();



});