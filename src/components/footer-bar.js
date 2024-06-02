class NoteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>Notes Application</p>
      </footer>
    `
  }
}
customElements.define('note-footer', NoteFooter)
