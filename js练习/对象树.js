function makeTree(arr) {
  let tree = {};
  for (let i = 0; i < arr.length; i++) {
    let path = arr[i].split("/");
    let cur = tree;
    for (let j = 0; j < path.length; j++) {
      if (!cur[path[j]]) {
        cur[path[j]] = {};
      }
      cur = cur[path[j]];
    }
  }
  return tree
}

console.log(makeTree(["a/b/c", "a/b/d", "a/b/e", "a/f/g"]));

