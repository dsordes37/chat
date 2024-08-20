const inputName=document.getElementById('inputName');
const btSaveName=document.getElementById('btSave');

btSaveName.addEventListener('click', ()=>{
    if(inputName.value!=''){
        sessionStorage.setItem("nick", inputName.value)
        window.location.href="pages/chat.html"
    }

    
})