export const checkParenthesis = (string: string): boolean => {
  const stack = [];

  for (let character of string) {
    // console.log(character)
    if (character === "(" || character === "{" || character === "[") {
      stack.push(character);
    } else {
      const lastCharacter = stack.pop();
      if (
        (lastCharacter === "(" && character !== ")") ||
        (lastCharacter === "{" && character !== "}") ||
        (lastCharacter === "[" && character !== "]")
      ) {
        return false;
      }
    }

    if (stack.length > 0) {
      return false;
    }
  }

  return true;
};
