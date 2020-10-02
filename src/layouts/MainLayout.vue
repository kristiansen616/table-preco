<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar q-my-md>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-space />
         <q-icon name="far fa-moon" />
      <q-toggle
        v-model="value"
      color="yellow"
      @input="dark()"
    />
    <q-icon name="fas fa-sun" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import EssentialLink from 'components/EssentialLink.vue'
const linksData = [
  {
    title: 'Clientes',
    caption: '',
    icon: 'people_alt',
    link: '/clientes'
  },
  {
    title: 'Produtos',
    caption: '',
    icon: 'all_inbox',
    link: '/produtos'
  },
  {
    title: 'FAQ',
    caption: '',
    icon: 'help',
    link: '/faq'
  },
  {
    title: 'Funcionáros/Usuários',
    caption: '',
    icon: 'groups',
    link: '/funci_user'
  },
  {
    title: 'Tracking',
    caption: '',
    icon: 'vpn_key',
    link: '/tracking'
  },
  {
    title: 'Municípios',
    caption: '',
    icon: 'public',
    link: '/'
  },
  {
    title: 'Edição de textos',
    caption: '',
    icon: 'help',
    link: '/edit_texto'
  },
  {
    title: 'Avisos',
    caption: '',
    icon: 'warning',
    link: '/avisos'
  },
  {
    title: 'Veículos',
    caption: '',
    icon: 'drive_eta',
    link: '/veiculos'
  },
  {
    title: 'Feriados',
    caption: '',
    icon: 'local_cafe',
    link: '/feriados'
  }
]
export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      alert: false,
      confirm: false,
      prompt: false,
      value: true,
      address: '',
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods: {
    dark (val) {
      this.$q.dark.toggle(val)
    }
  }
}
</script>
