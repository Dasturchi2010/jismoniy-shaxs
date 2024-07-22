let physicalId = document.getElementById('physical')
let physical = document.querySelector('.physical')
let lagelId = document.getElementById('lagel')
let lagel = document.querySelector('.lagel')

physicalId.addEventListener("click",()=> {
    physical.classList.remove("d-none")
    lagel.classList.add("d-none")
    
    
} );

lagelId.addEventListener("click",()=> {
    lagel.classList.remove("d-none")
    physical.classList.add("d-none")
    
} );
