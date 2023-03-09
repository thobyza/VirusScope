
const navbar = document.querySelector('.navbar')
const notredame = document.querySelector('.notredame')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')

window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

notredame.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    notredame.classList.toggle('active')
})
    
navLinksLi.forEach(li => li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    notredame.classList.remove('active')
    navLinks.classList.remove('active')
}))


// Typed js
var options = {
    strings: [
        'Get live data for better decisions.', 
        'Get VirusScope.'
    ],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 10,
    backDelay: 2000,
  };
  
var typed = new Typed('#hero-titles', options);

// ------------------------ Covid-19 tracker --------------------------- 
const btn = document.querySelector(".btn-search");
btn.addEventListener("click", getData);

const opt = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': '7918ec62f7msh8dfaa2620932c4dp191229jsnaa18d4a109a6',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    },
};

function getData() {
    let countryData = document.getElementById("countryInput").value;

    fetch(
        "https://covid-193.p.rapidapi.com/statistics?country=" + countryData, opt
    )

        .then((response) => response.json())
        .then((response) => {
            console.log(response);

            let total = response.response[0].cases.total;
            let country = response.response[0].country;
            let active = response.response[0].cases.active;
            let newCase = response.response[0].cases.new;
            let recovered = response.response[0].cases.recovered;
            let tested = response.response[0].tests.total;
            let death = response.response[0].deaths.total;

            document.querySelector(".activeCases").innerHTML = active;
            document.querySelector(".newCases").innerHTML = newCase;
            document.querySelector(".recoveredCases").innerHTML = recovered;
            document.querySelector(".totalCases").innerHTML = total;
            document.querySelector(".totalDeaths").innerHTML = death;
            document.querySelector(".totalTests").innerHTML = tested;
            console.log(country);

        })
        .catch((err) => console.error(err));
}

// AOS
AOS.init();