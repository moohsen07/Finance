
export default class TemplateList {
  constructor(private container: HTMLUListElement) { }

  render(item: any, heading: string, pos: 'start' | 'end') {

    const li = document.createElement('li')

    const h4 = document.createElement('h4')
    h4.innerText = heading;

    li.append(h4)

    const p = document.createElement('p')
    p.innerText = item.format();
    li.append(p)

    pos === 'start' ? this.container.prepend(li) : this.container.append(li)

  }
}