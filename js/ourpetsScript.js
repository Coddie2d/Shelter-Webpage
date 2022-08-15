
import * as module from "./differentFunctions.js";
import { amountOfCards,countCards } from "./differentFunctions.js";
// console.log(info.name)
// info.forEach(item => console.log(item.name))
module.burgerClick();
// module.CardAdd('.paginationCards');



    

let middle = document.querySelector('.middle');
let itemsOnPage; 
    if(window.innerWidth > 1000){
        itemsOnPage = 8;
    }
    else if(window.innerWidth > 501 && window.innerWidth < 1000){
        itemsOnPage = 6;
    }
    else if(window.innerWidth > 300 && window.innerWidth < 500){
        itemsOnPage = 3;
    }

let count = 0;
for(let key of module.info){
    count++;
}
let countOfButtons = Math.ceil(count / itemsOnPage);
console.log(itemsOnPage)
for(let i = 1; i <= countOfButtons; i++){
    middle.insertAdjacentHTML('beforeend',`
        <li class="page-item "><a class="page-link PaginationNumber" href="#">${i}</a></li>
    `)
}




let cards = document.querySelector('.paginationCards');
let arrows = document.querySelectorAll('.paginationButtons .arrows');
let buttonsWithNumber = document.querySelectorAll('.paginationButtons .PaginationNumber')
let buttonsWithArrows = document.querySelectorAll('.paginationButtons .arrows');
showPage(buttonsWithNumber[0]);

//переключение по цифрам
for(let key of buttonsWithNumber){
    key.addEventListener('click',function(){
        showPage(this);
        checkBound(key.textContent-1);
    })
}


function showPage(item){
    
   
    let active = document.querySelector('.page-item a.active');
    if(active){
        active.classList.remove('active');
    }
    let pageNum = item.textContent;
    console.log(active)
    item.classList.add('active');
    console.log(item);  
    
    
    console.log(pageNum);

    let start = (pageNum-1)*itemsOnPage
    let end = start+itemsOnPage;

    let notes = module.info.slice(start,end)

    cards.innerHTML = '';
    for(let note of notes){

        document.querySelector('.paginationCards').insertAdjacentHTML('beforeend',
        `<div class="card ${!document.querySelector('.pagination') ? 'swiper-slide' : ''}">
        <img src="${note.img}" alt="" class="imgPet ">
        <p class="NameOfPet georgia" >${note.name}</p>
        <button class="bnt FriendsWhoLookingHomeCardButton georgia learnMoreBnt">Learn more</button>
        </div>`)
    }

}
let previous = document.querySelector('.previous');
let next = document.querySelector('.next '); 
let first = document.querySelector('.first '); 
let last = document.querySelector('.last'); 

function checkBound(pageNum){
    if(pageNum == buttonsWithNumber[`${0}`].textContent-1){
        first.classList.add('disabled');
        previous.classList.add('disabled');
        console.log('begin')
    }else if(pageNum == buttonsWithNumber[`${buttonsWithNumber.length-1}`].textContent-1){
        next.classList.add('disabled');
        last.classList.add('disabled');
        console.log('end')
    }
    if(pageNum >= 1){
        first.classList.remove('disabled');
        previous.classList.remove('disabled');    
    }
     if(pageNum < buttonsWithNumber[`${buttonsWithNumber.length-1}`].textContent-1){
        next.classList.remove('disabled');
        last.classList.remove('disabled');
    }
}

let pageNum = +document.querySelector('.middle .page-item .active').textContent-1;
buttonsWithArrows.forEach(item1 =>{
    checkBound(pageNum)
    item1.addEventListener('click',function(){
         
        if(item1.classList.contains('previous') && !item1.classList.contains('disabled')){
            pageNum--;
            //console.log(pageNum)
            showPage(buttonsWithNumber[`${pageNum}`]);
            checkBound(pageNum);
        }
        
        if(item1.classList.contains('next') && !item1.classList.contains('disabled')){
            pageNum++;
            //console.log(pageNum)
            showPage(buttonsWithNumber[`${pageNum}`]);
            checkBound(pageNum);  
        }
       
        if(item1.classList.contains('first') && !item1.classList.contains('disabled')){
            pageNum = buttonsWithNumber[`${0}`].textContent-1;
            showPage(buttonsWithNumber[`${0}`]);
            checkBound(pageNum);
            //console.log(pageNum)
           
        }
        if(item1.classList.contains('last') && !item1.classList.contains('disabled')){
            pageNum = buttonsWithNumber[`${buttonsWithNumber.length-1}`].textContent-1;
            showPage(buttonsWithNumber[`${buttonsWithNumber.length-1}`]);
            checkBound(pageNum);
            //console.log(pageNum)
        }
    });
})

let learnMoreBnt,petInfo,times,petInfoBg,closeName;


 learnMoreBnt = document.querySelectorAll('.learnMoreBnt');
 petInfo = document.querySelector('.petInfo');
 times = document.querySelector('.times');
 petInfoBg = document.querySelector('.petInfoBg');
 closeName;


    learnMoreBnt.forEach(item => {
       
            
        item.addEventListener('click', function (e) {
                
                let target = e.target;

                closeName = (target.closest('div').querySelector('.NameOfPet').textContent);
                petInfo.classList.toggle('active');
                times.classList.toggle('active');
                petInfoBg.classList.toggle('active');
                document.body.classList.toggle('lock');
                function appearingCard() {
                    for (let options of module.info) {
        
                        if (closeName == options.name) {
        
                            petInfo.insertAdjacentHTML("afterbegin", `
                                       <div class="petInfoInner">    
                                       <div class="petInfoLeft">
                                           <img src="${options.img}" alt="" class="petInfoLeftImg">
                                       </div>
                                       <div class="petInfoRight">
                                           <h3 class="petInfoRightH3 georgia">${options.name}</h3>
                                           <h4 class="petInfoRightH4 georgia">${options.breed}</h4>
                                           <h5 class="petInfoRightH5 georgia">${options.description}</h5>
                                       <ul class="petInfoRightUl">
                                           <li class=""><span class="petInfoRightLi georgia"><b>Age: </b>${options.age > 1 ? options.age + " years" : options.age + "year"}</span></li>
                                           <li class=""><span class="petInfoRightLi georgia"><b>Inoculations: </b>${options.Inoculations}</span></li>
                                           <li class=""><span class="petInfoRightLi georgia"><b>Diseases: </b>${options.Diseases}</span></li>
                                           <li class=""><span class="petInfoRightLi georgia"><b>Parasites: </b>${options.Parasites}</span></li>
                                       </ul>
                                       
                                       </div>
                                   </div>`);
                        }
        
                    }
                }
                appearingCard();
                module.closePetInfo();
           
        
            })
            
        })









// pagination



// function pagination() {
//     console.log(countCards - amountOfCards);

//     if(window.innerWidth > 1000){
//         let amountOfCardOnPage = Math.ceil(countCards / 8);
//         for(let i = 1; i <= amountOfCardOnPage; i++){
//             document.querySelector('.paginationPagesHrefs').insertAdjacentHTML("afterbegin",`
//                 <li class="page-item "><a class="page-link PaginationNumber" href="#">${i}</a></li>
//             `)
//         }
//         document.querySelector('.pagination').classList.add('pagination-lg');
        
//     }
//     if(window.innerWidth < 1000 && window.innerWidth > 661){
//         let amountOfCardOnPage = Math.ceil(countCards / 6);
//         for(let i = 1; i <= amountOfCardOnPage; i++){
//             document.querySelector('.paginationPagesHrefs').insertAdjacentHTML("afterbegin",`
//                 <li class="page-item "><a class="page-link PaginationNumber" href="#">${i}</a></li>
//             `)
//         }
        
//     }
//     if(window.innerWidth < 660){
//         let amountOfCardOnPage = Math.ceil(countCards / 3);
//         for(let i = 1; i <= amountOfCardOnPage; i++){
//             document.querySelector('.paginationPagesHrefs').insertAdjacentHTML("afterbegin",`
//                 <li class="page-item "><a class="page-link PaginationNumber" href="#">${i}</a></li>
//             `)
//         }
//     }
// }
// pagination()


// let catchButtonPagination = document.querySelectorAll('.PaginationNumber');



// catchButtonPagination.forEach(item =>{
//     item.addEventListener('click',function(e){
//         let indexOfCardOnNextPage;
//         if(e.target.textContent == 1){ indexOfCardOnNextPage = 0}
//         indexOfCardOnNextPage = (e.target.textContent-1)*amountOfCards;
//         console.log(indexOfCardOnNextPage)
//     });
// })




    
