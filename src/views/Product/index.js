import {helperCreatClass} from "helper/helperCreat";

const Product = () => {
    const wrap = helperCreatClass('div', '', '')
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {
                json.forEach(elem => {
                    let title = helperCreatClass('h3', '', elem.title)
                    wrap.append(title)
                })
            })
    return wrap
}
export default Product;
