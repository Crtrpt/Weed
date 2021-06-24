import Widget from "../core/widget";

export default class Container implements Widget { 
  
  el:HTMLElement=window.document.createElement("div");
  name="container"
  children:Widget[];
  constructor(...children:Widget[]){
    this.el.className=this.name;
    this.children=children;
  }

  render(): any {
    if(this.children.length>0){
      this.children.forEach((child)=>{
        this.el.append(child.render());
      })
      
    }
    return this.el;
  }
}