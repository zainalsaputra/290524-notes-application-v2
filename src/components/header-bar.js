class NoteHeader extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <h1>Notes Application</h1>
    `
  }
}
customElements.define('note-header', NoteHeader)
