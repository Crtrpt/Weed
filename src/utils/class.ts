/**
 * 增加className
 * @param el
 * @param className
 * @returns
 */
export function addCls(el: HTMLElement, className: string): HTMLElement {
  var cls:string[]=el.className.split(" ");
  if(cls.length==1 && cls[0]==""){
    cls=[className];
  }else{
    if(cls.indexOf(className)==-1){
      cls.push(className);
    }
  }
  el.className=cls.join(" ");
  return el;
}

/**
 *
 * @param className 删除
 */
export function removeCls(el: HTMLElement, className: string): HTMLElement {
  var cls:string[]=el.className.split(" ");
  var idx=cls.indexOf(className);
  if(idx!=-1){
    el.className=[...cls.slice(0,idx),...cls.slice(idx+1,cls.length)].join(" ")
  }
  return el;
}

export function toggleCls(el: HTMLElement, className: string): HTMLElement {
  var cls:string[]=el.className.split(" ");
  var idx=cls.indexOf(className);
  if(idx!=-1){
    el.className=[...cls.slice(0,idx),...cls.slice(idx+1,cls.length)].join(" ")
  }else{
    cls.push(className)
    el.className=cls.join(" ");
  }
  return el;
}
