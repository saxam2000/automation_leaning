let prom = new Promise((resolve, reject) => {
    resolve("yayy.....");
})
const handlepromise = (resolvedvalue) => {
    console.log(resolvedvalue)
}
prom.then(handlepromise)