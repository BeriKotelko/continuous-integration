function findShortestString(
    stringArr
    )
    { const shortestString = stringArr[0]
        for (let str of stringArr) {
    if (str.length < shortestString.length) { shortestString = str
        }}  return shortestString.length }
    
    console.log(findShortestString(["it", "is", "a", "nice", "day"]), "a");
    console.log(findShortestString(["why", "hello", "to", "you"]), "to");
    console.log(findShortestString(["brave", "dance"]), "brave");