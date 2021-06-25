import Widget from '../core/widget'
import { createEl } from '../utils/el'

export default class Canvas implements Widget {
  el: HTMLElement = createEl({ tag: 'canvas', className: 'canvas' })

  constructor() {}

  render(): any {
    return this.el
  }
}
