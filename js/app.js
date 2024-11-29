
//find the nav list elment 
const navgli = document.querySelector("#nav");//get nav list
const sectionss = document.querySelectorAll(".sec");//get all sec

//creat nav item dynamically
function creatnavigation() {
    sectionss.forEach(section => { //loop through each sec
        const sectionId = section.id;//get sec id
        const listitem = document.createElement("li");//creat new list item
        const navitem = document.createElement("a");//creat a new link

        navitem.href = `#${sectionId}`;//set the link to sec 
        navitem.textContent = sectionId.charAt(0).toLocaleUpperCase() + sectionId.slice(1);//format text

        //add smoth scroll when clicking the link 
        navitem.addEventListener("click", (event) => { //add click event 
            event.preventDefault();//defult like behavior
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });//smooth scroll
            activateLink(navitem);//activate clicked link
        });
        listitem.appendChild(navitem);//append nav item to list item
        navgli.appendChild(listitem);//append list item to nav list 
    });
}
//function for activate the current section and add css class to it 
function activateSection() {
    sectionss.forEach(section => {
        const box = section.getBoundingClientRect();
        if (box.top <= 100 && box.bottom >= 100) {
            section.classList.add("active-section");
        } else {
            section.classList.remove("active-section");
        }
    });
}

//func to active the selected link 
function activateLink(selectedLink) {
    document.querySelectorAll(".nav a").forEach(link => {
        link.classList.remove("active");//remove active class
    });
    selectedLink.classList.add("active");//add active class to selected link 
}

//activate link whene scroll to sec
window.addEventListener("scroll", () => {
    sectionss.forEach(section => {
        const box = section.getBoundingClientRect();
        if (box.top <= 100 && box.bottom >= 100) {
            const sectionId = section.id;
            const currentLink = document.querySelector(`a[href="#${sectionId}"]`);
            activateLink(currentLink);//activate link when in view

        }
    });
});
//call the func
creatnavigation();
//call activateSection تحديث التمرير ليتم الاستدعاء
window.addEventListener("scroll", () => {
    activateSection();//activate section
});

