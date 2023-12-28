const draglist = document.getElementById('draglist')
const items = draglist.querySelectorAll('.drag-item')
const zone = document.getElementById('zone')

draglist.addEventListener('dragstart', ev => {
  const target = ev.target 
  ev.dataTransfer.setData('text', target.dataset.index)
  ev.effectAllowed = 'copyMove'
},false)


draglist.addEventListener('dragover', function(ev)  {
  ev.stopPropagation()
  ev.preventDefault()
}, false)

draglist.addEventListener('dragenter', ev => {
  const target = ev.target 
  if (target.classList.contains('move')) return true;
  target.classList.add('enter')
})

draglist.addEventListener('dragleave', ev => {
  const target = ev.target 
  if (!target.classList.contains('enter')) return true;
  target.classList.remove('enter')
})

draglist.addEventListener('drop', ev => {
  ev.stopPropagation()
  ev.preventDefault()
  const target = ev.target 
  const itemIndex = ev.dataTransfer.getData('text')
  const itemText = items[itemIndex].textContent
  if (!target.classList.contains('enter')) return true;
  target.classList.remove('enter')
  items[itemIndex].querySelector('.box').textContent = target.textContent
  items[target.parentNode.dataset.index].querySelector('.box').textContent = itemText
},false)
