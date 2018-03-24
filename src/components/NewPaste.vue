<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
    <div class="mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8col">
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="paste-title">
          <label class="mdl-textfield__label" for="paste-title">Paste Name</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <textarea class="mdl-textfield__input" id="paste-input"></textarea>
          <label class="mdl-textfield__label" for="paste-input">{{ newPasteText }}</label>
        </div>
        <div>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-on:click="postPaste">Paste!</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {PastedevClient} from '../PastedevClient'

export default {
  name: 'new-paste',
  data () {
    return {
      newPasteText: 'Insert your paste here...'
    }
  },
  methods: {
    postPaste: function () {
      const client = new PastedevClient({endpoint: this.$config.pastedev.endpoint})
      let pasteValue = document.getElementById('paste-input').value
      let pasteTitle = document.getElementById('paste-title').value
      let paste = {}
      paste.title = pasteTitle
      paste.content = pasteValue
      client.postPaste(paste)
    }
  }
}

</script>

<style scoped>
  .mdl-textfield {
    margin: 0 10vh;
    width: calc(100% - 10rem);
  }

  .mdl-cell {
    width: calc(100% - 16px);
  }

  button.mdl-button {
    position: inherit;
    margin: 0 0 3em 0;
  }

  textarea {
    resize: none;
    height: 55vh;
  }
</style>
