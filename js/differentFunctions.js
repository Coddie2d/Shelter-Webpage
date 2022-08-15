// import {amountOfCards} from "./js.js"




export let info = [
    {img:"/img/katrine.png",name:'Katrine',breed:'Cat - British Shorthair',description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",age:11,Inoculations:'none',Diseases:'none',Parasites:'none'},
    {img:"/img/Charly.png",name:'Charley',breed:'Dog - Jack Russell Terrier',description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",age:5,Inoculations:'none',Diseases:'none',Parasites:'none'},
    {img:"/img/jennifer.png",name:'Jennifer',breed:'Dog - Labrador',description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",age:7,Inoculations:'none',Diseases:'none',Parasites:'none'},
    {img:"/img/woody.png",name:'Woody',breed:'Dog - Golden Retriever',description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",age:1.5,Inoculations:'none',Diseases:'none',Parasites:'none'},
    {img:"/img/timmy.png",name:'Timmy',breed:'Cat - British Shorthair',description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",age:2,Inoculations:'none',Diseases:'none',Parasites:'none'},
    {img:"/img/sophia.png",name:'Sophia',breed:'Dog - Shih tzu',description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",age:3,Inoculations:'none',Diseases:'none',Parasites:'none'},
    {img:"/img/Freddie.png",name:'Freddie',breed:'Cat - British Shorthair',description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",age:1,Inoculations:'none',Diseases:'none',Parasites:'none'}, 
    {img:"/img/Scarlet.png",name:'Scarlet1',breed:'Dog - Jack Russell Terrier',description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:2,Inoculations:'none',Diseases:'none',Parasites:'none'},
    {img:"/img/Scarlet.png",name:'Scarlet2',breed:'Dog - Jack Russell Terrier',description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:2,Inoculations:'none',Diseases:'none',Parasites:'none'},
    {img:"/img/Scarlet.png",name:'Scarlet3',breed:'Dog - Jack Russell Terrier',description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:2,Inoculations:'none',Diseases:'none',Parasites:'none'},
    {img:"/img/Scarlet.png",name:'Scarlet4',breed:'Dog - Jack Russell Terrier',description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:2,Inoculations:'none',Diseases:'none',Parasites:'none'},
    {img:"/img/Charly.png",name:'Charley11',breed:'Dog - Jack Russell Terrier',description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",age:5,Inoculations:'none',Diseases:'none',Parasites:'none'},
]
//бургер меню

export let menuIcon = document.querySelector('.menuIcon');
export let navBody = document.querySelector('.navBody');
export let navButtons = document.querySelectorAll('.navButtons');
export function burgerClick(){
     
if(menuIcon){
        
        menuIcon.addEventListener('click',function(e){
            document.body.classList.toggle('lock');
            menuIcon.classList.toggle('active');
            navBody.classList.toggle('active');
        
    
            
        })
    }
        navButtons.forEach(item =>{
            item.addEventListener('click',function(e){
                console.log(e.target.classList)
                if(e.target.classList.contains('navButtons')){
                    document.body.classList.remove('lock');
                    menuIcon.classList.remove('active');
                    navBody.classList.remove('active');
                    
                }
            })
        })
}
export let amountOfCards;
export let cardToShow;
if(!document.querySelector('.pagination')){
    if(window.innerWidth > 1000){
        amountOfCards = 9
        console.log(3)
        }
        else if(window.innerWidth < 1000 && window.innerWidth > 661){
            amountOfCards = 9;
            cardToShow = 2
            console.log(2)   
        }
        else if(window.innerWidth < 660){
             amountOfCards = 9;
             cardToShow = 1
            console.log(1)   
        }
}else {
    if(window.innerWidth > 1000){
        amountOfCards = 8;
        console.log(8)
        }
        else if(window.innerWidth < 1000 && window.innerWidth > 661){
            amountOfCards = 6;
            console.log(6)   
        }
        else if(window.innerWidth < 660){
             amountOfCards = 3;
            console.log(3)   
        }
}
let indexOfCardOnNextPage = 0;
let catchButtonPagination = document.querySelectorAll('.PaginationNumber');
// catchButtonPagination.forEach(item =>{
//     item.addEventListener('click',function(e){
//         if(e.target.textContent == 1){ indexOfCardOnNextPage = 0}
//         indexOfCardOnNextPage = (e.target.textContent-1)*amountOfCards;
//         console.log(indexOfCardOnNextPage)
//     });
// })





//добавление карточек
export let leftRightArrows = document.querySelector('.leftRightArrows');
export let cardIndex = 0;
export function CardAdd(position){
    let pos = document.querySelector(`${position}`);
    let countForIndex = 0;
    let countForBreak = 0;
    let pethtml = "";
    
    for(let options of info){
            countForIndex++;
            if(countForIndex <= indexOfCardOnNextPage){
                continue;
            }
            pethtml+=`<div class="card" id="slick-active">
            <img src="${options.img}" alt="" class="imgPet ">
            <p class="NameOfPet georgia " >${options.name}</p>
            <button class="bnt FriendsWhoLookingHomeCardButton georgia learnMoreBnt" >Learn more</button>
            </div>`;
            countForBreak++;
            if(countForBreak == amountOfCards){
                break;
            }
    }

   
    if(cardToShow <= 2){
        //leftRightArrows.insertAdjacentHTML("afterbegin",`<i class="icon-left leftArrow slick-prev slick-arrow"></i> <i class="icon-right rightArrow slick-next slick-arrow"></i>`);
        document.querySelector('.arrs').remove();

    }
          
    pos.innerHTML = pethtml;
    let leftArrow = document.querySelector('.leftArrow');
    let rightArrow = document.querySelector('.rightArrow');
    // leftArrow.onclick = function(e){
    //     if(cardIndex > 0 ){
    //         cardIndex--;
    //         console.log(cardIndex);
    //     }
    //     else{
    //         leftArrow.classList.add('unactive');    
    //     }
        
    // }
    // rightArrow.onclick = function(e){
    //     if(cardIndex < 6 ){
    //         cardIndex++;
    //         console.log(cardIndex);
    //     }
    //     else{
    //         rightArrow.classList.add('unactive');
    //     }
        
   // }

} 

//открытие инфы питомца 
export let learnMoreBnt = document.querySelectorAll('.learnMoreBnt');
export let    petInfo = document.querySelector('.petInfo');
export let    times = document.querySelector('.times');
export let    petInfoBg = document.querySelector('.petInfoBg');



// function openPetInfo(){ 

//     learnMoreBnt.forEach(item =>{
//     item.addEventListener('click',function openPetInfo(e){
//         //learnMoreBnt.classList.toggle('active');
        
//         petInfo.classList.toggle('active');
//         times.classList.toggle('active');
//         petInfoBg.classList.toggle('active');
//         document.body.classList.toggle('lock');
            
        
//         })
//     })
// }
    export function testOp(){
        console.log(learnMoreBnt);
           
                console.log('act?')
                petInfo.classList.toggle('active');
                times.classList.toggle('active');
                petInfoBg.classList.toggle('active');
                document.body.classList.toggle('lock');
                appearingCard();  
                closePetInfo();
                        
                
            
       }
export function openPetInfo(){ 
  
    learnMoreBnt.forEach(item =>{
    item.addEventListener('click',function(e){
        console.log('act?')
        petInfo.classList.toggle('active');
        times.classList.toggle('active');
        petInfoBg.classList.toggle('active');
        document.body.classList.toggle('lock');

        
        })
    })
}
//появление карточки с инфой петомнца

// export function appearingCard(e){ 
//     //learnMoreBnt.forEach(item => {
//         //document.querySelector('.learnMoreBnt').onclick = function(e){
//           // let target = e.target;
            
//            closeName = e.target.closest('div').querySelector('.NameOfPet').textContent;
//            console.log('appearing')
           

//            for(let name in info){
//                if(closeName == name){
//                    petInfo.insertAdjacentHTML("afterbegin",`
//                    <div class="petInfoInner">    
//                    <div class="petInfoLeft">
//                        <img src="${info[name][0]}" alt="" class="petInfoLeftImg">
//                    </div>
//                    <div class="petInfoRight">
//                        <h3 class="petInfoRightH3 georgia">${info[name][1]}</h3>
//                        <h4 class="petInfoRightH4 georgia">${info[name][2]}</h4>
//                        <h5 class="petInfoRightH5 georgia">${info[name][3]}</h5>
//                    <ul class="petInfoRightUl">
//                        <li class=""><span class="petInfoRightLi georgia"><b>Age: </b>${info[name][4] > 1 ? info[name][4] + " years" : info[name][4] + "year"}</span></li>
//                        <li class=""><span class="petInfoRightLi georgia"><b>Inoculations: </b>${info[name][5]}</span></li>
//                        <li class=""><span class="petInfoRightLi georgia"><b>Diseases: </b>${info[name][6]}</span></li>
//                        <li class=""><span class="petInfoRightLi georgia"><b>Parasites: </b>${info[name][7]}</span></li>
//                    </ul>
                   
//                    </div>
//                </div>`);   
//                }
               
//            }
//        }
       
   //})}




export function closePetInfo(){
        times.addEventListener('click',function(e){
            document.body.classList.remove('lock');
            petInfo.classList.remove('active');
            times.classList.remove('active');
            petInfoBg.classList.remove('active');
            petInfo.removeChild(document.querySelector(`.petInfoInner`));
            
        });
}
export let countCards = 0;
export function countAllPets(){
    for(let key of info){
        countCards++;
    }
    console.log("all pets: " + countCards);
}