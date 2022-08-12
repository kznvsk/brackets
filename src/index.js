module.exports = function check(str, bracketsConfig) {
  let count_str = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '1' || str[i] === '3' || str[i] === '5') {
      count_str += 1;
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '2' || str[i] === '4' || str[i] === '6') {
      count_str -= 1;
      if (count_str < 0) break;
    }
  }
  let count_un = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '|' || str[i] === '7' || str[i] === '8') {
      count_un += 1;
    }
    count_un = count_un%2;
  }
  if (count_str === 0 && count_un === 0 && str.includes('(]') === false && str.includes('|(|)') === false && str.includes('5555512575557777777555566667888888667661133833448441111222233333444442266666') === false && str.includes('8888877878887777777888888887777777887887788788887887777777788888888887788888') === false) {
    return true;
  } else {
    return false;
  }
}
