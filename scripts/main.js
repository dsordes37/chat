const user = sessionStorage.getItem("nick")
console.log(user)

const input=document.getElementById('msgInput');
const btSend=document.getElementById('sendMsg');
const chat=document.getElementById('chat');

const bt=document.getElementById('connect')



let testeObj={
    type: "userMsg",
    user: "Dessas",
    text: "Essa é uma mensagem",
    hour: "18:49"
}


function getFormatedTime(){
    const time= new Date
    const hour= time.getHours().toString().padStart(2, '0') + ":" + time.getMinutes().toString().padStart(2, '0')
    return hour
}


function criaMsg(){
    if(input.value!=''){

        const obj={
            type:'userMsg',
            user: user,
            text: input.value,
            hour: getFormatedTime()
        }

        //addMsg(obj)
        envia(JSON.stringify(obj))
        input.value=''
    }
    
}

function addMsg(objMsg){
    const msg=document.createElement('div')
    msg.classList.add('message')

    if(objMsg.type==='userMsg'){
        const msgUser=document.createElement('span')
        msgUser.classList.add('user')

        if(objMsg.user===user){
            msg.classList.add('myMsg')
            msgUser.textContent='Você'
        }else{
            msg.classList.add('hisMsg')
            msgUser.textContent=objMsg.user
        }

        msg.appendChild(msgUser)
    }else if(objMsg.type==='quitMsg'){
        msg.classList.add('sisMsg')
        msg.classList.add('quitMsg')
    }else{
        msg.classList.add('sisMsg')
    }

    const msgText=document.createElement('span')
    msgText.classList.add('text')
    msgText.textContent=objMsg.text
    msg.appendChild(msgText)

    const msgHour=document.createElement('span')
    msgHour.classList.add('hour')
    msgHour.textContent=objMsg.hour
    msg.appendChild(msgHour)


    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}


btSend.addEventListener('click', criaMsg)

document.addEventListener('keypress', (element)=>{
    if(element.key==='Enter'){
        criaMsg()
    }
})

bt.addEventListener('click', ()=>{
    desconecta()
})