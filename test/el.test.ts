import { addCls, removeCls, toggleCls } from '../src/utils/class'
import { createEl } from '../src/utils/el'

test('test el create', () => {
  var el = createEl({ tag: 'div', className: 'test' })
  expect(el.tagName == 'div')
  expect(el.className == 'test')
})
