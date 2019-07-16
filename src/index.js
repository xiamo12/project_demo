import _ from "lodash";
import MyStyle from "./index.css"

var mydiv = document.getElementById('root');
mydiv.style.className = "divBgColor";
mydiv.onclick = function(){
	this.innerHTML = "hello world!"
}