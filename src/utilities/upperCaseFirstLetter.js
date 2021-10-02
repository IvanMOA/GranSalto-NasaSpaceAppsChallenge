export function upperCaseFirstLetter(str) {
  if (!str) {
    return "";
  }
  console.log(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}
