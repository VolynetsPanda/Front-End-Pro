import './styles/all'
import Header from "components/Header"
import { helperCreatId } from "helper/helperCreat"
import { onLocation } from "helper/route";
const root = document.getElementById('root')
root.append(Header())
root.append(helperCreatId('div', 'main'));
onLocation()
