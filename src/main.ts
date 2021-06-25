import './style/index.scss'

import Container from './widget/container'
import { Text } from './widget/text'
import { Button } from './widget/button'
import { Tab, TabItem } from './widget/tab'
import Canvas from './widget/canvas'

class weed {
  count = 1
  constructor(config: any) {
    config.el.innerText = ''
    config.el.className = 'weed'
    var root = new Container(
      new Container(
        new Text('words'),
        new Tab({
          name: 'testTab',
          select: 0,
          items: [new TabItem('tab1', new Text('11')), new TabItem('tab2', new Text('222'))],
        }),
        new Tab({
          name: 'testTab2',
          select: 0,
          items: [new TabItem('tab1', new Text('11')), new TabItem('tab2', new Text('222'))],
        }),
        new Canvas(),
        new Button('click', {
          click: (_this: Button, e: any) => {
            console.log((_this.el.innerText = 'count:' + this.count++ + ''))
          },
        })
      )
    )
    config.el.append(root.render())
  }
}

export default  weed;