// Зробити асинхронні функції по свому графіку дня та синхронізувати їх за допомогою callbacck,promise,async await
//
// let wakeUp = (time, cb) => {
//     setTimeout(() => {
//         time < 8 ? cb(null, `Get up, man, you've got JS to learn and a lot of other stuff to do`) : cb(`It's still early but you're already running out of time`);
//     }, 100);
// }
//
// let shower = (hotWater, cb) => {
//     setTimeout(() => {
//         hotWater ? cb(null, `You've got lucky`) : cb(`Ha ha, it's cold water, you should've woke up earlier and heat it up`);
//     }, 500);
// }
//
// let haveBreakfast = (food, cb) => {
//     setTimeout(() => {
//         food ? cb(null, `Breakfast is the most important meal during the day, well done pal`) : cb('An artist supposed to be hungry');
//     }, 250);
// }
//
// let JSDone = (jsDone, cb) =>{
//     setTimeout(()=>{
//         jsDone ? cb(null, `Keep going if you'd like to be a programmer`) : cb(`You're gonna work on this work forever, loser`);
//     }, 2000);
// }
//
// let startWorking = (time, cb) =>{
//     setTimeout(()=>{
//         time < 14 ? cb(null, `Just in time to start working`) : cb(`Ops, let's hope no one's noticed`);
//     },3000);
// }
//
// let doAdditionalJS = (freeTime, cb) =>{
//     setTimeout(()=>{
//         freeTime ? cb(null, `Cool, let's do some additional JS tasks`) : cb(`Meh, well, at least you get good money for that`)
//     }, 1500);
// }
//
// let goToBad = (time, cb) =>{
//     setTimeout(()=>{
//         time < 12 ? cb(`Well done, good night`) : cb(`Someone's gonna be sleepy tomorrow`);
//     }, 1000)
// }
//
// wakeUp(7, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         shower(true, (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//                 haveBreakfast(true, (err, data) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                         JSDone(true, (err,data)=>{
//                             if (err){
//                                 console.log(err);
//                             } else {
//                                 console.log(data);
//                                 startWorking(13.5, (err,data) => {
//                                     if (err){
//                                         console.log(err);
//                                     } else {
//                                         console.log(data);
//                                         doAdditionalJS(true, (err,data)=>{
//                                             if (err) {
//                                                 console.log(err);
//                                             } else {
//                                                 console.log(data);
//                                                 goToBad(11.97, (err, data) =>{
//                                                     if (err) {
//                                                         console.log(err);
//                                                     } else {
//                                                         console.log(data);
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });


let wakeUp = (wakeUptime) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Rise and shine`)
            if (wakeUptime < 8) {
                resolve(`Get up, man, you've got JS to learn and a lot of other stuff to do`);
            } else {
                reject(`It's still early but you're already running out of time`);
            }
        }, 1000);
    })
}

let shower = (hotWater) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`What about hot water?`)
            if (hotWater) {
                resolve(`You've got lucky`);
            } else {
                reject(`Ha ha, it's cold water, you should've woke up earlier and heat it up`);
            }
        }, 500);
    })
}

let haveBreakfast = (food) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`What about breakfast?`);
            if (food) {
                resolve(`Breakfast is the most important meal during the day, well done pal`);
            } else {
                reject('An artist supposed to be hungry');
            }
        }, 250);
    })
}

let JSDone = (JSDone) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Did you do JS home work?`)
            if (JSDone) {
                resolve(`Yes, keep going if you'd like to be a programmer`);
            } else {
                reject(`No, you're gonna work on this work forever, loser`);
            }
        }, 2000)
    })
}

let startWorking = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`What about work?`)
            if (time < 14) {
                resolve(`Just in time to start working`);
            } else {
                reject(`Ops, I'm late, let's hope no one's noticed`);
            }
        }, 3000);
    })
}

let doAdditionalJS = (freeTime) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Maybe time to do some additional JS tasks?`)
            if (freeTime) {
                resolve(`Cool, let's do it`);
            } else {
                reject(`Meh no, have to work. Well, at least you get good money for that`);
            }
        }, 1500);
    })
}

let goToBad = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Time to sleep?`)
            if (time < 12) {
                resolve(`Well done, good night`);
            } else {
                reject(`Someone's gonna be sleepy tomorrow`);
            }
        }, 1000);
    })
}


// wakeUp(7.8)
//     .then(value => {
//         console.log(value);
//         return shower(true)
//     })
//     .then(value => {
//         console.log(value);
//         return haveBreakfast(true);
//     })
//     .then(value => {
//         console.log(value);
//         return JSDone(true);
//     })
//     .then(value => {
//         console.log(value);
//         return startWorking(13.8);
//     })
//     .then(value => {
//         console.log(value);
//         return doAdditionalJS(true);
//     })
//     .then(value => {
//         console.log(value);
//         return goToBad(11.8);
//     })
//     .then(value => {
//         console.log(value);
//     })
//
// .catch(reason => {
//     console.log(reason);
// })

async function schedule() {
    try {
        const getAwake = await wakeUp(7.8);
        console.log(getAwake);

        const getShower = await shower(true);
        console.log(getShower);

        const breakfast = await haveBreakfast(true);
        console.log(breakfast);

        const JS = await JSDone(true);
        console.log(JS);

        const work = await startWorking(13.8);
        console.log(work);

        const timeForJS = await doAdditionalJS(true);
        console.log(timeForJS);

        const sleep = await goToBad(11.9);
        console.log(sleep);
    }
    catch (e) {
        console.log(e);
    }
}

schedule();