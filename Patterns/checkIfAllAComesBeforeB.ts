function all(str:string){
    if (str.indexOf("ba")>=0)
    {
      return false;
    }
    return true;
}
console.log(all("ababa"))