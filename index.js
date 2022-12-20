let month = document.querySelector('.month_year p');
let dates = document.querySelector('.dates_container ul');
let btn = document.querySelectorAll('.navigator i');
let body = document.querySelector('.main_container');
let dbBody = document.querySelector('.calander');
let darkBtn = document.querySelector('.darkMode');
let display = document.querySelector('.display');

darkBtn.addEventListener('click', () => {
    darkBtn.classList.toggle('s');
    dbBody.classList.toggle('dark');
})

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const bg = () =>{
    if (currMonth <= 2) {
        body.style.background = 'url("./img/winter.jpg")';
        body.style.backgroundSize = 'cover';
    } else if (currMonth > 2 && currMonth <= 3) {
        body.style.background = 'url("./img/spring.jpg")';
        body.style.backgroundSize = 'cover';
    }else if (currMonth > 4 && currMonth <= 7) {
        body.style.background = 'url("./img/summer.jpg")';
        body.style.backgroundSize = 'cover';
    } else if (currMonth > 8 && currMonth <= 11) {
        body.style.background = 'url("./img/autumn.jpg")';
        body.style.backgroundSize = 'cover';
    }
}

bg();

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// console.log(monthNames[0].slice(0,3));


const clanderData = () => {
    const prevMonthDay = new Date(currYear , currMonth, 1).getDay();
    const CurrentMonth =  new Date(currYear , currMonth + 1, 0).getDate();
    const lastDayOfNextMonth =  new Date(currYear, currMonth , CurrentMonth).getDay();
    const LastDateofLastMonth =  new Date(currYear, currMonth, 0).getDate();

    let result = ''
    for (let i = prevMonthDay; i > 0; i--) {
        result += `<li class= "inactive">${ LastDateofLastMonth - i + 1}</li>`   
    }
    for (let i = 1; i <= CurrentMonth; i++) {
        let Today = i === date.getDate() && currMonth === new Date().getMonth() && 
        currYear === new Date().getFullYear() ? 'active' : '';
        result += `<li id="f" class='${Today}'>${i}</li>`    
    }

    for (let i = lastDayOfNextMonth; i < 6 ; i++) {
        result += `<li class="inactive">${i - lastDayOfNextMonth + 1}</li>`
    }
    month.innerText = `${monthNames[currMonth]} ${currYear}`
    dates.innerHTML = result;


    let listBtn = document.querySelectorAll("#f");
    listBtn.forEach((b) => {
        let displayDate = ""
        b.addEventListener('click',()=>{
            displayDate = `<div> ${b.innerText} / ${monthNames[currMonth].slice(0, 3) } / ${currYear} </div>`
            display.innerHTML = displayDate;
        });
    });
};
clanderData();

btn.forEach((button) =>{
    button.addEventListener('click', ()=>{
        currMonth = button.id === 'right' ? currMonth + 1 : currMonth - 1;

        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear , currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }
        bg();
        clanderData();
    });
});




