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
          <textarea class="mdl-textfield__input" id="paste-input" rows="30" maxlength="1000"></textarea>
          <label class="mdl-textfield__label" for="paste-input">{{ pasteText }}</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {PastedevClient} from '../PastedevClient'

export default {
  name: 'show-paste',
  data () {
    return {
      pasteText: ''
    }
  },
  methods: {
    getPaste: async function () {
      const client = new PastedevClient({endpoint: this.$config.pastedev.endpoint})
      console.log(client)
      let pasteId = this.$route.params['id']

      const pasteJson = await client.getPaste(pasteId)
      console.log(pasteJson.title)
    }
  },
  beforeMount: function () {
    this.getPaste()
  }
}
</script>

<style scoped>
  textarea {
    resize: none;
  }
</style>
