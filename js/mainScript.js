import * as module from "./differentFunctions.js";

module.burgerClick();
module.CardAdd('.FriendsWhoLookingHomeCards');




let learnMoreBnt = document.querySelectorAll('.learnMoreBnt');
let petInfo = document.querySelector('.petInfo');
let times = document.querySelector('.times');
let petInfoBg = document.querySelector('.petInfoBg');
let closeName;

learnMoreBnt.forEach(item => {
    console.log("sdas");

    item.addEventListener('click', function (e) {
        console.log("sdas");

        let target = e.target;
        closeName = (target.closest('div').querySelector('.NameOfPet').textContent);
        petInfo.classList.toggle('active');
        times.classList.toggle('active');
        petInfoBg.classList.toggle('active');
        document.body.classList.toggle('lock');
        function appearingCard() {
            document.querySelectorAll('.slick-arrow').forEach(item =>{
                item.classList.add('disabled');
            })
            for (let option of module.info) {

                if (closeName == option.name) {

                    petInfo.insertAdjacentHTML("afterbegin", `
                                   <div class="petInfoInner ">    
                                        <div class="petInfoLeft">
                                                <img src="${option.img}" alt="" class="petInfoLeftImg">
                                            </div>
                                            <div class="petInfoRight">
                                                <h3 class="petInfoRightH3 georgia">${option.name}</h3>
                                                <h4 class="petInfoRightH4 georgia">${option.breed}</h4>
                                                <h5 class="petInfoRightH5 georgia">${option.description}</h5>
                                            <ul class="petInfoRightUl">
                                                <li class=""><span class="petInfoRightLi georgia"><b>Age: </b>${option.age > 1 ? option.age + " years" : option.age + "year"}</span></li>
                                                <li class=""><span class="petInfoRightLi georgia"><b>Inoculations: </b>${option.Inoculations}</span></li>
                                                <li class=""><span class="petInfoRightLi georgia"><b>Diseases: </b>${option.Diseases}</span></li>
                                                <li class=""><span class="petInfoRightLi georgia"><b>Parasites: </b>${option.Parasites}</span></li>
                                            </ul>
                                        
                                        </div>
                                    </div>`);
                    
                }

            }
        }
        appearingCard();
        


    })
})
module.closePetInfo('petInfoInner');



// learn more bnt






//Card appeared when u click on button 

