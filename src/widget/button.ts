import Widget from '../core/widget'
import { createEl } from '../utils/el'

export class Button implements Widget {
  el: HTMLElement = createEl({})

  constructor(
    content: string = '',
    {
      click,
    }: {
      click?: any
    }
  ) {
    this.el.className = 'button'
    this.el.innerText = content
    if (click) {
      this.el.addEventListener('click', () => {
        click(this, click)
      })
    }
  }
  render(): any {
    return this.el
  }
}

export function button(content: string = '') {
  return new Button(content, {})
}
