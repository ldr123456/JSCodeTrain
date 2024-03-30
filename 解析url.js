function getUrlParam(sUrl, sKey) {
  let url = sUrl.split('?')[1]
  if (!url) return {}

  let arr = url.split('&')
  let arrs = []

  for(const pair of arr){
    const [key, value] = pair.split("="); 
    if(key === sKey) arrs.push(value)
  }
  if(arrs.length === 0) return {}
  else if(arrs.length === 1) return arrs[0]
  else return arrs
}
console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe','key'));
