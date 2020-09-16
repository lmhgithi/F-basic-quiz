import { getUserEducations, getUserInfo } from "./fetch";

const renderUserInfo = async (id) => {
  const userInfo = await getUserInfo(id);
  // TODO feedback: userInfo什么情况会为undefined呢？
  if (userInfo === undefined) {
    $(".about-content").html("nothing here...");
  } else {
    // TODO feedback: 建议用解构赋值，代码更可读
    $(".header-img").attr("src", userInfo.avatar);
    $(".resume-description").html(
      `MY NAME IS ${userInfo.name} ${userInfo.age}YO AND THIS IS MY RESUME/CV`
    );
    // TODO feedback: About Me的内容和User Info的在UI上为独立的内容，建议拆成独立的模块
    $(".about-content").html(userInfo.description);
  }
};

const renderUserEducations = async (userId) => {
  const educations = await getUserEducations(userId);
  // TODO feedback: 同上，什么情况会为undefined呢？
  if (educations === undefined) {
    $(".education-experience").append("<p>nothing here...</p>");
  } else {
    educations.forEach((education) => {
      // TODO feedback: 在for循环中，每次都要操作DOM，影响性能，不推荐这样做
      $(".education-experience").append(
        `<li>
                <span class="education-year">${education.year}</span>
                <div class="education">
                    <span class="education-title">${education.title}</span>
                    <p class="education-content">${education.description}</p>
                </div>
            </li>`
      );
    });
  }
};

export { renderUserInfo, renderUserEducations };
