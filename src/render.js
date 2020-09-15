import { getUserEducations, getUserInfo } from "./fetch";

const renderUserInfo = async (id) => {
  const userInfo = await getUserInfo(id);
  $(".header-img").attr("src", userInfo.avatar);
  $(".resume-description").html(
    `MY NAME IS ${userInfo.name} ${userInfo.age}YO AND THIS IS MY RESUME/CV`
  );
  $(".about-content").html(userInfo.description);
};

const renderUserEducations = async (userId) => {
  const educations = await getUserEducations(userId);
  educations.forEach((education) => {
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
};

export { renderUserInfo, renderUserEducations };
