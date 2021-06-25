export function createEl({
  tag = 'div',
  className = '',
  content = '',
}: {
  tag?: string
  className?: string
  content?: string
}) {
  var el = document.createElement(tag)
  el.className = className
  el.textContent = content
  return el
}
