import "./header.css"
import globe from '../Globe.png'
export default function header(){
    return <header>
        <img src={globe} alt="globe"/>
        <h4> My Travel Journal</h4>
    </header>
}