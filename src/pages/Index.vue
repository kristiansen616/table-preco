<template>
  <div id="q-app">
    <router-view />

<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      dense
      :data="serverdata"
      :columns="columns"
      row-key="names"
       :separator="separator"
       :options="[
       // { label: 'Horizontal', value: 'horizontal' },
       // { label: 'Vertical', value: 'vertical' },
       // { label: 'Cell', value: 'cell' },
      //{ label: 'None', value: 'none' },
      ]"
    >
    <template v-slot:body-cell-nome="props">
        <q-td :props="props">
        <div>
            {{ serverdata.nome }}
        </div>
        </q-td>
        </template>
        <template v-slot:body-cell-valor="props">
        <q-td  :props="props">
        <div>
             {{'R$' + serverdata.valor }}
        </div>
        </q-td>
        </template>
      </q-table>
        <listlink
          v-for="link in listlink"
          :key="link.title"
          v-bind="link"
        />
        <img v-bind:src="img" width="1400px" height="500px" q-mr-4>
  </div>
</template>

  </div>
</template>
<style>
.flow{
  margin-right: 30px;
}
</style>
<script>
import listlink from 'components/linkstest.vue'
const linksData = [
  {
    title: 'Vue',
    icon: 'book',
    link: 'https://vuejs.org'
  },
  {
    title: 'Github',
    icon: 'supervised_user_circle',
    link: 'https://github.com/kristiansen616/painel-admin'
  },
  {
    title: 'Netlify',
    icon: 'explore',
    link: 'https://www.netlify.com'
  },
  {
    title: 'Quasar',
    icon: 'record_voice_over',
    link: 'https://quasar.dev'
  }
]
export default {
  name: 'App',
  components: { listlink },
  data () {
    return {
      listlink: linksData,
      img: 'https://raw.githubusercontent.com/lcr-uerj/LabMetro/master/images/universe-5033471_1920.jpg?token=AMSXUNVOK65YPWFR44BB3YS7OO2PW',
      sif: 'R$',
      separator: 'cell',
      columns: [
        {
          name: 'noma',
          required: true,
          label: 'Nome',
          align: 'left',
          field: 'nome',
          format: val => `${val}`,
          sortable: true
        },
        { name: 'val', align: 'center', label: 'Valor', field: 'valor', sortable: true }
      ],
      serverdata: [
        {
          sif: 'R$'
        }
      ]
    }
  },
  methods: {
    obterInfo () {
      this.$axios.get('/get-products')
        .then((response) => {
          this.serverdata = response.data
          console.log(this.serverdata)
        })
    }
  },
  mounted () {
    this.obterInfo()
  }
}
</script>
