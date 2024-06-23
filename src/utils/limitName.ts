export const limitName = (name: string = '', limit: number, addDots: boolean = false) => {
  if (name.length <= limit) return name;
  else {
    if(addDots) {
      return name.slice(0, limit - 3) + "...";
    } else {
      return name.slice(0, limit);
    }
  }
}