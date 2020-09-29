<template>
    <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
    >
     <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
      <q-item-section avatar>
          <q-icon color="primary" name="done" />
        </q-item-section>
  </q-item>
</template>
<script>
export default {
  name: 'listlink',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
