// Зробити асинхронні функції по свому графіку дня та синхронізувати їх за допомогою callbacck,promise,async await
//
let wakeUp = (time, cb) => {
    setTimeout(() => {
        time < 8 ? cb(null, `Get up, man, you've got JS to learn and a lot of other stuff to do`) : cb(`It's still early but you're already running out of time`);
    }, 100);
}

let shower = (hotWater, cb) => {
    setTimeout(() => {
        hotWater ? cb(null, `You've got lucky`) : cb(`Ha ha, it's cold water, you should've woke up earlier and heat it up`);
    }, 500);
}

let haveBreakfast = (food, cb) => {
    setTimeout(() => {
        food ? cb(null, `Breakfast is the most important meal during the day, well done pal`) : cb('An artist supposed to be hungry');
    }, 250);
}

let JSDone = (jsDone, cb) =>{
    setTimeout(()=>{
        jsDone ? cb(null, `Keep going if you'd like to be a programmer`) : cb(`You're gonna work on this work forever, loser`);
    }, 2000);
}

let startWorking = (time, cb) =>{
    setTimeout(()=>{
        time < 14 ? cb(null, `Just in time to start working`) : cb(`Ops, let's hope no one's noticed`);
    },3000);
}

let doAdditionalJS = (freeTime, cb) =>{
    setTimeout(()=>{
        freeTime ? cb(null, `Cool, let's do some additional JS tasks`) : cb(`Meh, well, at least you get good money for that`)
    }, 1500);
}

let goToBad = (time, cb) =>{
    setTimeout(()=>{
        time < 12 ? cb(`Well done, good night`) : cb(`Someone's gonna be sleepy tomorrow`);
    }, 1000)
}

wakeUp(7, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        shower(true, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                haveBreakfast(true, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                        JSDone(true, (err,data)=>{
                            if (err){
                                console.log(err);
                            } else {
                                console.log(data);
                                startWorking(13.5, (err,data) => {
                                    if (err){
                                        console.log(err);
                                    } else {
                                        console.log(data);
                                        doAdditionalJS(true, (err,data)=>{
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                console.log(data);
                                                goToBad(11.97, (err, data) =>{
                                                    if (err) {
                                                        console.log(err);
                                                    } else {
                                                        console.log(data);
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
});



