import Widget from '../core/widget'
import { createEl } from '../utils/el'

export class Text implements Widget {
  el: HTMLElement = createEl({ tag: 'p', className: 'text' })
  data: any = {
    v: '',
  }
  constructor({ content, data }: { content?: any; data?: any }) {
    if (data) {
      data.sub.push(this)
      this.data = data
    } else {
      this.data.v = content
    }
  }

  render(): any {
    this.el.innerText = this.data.v
    return this.el
  }
}

export function text(content: any = '') {
  return new Text(content)
}
