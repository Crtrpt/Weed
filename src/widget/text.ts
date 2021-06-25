import Widget from '../core/widget'
import { createEl } from '../utils/el'

export class Text implements Widget {
  el: HTMLElement = createEl({ tag: 'p', className: 'text' })

  constructor(content: string = '') {
    this.el.innerText = content
  }

  render(): any {
    return this.el
  }
}

export function text(content: string = '') {
  return new Text(content)
}
