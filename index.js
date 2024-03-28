// code your solution here
function saturdayFun(act = 'roller-skate'){
    let acti = `This saturday, i want to ${act}!`
    return acti
}


//saturdayFun//
function mondayWork(act = 'go to the office'){
    let acti = `This mondayWork, i will ${act}.`
    return acti
}

function wrapAdjective(emph="*"){
    return function (msg ="special"){
        return `yu are ${emph}${msg}${emph}!`
    }
}