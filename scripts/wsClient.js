
const ws=new WebSocket('wss://websocket-ds.up.railway.app')

ws.onopen=()=>{
    addMsg({
        type: "sisMsg",
        text: "Você entrou no chat",
        hour: getFormatedTime()
    })
}

ws.onmessage=(event)=>{
    event.data.text().then((result)=>{
        obj=JSON.parse(result)
        addMsg(obj)
    })
}

function envia(text){
    ws.send(text)
}

ws.onclose=()=>{
    addMsg({
        type: "quitMsg",
        text: "Você saiu do chat",
        hour: getFormatedTime()
    })
}

function desconecta(){
    ws.close()
}