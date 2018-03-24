<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
    <div class="mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8col">
      <div class="paste-content">
        <div class="mdl-chip">
          <div class="mdl-chip__text">{{ pasteTitle }}</div>
        </div>
        <div class="content-table">
          <table>
            <tr v-for="(str, index) in pasteText" :key="index + 1"><td>{{ index + 1 }}</td><td>{{ str }}</td></tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {PastedevClient} from '../PastedevClient'

export default {
  name: 'show-paste',
  data () {
    return {
      pasteText: [],
      pasteTitle: ''
    }
  },
  methods: {
    getPaste: async function () {
      const client = new PastedevClient({endpoint: this.$config.pastedev.endpoint})
      let pasteId = this.$route.params['id']
      const pasteJson = await client.getPaste(pasteId)
      this.$data.pasteTitle = pasteJson.title
      this.$data.pasteText = pasteJson.content.split('\n')
      console.log(this.$data.pasteText)
    }
  },
  beforeMount: function () {
    this.getPaste()
  }
}
</script>

<style scoped>
  .paste-content {
    margin: 0.5em;
  }

  textarea {
    resize: none;
  }

  table {
    text-align: left;
    margin: 0 10vh;
    width: calc(100% - 10rem);
    white-space: pre;
  }

  .mdl-cell {
    width: calc(100% - 16px);
  }

  .mdl-chip {
    margin: 0 0 0 0.5em;
  }
</style>
