import { renderUserInfo, renderUserEducations } from "../render";
import { getUserEducations, getUserInfo } from "../fetch";

jest.mock("../fetch");

// TODO feedback: 如果只是测方法有被调用的话，意义并不大
describe("fetch data", () => {
  test("should fetch data when render user info", async () => {
    getUserInfo.mockImplementation(() => {});

    renderUserInfo(1);

    await expect(getUserInfo).toHaveBeenCalled();
  });

  test("should fetch data when render educations", async () => {
    getUserEducations.mockImplementation(() => {});

    renderUserEducations(1);

    await expect(getUserEducations).toHaveBeenCalled();
  });
});
