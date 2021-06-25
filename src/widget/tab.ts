import Widget from '../core/widget'
import Event1 from '../core/event'
import { createEl } from '../utils/el'
import { addCls, removeCls } from '../utils/class'

export class Tab implements Widget {
  nav: HTMLElement = createEl({ className: 'tab_nav' })

  body: HTMLElement = createEl({ className: 'tab_body' })

  el: HTMLElement = createEl({ className: 'tab' })

  _select: number = 0
  public get select() {
    return this._select
  }
  public set select(idx: number) {
    if (this._select == idx) {
      return
    }
    this.items![this.select].inactive()
    this._select = idx
    this.refresh()
  }

  items?: TabItem[]

  constructor({
    name = '',
    select = 0,
    items,
  }: {
    name: string
    select: number
    items?: TabItem[]
  }) {
    addCls(this.el, name)
    this.items = items
    this.select = select
  }

  refresh() {
    this.body.innerHTML = ''
    this.body.append(this.items![this.select].render())
  }

  render(): any {
    this.items?.forEach((item, i) => {
      item.on('active', () => {
        this.select = i
      })
      this.nav.append(item.renderHandler())
    })
    this.items![this.select].active()
    this.body.append(this.items![this.select].render())
    this.el.append(this.nav)
    this.el.append(this.body)
    return this.el
  }
}

export class TabItem  extends Event1 implements Widget {
  el: HTMLElement = createEl({ className: 'tab_content' })
  nav:HTMLElement = createEl({ className: 'tab_item' })
  name: string
  content: Widget
  constructor(name: string, content: Widget) {
    super()
    this.name = name
    this.content = content
  }
 
  active(){
    addCls(this.nav,"active");
    this.fire("active")
  }
  inactive(){
    removeCls(this.nav,"active");
    this.fire("unactive")
  }
  renderHandler():any{
    this.nav.innerText=this.name;
    this.nav.addEventListener("click",(e)=>{
      this.active();
    })
    return this.nav
  }

  render(): any {
    this.el.append(this.content.render())
    return this.el
  }
}


