const regex = `/б[ля4]+|су[ка4]+|д[ао0]+[л1!]*б[ао0]+[бп]+|ч[е3]+[рр]+н[о0]+|п[и1!е3з3д]+[з3]+|с[уу]+[кk]+|м[о0]+[нn]+[гg]+|с[о0]+[сс]+[и1!]+[пд3]+[сс]+[о0]+[нn]+[дтч]+[иeе3]+[кk]+[иeе3]+[сс]+[уу]+[кk]+[ао0]*|х[уу]+[йi1!]+[нn]+[ао0]+|[пд3]+[о0]+[з3]+[дтч]+[о0]+[рр]+[о0]+[еe3]+[бб6]+[ао0]+|[пп]+[о0]+[з3]+[дтч]+[о0]+[рр]+[иeе3]+[л1!]+[ао0]+|[пп]+[еe3]+[дтч]+[о0]+[рр]+[о0]+[сс]+[о0]+[нn]+[ао0]+/`;

export const checkWord = (word: string) => {
  const matches = [];
  let match;

  const regexObject = new RegExp(regex, 'gi');

  while ((match = regexObject.exec(word)) !== null) {
    matches.push({
      word: match[0],
      index: match.index,
    });
  }

  return matches;
}
