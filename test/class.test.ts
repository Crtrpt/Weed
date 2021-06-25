import { addCls, removeCls, toggleCls } from '../src/utils/class'

test('test class addCls', () => {
  var el = window.document.createElement('test')
  addCls(el, 'weed')
  expect(el.className).toBe('weed')
})

test('test class removeCls', () => {
  var el = window.document.createElement('test')
  addCls(el, 'weed')
  removeCls(el, 'weed')
  expect(el.className).toBe('')
})

test('test class toggleCls', () => {
  var el = window.document.createElement('test')
  toggleCls(el, 'weed')
  toggleCls(el, 'weed')
  expect(el.className).toBe('')
})
