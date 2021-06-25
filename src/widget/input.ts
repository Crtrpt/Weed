import Widget from '../core/widget'
import { addCls } from '../utils/class'
import { createEl } from '../utils/el'
export class Input implements Widget {
  el: HTMLElement = createEl({
    tag: 'input',
    className: 'input',
  })
  data: any
  constructor({ name, data }: { name?: string; data?: any }) {
    addCls(this.el, name)
    this.data = data
  }

  render(): any {
    ;(this.el as HTMLInputElement).value = this.data
    return this.el
  }
}
