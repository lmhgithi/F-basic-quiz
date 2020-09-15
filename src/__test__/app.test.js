import { renderUserInfo, renderUserEducations } from "../render";
import { getUserEducations, getUserInfo } from "../fetch";

jest.mock("../fetch");

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
