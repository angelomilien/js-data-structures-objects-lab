// Write your solution in this file!
let driver = {}


function updateDriverWithKeyAndValue(driverObject, key, value){
    return Object.assign({}, driverObject, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    return Object.assign(driver, { [key]: value })
}

function deleteFromDriverByKey(driver, key){
   const newObject = {}
   return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}