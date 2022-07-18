const helperCreatId = (tag, id) => {
    const elem = document.createElement(tag)
    elem.id = id
    return elem
}
const helperCreatClass = (tag = "h2", title = "test", text = "test", style = {}) => {
    const strStyle = JSON.stringify(style)
        .replace(/"/g, "")
        .replace(/,/g, ";")
        .replace(/{/g, "")
        .replace(/}/g, ";")
    console.log(strStyle)
    const elem = document.createElement(tag);
    elem.className = title;
    elem.textContent = text;
    elem.style.cssText = strStyle
    return elem
}
export { helperCreatId, helperCreatClass };
