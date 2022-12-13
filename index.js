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
let currmonth = date.getMonth();

if (currmonth <= 2) {
    body.style.background = 'url("./img/winter.jpg")';
    body.style.backgroundSize = 'cover';
} if (currmonth > 2) {
    body.style.background = 'url("./img/spring.jpg")';
    body.style.backgroundSize = 'cover';
} if (currmonth > 4) {
    body.style.background = 'url("./img/summer.jpg")';
    body.style.backgroundSize = 'cover';
} if (currmonth > 8) {
    body.style.background = 'url("./img/autumn.jpg")';
    body.style.backgroundSize = 'cover';
}

console.log(currmonth);

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// console.log(monthNames[0].slice(0,3));


const clanderData = () => {
    const prevMonthDay = new Date(currYear , currmonth, 1).getDay();
    const CurrentMonth =  new Date(currYear , currmonth + 1, 0).getDate();
    const lastDayOfNextMonth =  new Date(currYear, currmonth , CurrentMonth).getDay();
    const LastDateofLastMonth =  new Date(currYear, currmonth, 0).getDate();

    let result = ''
    for (let i = prevMonthDay; i > 0; i--) {
        result += `<li class= "inactive">${ LastDateofLastMonth - i + 1}</li>`    
    }
    for (let i = 1; i <= CurrentMonth; i++) {
        let Today = i === date.getDate() && currmonth === new Date().getMonth() && 
        currYear === new Date().getFullYear() ? 'active' : '';
        result += `<li id="f" class='${Today}'>${i}</li>`    
    }

    for (let i = lastDayOfNextMonth; i < 6 ; i++) {
        result += `<li class="inactive">${i - lastDayOfNextMonth + 1}</li>`
    }
    month.innerText = `${monthNames[currmonth]} ${currYear}`
    dates.innerHTML = result;


    let listBtn = document.querySelectorAll("#f");
    console.log(listBtn);
    listBtn.forEach((b) => {
        let displayDate = ""
        b.addEventListener('click',()=>{
            displayDate = `<div> ${b.innerText} / ${monthNames[currmonth].slice(0, 3) } / ${currYear} </div>`
            // console.log(monthNames[currmonth].slice(0,3));
            display.innerHTML = displayDate;
        });
    });
};

clanderData();

btn.forEach((button) =>{
    button.addEventListener('click', ()=>{
        currmonth = button.id === 'right' ? currmonth + 1 : currmonth - 1;

        if(currmonth < 0 || currmonth > 11){
            date = new Date(currYear , currmonth);
            currYear = date.getFullYear();
            currmonth = date.getMonth();
        }

        if (currmonth <= 2){
            body.style.background = 'url("./img/winter.jpg")';
            body.style.backgroundSize = 'cover';
        }if(currmonth > 2){
            body.style.background = 'url("./img/spring.jpg")';
            body.style.backgroundSize = 'cover';
        }if(currmonth > 4){
            body.style.background = 'url("./img/summer.jpg")';
            body.style.backgroundSize = 'cover';
        }if (currmonth > 8) {
            body.style.background = 'url("./img/autumn.jpg")';
            body.style.backgroundSize = 'cover';
        }
        
        clanderData();
    });
});




