import styles from '/src/css/button'

const buttonContainer = document.createElement('div')
buttonContainer.classList.add('button__container')
const body = document.body
body.append(buttonContainer)

export function Button(icnCls, text, func) {
  this.button = document.createElement('div')
  this.button.className = 'button'
  this.icon_text = document.createElement('div')
  this.icon_text.className = icnCls
  this.template = document.createElement('div')
  this.template.className = 'button__title'
  this.template.textContent = text
  this.render = function () {
    this.button.append(this.icon_text)
    this.button.append(this.template)
    buttonContainer.append(this.button)
  }
  this.template.onclick = function () {
    this.classList.toggle('accent')
  }
}

const buttonMembers = new Button('icn__btnuser', 'Members')
buttonMembers.render()

const buttonLables = new Button('icn__btntag', 'Labels')
buttonLables.render()

const buttonChecklist = new Button('icn__btninput-checked', 'Checklist')
buttonChecklist.render()

const buttonDate = new Button('icn__btnclock', 'Date')
buttonDate.render()

const buttonAttachment = new Button('icn__btnattachment', 'Attachment')
buttonAttachment.render()

const buttonCover = new Button('icn__btnvideo_label', 'Cover')
buttonCover.render()

const buttonMove = new Button('icn__btnarrow-right2', 'Move')
buttonMove.render()

const buttonCopy = new Button('icn__btncontent_copy', 'Copy')
buttonCopy.render()