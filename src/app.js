import "./style/index.scss";
import { renderUserInfo, renderUserEducations } from "./render";

const query = window.location.pathname;
// TODO feedback: 建议用解构赋值，代码更可读
const path = query.split("/");
if (path[1] === "users") {
  renderUserInfo(path[2]);
  renderUserEducations(path[2]);
}
