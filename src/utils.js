 
export function getVersion(Vue){
  return Number(Vue.version.split('.')[0]);
}