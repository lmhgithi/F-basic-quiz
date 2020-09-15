import "./style/index.scss";
import {renderUserInfo, renderUserEducations} from "./render"

const query = window.location.pathname;
const path = query.split("/");
let id = 0;
if (path[1] == "users") {
    id=path[2];
}

renderUserInfo(id);
renderUserEducations(id)