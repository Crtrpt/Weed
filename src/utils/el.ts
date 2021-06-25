export function createEl({ tag = 'div', className = '' }: { tag?: string; className?: string }) {
  var el = document.createElement(tag)
  el.className = className
  return el
}
