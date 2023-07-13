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


exports.dateTostring = (str)=>{
const d = str.split(" ")[0]
const m = str.split(" ")[1]
const m_date = str.split(" ")[2]
const y = str.split(" ")[3]
return `${d}  , ${m_date} ${m} , ${y}`
}