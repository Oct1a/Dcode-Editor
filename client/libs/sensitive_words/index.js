/*
 * 敏感词过滤
 * https://juejin.cn/post/6844903641778749447
 */
import KeyWords from './keywords';
const sensitiveWordList = KeyWords;

function makeSensitiveMap(sensitiveWordList) {
  // 构造根节点
  const result = new Map();
  for (const word of sensitiveWordList) {
    let map = result;
    for (let i = 0; i < word.length; i++) {
      // 依次获取字
      const char = word.charAt(i);
      // 判断是否存在
      if (map.get(char)) {
        // 获取下一层节点
        map = map.get(char);
      } else {
        // 将当前节点设置为非结尾节点
        if (map.get("laster") === true) {
          map.set("laster", false);
        }
        const item = new Map();
        // 新增节点默认为结尾节点
        item.set("laster", true);
        map.set(char, item);
        map = map.get(char);
      }
    }
  }
  return result;
}
/**
 * @description
 * 检查敏感词是否存在
 * @private
 * @param {any} txt
 * @param {any} index
 * @returns
 */
function checkSensitiveWord(sensitiveMap, txt, index) {
  let currentMap = sensitiveMap;
  let flag = false;
  let wordNum = 0; //记录过滤
  let sensitiveWord = ""; //记录过滤出来的敏感词
  for (let i = index; i < txt.length; i++) {
    const word = txt.charAt(i);
    currentMap = currentMap.get(word);
    if (currentMap) {
      wordNum++;
      sensitiveWord += word;
      if (currentMap.get("laster") === true) {
        // 表示已到词的结尾
        flag = true;
        break;
      }
    } else {
      break;
    }
  }
  // 两字成词
  if (wordNum < 2) {
    flag = false;
  }
  return { flag, sensitiveWord };
}
/**
 * @description
 * 判断文本中是否存在敏感词
 * @param {any} txt
 * @returns
 */
export function filterSensitiveWord(txt, sensitiveMap) {
  sensitiveMap = makeSensitiveMap(sensitiveWordList);
  let matchResult = { flag: false, sensitiveWord: "" };
  let matchStr = [];
  // 过滤掉除了中文、英文、数字之外的
  const txtTrim = txt.replace(
    /[^\u4e00-\u9fa5\u0030-\u0039\u0061-\u007a\u0041-\u005a]+/g,
    ""
  );
  for (let i = 0; i < txtTrim.length; i++) {
    matchResult = checkSensitiveWord(sensitiveMap, txtTrim, i);
    if (matchResult.flag) {
      console.log(`sensitiveWord:${matchResult.sensitiveWord}`);
      // txt = txt.replace(new RegExp(matchResult.sensitiveWord, "gi"), '*')
      matchStr.push(matchResult.sensitiveWord);
      //   break;
    }
  }
  return matchStr;
  // return txt;
}
/*
 * 功    能：替换字符串中某些字符
 * 参    数：sInput-原始字符串  sChar-要被替换的子串 sReplaceChar-被替换的新串
 */
export function myReplace(sInput, sChar, sReplaceChar) {
  if (sInput == "" || sInput == undefined) {
    return "";
  }

  var oReg = new RegExp(sChar, "g");

  return sInput.replace(oReg, sReplaceChar);
}