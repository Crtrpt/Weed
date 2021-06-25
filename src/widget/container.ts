import Widget from '../core/widget'
import { createEl } from '../utils/el'

export default class Container implements Widget {
  el: HTMLElement = createEl({ className: 'container' })
  children: Widget[]
  constructor(...children: Widget[]) {
    this.children = children
  }

  render(): HTMLElement {
    if (this.children.length > 0) {
      this.children.forEach((child) => {
        this.el.append(child.render())
      })
    }
    return this.el
  }
}
