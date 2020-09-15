import "./style/index.scss";
import { renderUserInfo, renderUserEducations } from "./render";

const query = window.location.pathname;
const path = query.split("/");
if (path[1] === "users") {
  renderUserInfo(path[2]);
  renderUserEducations(path[2]);
}
