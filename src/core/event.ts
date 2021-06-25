export default class Event1 {
  ev: Map<string, [any]> = new Map()
  //订阅
  on(name: string, callback: any) {
    var pip = this.ev.get(name)
    if (pip == undefined) {
      pip = [callback]
    } else {
      pip.push(callback)
    }
    this.ev.set(name, pip)
  }
  //触发
  fire(name: string) {
    var pip = this.ev.get(name)
    if (pip == undefined) {
    } else {
      pip.forEach((c) => {
        c()
      })
    }
  }
}
