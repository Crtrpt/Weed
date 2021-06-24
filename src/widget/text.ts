import Widget from "../core/widget";

export class Text implements Widget {
  
  el:HTMLElement=window.document.createElement("div");
  
  constructor(content:string=""){
    this.el.className="text"
    this.el.innerText=content
  }

  render(): any {
    return this.el;
  }
}

export function text(content:string="") {
    return new Text(content);
}

