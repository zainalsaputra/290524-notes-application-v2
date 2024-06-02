class NoteForm extends HTMLElement {
  _shadowRoot = null
  _style = null

  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._style = document.createElement('style')

    this.customValidationTitleHandler =
      this.customValidationTitleHandler.bind(this)
    this.customValidationBodyHandler =
      this.customValidationBodyHandler.bind(this)
  }

  _updateStyle() {
    this._style.textContent = `
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      align-items: center;
      padding-top: 5%;
      padding-bottom: 1%;
      flex-direction: column;
  }
  
  .wrapper .form-wrapper {
      background-color: #ffffff00;
      opacity: 0.8;
      border: none;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      justify-content: center;
      padding-left: 2em;
      padding-right: 1em;
      padding-bottom: 3em;
      width: 70%;
      height: 370px;
  }
  
  .form-wrapper h1 {
      font-size: 2em;
      text-align: center;
      margin-bottom: 1em;
      font-weight: 800;
      letter-spacing: 1px;
      color: black;
  }

  .form-title input {
      margin-bottom: 10px;
      width: 94%;
      padding: 10px;
      background: #ffffff00;
      border: double;
  }

  .form-title input:focus {
    background: #ffffff39;
}
  
  .form-desc textarea {
      padding: 6px;
      width: 95.5%;
      background: #ffffff00;
      border: double;
      margin: -10px 0 -10px;
  }

  .form-desc textarea:focus:hover {
    background: #ffffff39;
}
  
  .form-group button {
    color: black;
    font-weight: 600;
    font-size: 1.2em;
    line-height: 1.5rem;
    background-color: #ffffff00;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 2rem;
    padding-right: 2rem;
    transition: all 0.2s ease-in-out;
    border: single;
    width: 98%;
    cursor: pointer;
    letter-spacing: 2px;
  }

  .form-group button:hover {
    opacity: 0.8;
    color: white;
    background-color: #7AB2B2;
    transtition: 0.2s;
  }

  .validation-message {
      margin-block-start: 0.5rem;
      color: red;
  }

      `
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = ''
  }

  connectedCallback() {
    this.render()
    this.setupEventListeners()
  }

  render() {
    this._emptyContent()
    this._updateStyle()

    this._shadowRoot.appendChild(this._style)
    this._shadowRoot.innerHTML += `
    <div class="wrapper">
    <div class="form-wrapper">
        <h1>Create Notes</h1>
        <form action="" class="form" id="noteForm">
            <div class="form-group">
                <div class="form-title">
                    <label for="title"></label>
                    <input type="text" class="title" id="title" name="title" placeholder="Title" required>
                </div>
                <p id="titleValidation" class="validation-message" aria-live="polite"></p>
                <div class="form-desc">
                    <label for="body"></label>
                    <textarea name="body" class="body" id="body" cols="30" rows="10" placeholder="Description" required></textarea>
                </div>
                <p id="bodyValidation" class="validation-message" aria-live="polite"></p>

                <button type="submit" name="submit" class="btn-submit">Add Notes</button>
            </div>
        </form>
    </div>
</div>
      `

    this._shadowRoot
      .querySelector('#noteForm')
      .addEventListener('submit', this.onSubmit.bind(this))
  }

  onSubmit(event) {
    event.preventDefault()
    const title = this._shadowRoot.querySelector('#title').value
    const body = this._shadowRoot.querySelector('#body').value

    const addNoteEvent = new CustomEvent('addNote', {
      detail: { title, body },
      bubbles: true,
      composed: true,
    })
    this.dispatchEvent(addNoteEvent)

    this._shadowRoot.querySelector('#title').value = ''
    this._shadowRoot.querySelector('#body').value = ''
  }

  setupEventListeners() {
    const titleInput = this._shadowRoot.querySelector('#title')
    const bodyInput = this._shadowRoot.querySelector('#body')

    titleInput.addEventListener('input', this.customValidationTitleHandler)
    bodyInput.addEventListener('input', this.customValidationBodyHandler)
  }

  customValidationTitleHandler(event) {
    const titleInput = event.target
    const titleValidationMessage =
      this._shadowRoot.querySelector('#titleValidation')

    if (!titleInput.value.trim()) {
      titleValidationMessage.innerText = 'Title is required.'
    } else {
      titleValidationMessage.innerText = ''
    }
  }

  customValidationBodyHandler(event) {
    const bodyInput = event.target
    const bodyValidationMessage =
      this._shadowRoot.querySelector('#bodyValidation')

    if (!bodyInput.value.trim()) {
      bodyValidationMessage.innerText = 'Body is required.'
    } else {
      bodyValidationMessage.innerText = ''
    }
  }
}

customElements.define('note-form', NoteForm)
