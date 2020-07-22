import { checkParenthesis } from "../src/checaParentesesValidos";

  test("Check valid parenthesis", () => {
    expect(checkParenthesis("()")).toBe(true);
    expect(checkParenthesis("()[]{}")).toBe(true);
    expect(checkParenthesis("(]")).toBe(false);
    expect(checkParenthesis("([)]")).toBe(false);
    expect(checkParenthesis("{[]}")).toBe(true);
  });

