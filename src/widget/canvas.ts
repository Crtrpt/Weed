import Widget from "../core/widget";

export default class Canvas implements Widget { 
  
  el:HTMLElement=window.document.createElement("canvas")
  name="canvas"

  constructor(){
    this.el.className=this.name;
  }

  render(): any {
    return this.el;
  }
}