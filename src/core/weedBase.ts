class WeedBase {
  //全部数据仓库
  __sub__: Map<string, Array<any>> = new Map()

  _d: any = {}
  getdata() {}
  get data() {
    return this._d
  }
  set data(d: any) {
    for (const key in d) {
      this.__sub__.set(key, Array<any>())
      Object.defineProperty(this._d, key, {
        get: () => {
          return { v: d[key], sub: this.__sub__.get(key) }
        },
        set: (v) => {
          d[key] = v
          this.__sub__.get(key)?.forEach((w) => {
            console.log('更新全部的订阅节点')
            w.data.v = v
            w.render()
          })
        },
      })
    }
    console.log(this)
  }
}

export default WeedBase
