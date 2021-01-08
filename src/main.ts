import Invoice from './classes/Invoice'
import Payment from './classes/Payment'
import TemplateList from './classes/TemplateList'


const form = document.querySelector('form')!
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!
const list = new TemplateList(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: any
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'start')

})

