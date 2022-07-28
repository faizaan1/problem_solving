function getMiddle(s)
{
  let a = s.split("");
  if(a.length%2) return `${a[Math.round(a.length/2-1)]}`;
  else return `${a[a.length/2-1]}${a[a.length/2]}`
  
}