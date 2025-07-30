function throttle (mess,delay){
    let lastcall = 0;
    return function(...args){
        const now = Date.now();
        if(now - lastcall < delay){
            return;
        }
        lastcall = now;
        mess(...args);
    }
}

function sendMess(mess){
    console.log(`send message ${mess}`);
}

const sendMessWithSlowMode = throttle(sendMess,2* 1000);


sendMessWithSlowMode("h") 
sendMessWithSlowMode("he")
sendMessWithSlowMode("hel")
sendMessWithSlowMode("hell")
sendMessWithSlowMode("hello")