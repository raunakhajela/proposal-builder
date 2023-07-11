exports.dateString = (str)=>{
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let data = str.split("-")
let mfixed = data[1].split("")[1]
const result = {
    d:data[2].slice(0,2),
    m:month[mfixed-1],
    y:data[0]
}
const {d,m,y} = result
return `${d}-${m}-${y}`
}