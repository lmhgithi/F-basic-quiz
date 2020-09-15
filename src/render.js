import { getUserInfo } from "./fetch";

const renderUserInfo = async (id) => {
  const userInfo = await getUserInfo(id);
  $(".header-img").attr("src", userInfo.avatar);
  $(".resume-description").html(`MY NAME IS ${userInfo.name} ${userInfo.age}YO AND THIS IS MY RESUME/CV`);
  console.log(userInfo)
  $(".about-content").html(userInfo.description);
};

export { renderUserInfo };
