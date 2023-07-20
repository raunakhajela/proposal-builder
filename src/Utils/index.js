exports.dateString = (str) => {
    // An array `month` representing month abbreviations.
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Split the input date string `str` using the "-" character as the separator.
    let data = str.split("-");
    let mfixed = data[1].split("")[1];

    const result = {
        d: data[2].slice(0, 2),
        m: month[mfixed - 1],
        y: data[0],
    };
    // Destructure the properties `d`, `m`, and `y` from the `result` object.
    const { d, m, y } = result;


    return `${d}-${m}-${y}`;
};








// This function is named date To string and takes a string `str` as input.
exports.dateTostring = (str) => {
    const d = str.split(" ")[0]
    const m = str.split(" ")[1]
    const m_date = str.split(" ")[2]
    const y = str.split(" ")[3]
    return `${d}  , ${m_date} ${m} , ${y}`
}


// This function is named `SectionsIncluded` and takes an argument `str`.
// Check if the `str` argument is not an array using `Array.isArray()`.
exports.SectionsIncluded = (str) => {
    if (!Array.isArray(str)) {
        return "Not Sections";
    }
    const result = str.map((s, i) => ((i === 1 || i === 2) ? " , " : " ") + s.title);
    return result;
};