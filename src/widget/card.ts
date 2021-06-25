import Widget from '../core/widget'
import { addCls } from '../utils/class'
import { createEl } from '../utils/el'

export class Card implements Widget {
  header?: Widget
  body?: Widget
  footer?: Widget
  el = createEl({
    className: 'card',
  })

  constructor({
    name,
    header,
    body,
    footer,
  }: {
    name?: string
    header?: Widget
    body?: Widget
    footer?: Widget
  }) {
    this.header = header
    this.body = body
    this.footer = footer
    addCls(this.el, name)
  }
  renderHeader() {
    var el = this.header!.render()
    addCls(el as HTMLElement, 'header')
    this.el.append(el)
  }
  renderBody() {
    var el = this.body!.render()
    addCls(el as HTMLElement, 'body')
    this.el.append(el)
  }
  renderFooter() {
    var el = this.footer!.render()
    addCls(el as HTMLElement, 'footer')
    this.el.append(el)
  }
  render(): any {
    this.el.innerHTML = ''
    this.renderHeader()
    this.renderBody()
    this.renderFooter()
    return this.el
  }
}
