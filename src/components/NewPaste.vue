<template>
  <div class="hello">
    <div class="input-group">
      <input type="text" class="form-control" :placeholder="newPasteText" id="paste-input">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button" v-on:click="postPaste">Go!</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new-paste',
  data () {
    return {
      newPasteText: 'Search for...'
    }
  },
  methods: {
    postPaste: function () {
      console.log(document.getElementById('paste-input').value)
    }
  }
}
</script>

<style scoped>

</style>
