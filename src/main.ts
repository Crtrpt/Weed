
import './style/index.scss'

import Container from "./widget/container";
import {Text} from './widget/text';
import {Button} from './widget/button';
import Canvas from "./widget/canvas";

export default class trifoliate {
  count=1;
  constructor(config:any) {
    config.el.innerText="";
    var root  = new Container(
                    new Container(
                    new Text("words"),
                    new Canvas(),
                    new Button("click",
                                {
                                  click:(_this:Button,e:any)=>{
                                      console.log(_this.el.innerText="count:"+this.count+++"");
                                  }
                                }
                              )
                  )
                );
    config.el.append(root.render());
  }
};