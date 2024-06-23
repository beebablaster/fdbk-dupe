export const renderName = (name:string, surname:string, limit:number = 15) => {
  if(!name || !surname) return ""
  if(name.length + surname.length > limit) {
    return `${name.slice(0, 1).toUpperCase()}. ${surname}`
  }
  return `${name} ${surname}`
}