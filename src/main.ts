import './style/index.scss'

import Container from './widget/container'
import { Text } from './widget/text'
import { Button } from './widget/button'
import { Tab, TabItem } from './widget/tab'
import Canvas from './widget/canvas'
import { Card } from './widget/card'
import { Input } from './widget/input'

import WeedBase from './core/weedBase'

class Weed extends WeedBase {
  count = 1

  constructor(config: any) {
    super()
    config.el.innerText = ''
    config.el.className = 'weed'
    this.data = { name: 'test', age: 20, count: 0, deep: { addr: '111' } }

    console.log(this.data)
    var select = 0

    var root = new Container(
      new Container(
        new Text({ data: this.data.count }),
        new Text({ data: this.data.count }),
        new Tab({
          name: 'testTab',
          select: select,
          items: [
            new TabItem('tab1', new Text({ data: this.data.count })),
            new TabItem('tab2', new Text({ content: '222' })),
          ],
        }),
        new Tab({
          name: 'testTab2',
          select: 0,
          items: [
            new TabItem('tab3', new Text({ content: '333' })),
            new TabItem('tab4', new Text({ content: '444' })),
          ],
        }),
        new Canvas(),
        new Card({
          name: 'card',
          header: new Container(new Text({ content: 'header' })),
          body: new Container(new Text({ content: 'body' })),
          footer: new Container(new Text({ content: 'foooter' })),
        }),
        new Input({ name: 'input', data: 20 }),
        new Button('click', {
          click: (_this: Button, e: any) => {
            console.log((this.data.count = this.data.count.v + 1))
          },
        })
      )
    )
    config.el.append(root.render())
  }
}

export default  Weed ;