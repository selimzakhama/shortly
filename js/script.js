const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')
const formContainer = document.getElementById('form-container')

linkForm.addEventListener('submit', formSubmit)

function formSubmit(e){
    e.preventDefault()
    if(input.value === ''){
        errMsg.innerHTML = 'Please enter something'
        input.classList.add('border-red')
    } else if(!validURL(input.value)){
        errMsg.innerHTML = 'Please enter a valid format'
        input.classList.add('border-red')
    } else {
        errMsg.innerHTML = ''
        input.classList.remove('border-red')

        let countValue = parseInt(document.getElementById('counter').value)
        var color = 'bg-darkViolet'
        if(countValue % 2 === 0){
            color = 'bg-cyan'
        }
        document.getElementById('counter').value = countValue + 1

        let textContent = `
        <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row space-y-2">
            <p class="font-bold text-center text-veryDarkViolet md:text-left">
                ${input.value}
            </p>
            <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:space-y-0 md:flex-row">
                <div class="font-bold text-cyan">https://rel.ink/K4IKyK</div>
                <button type="button" class="p-2 px-8 text-white ${color} rounded-lg hover:opacity-70 focus:outline-none">Copy</button>
            </div>
        </div>`
        formContainer.insertAdjacentHTML('beforeend',textContent)
        input.value = ''
    }
}

function validURL(url){
    var urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
}


function switch_view(){
    let menu_icons = document.querySelectorAll('.menu-icons')
    menu_icons.forEach(function(icon) {
        // Appliquer la classe 'hidden' à chaque élément individuel
        icon.classList.toggle('hidden');
    });
    let menu = document.getElementById('menu')
    menu.classList.toggle('hidden')
}