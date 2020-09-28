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
        <div >
             <span v-once>'R$: {{serverdata.valor }}'</span>
        </div>
        </q-td>
        </template>
      </q-table>
  </div>
</template>

  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      separator: 'cell',
      columns: [
        {
          name: 'nom',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.nome,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'val', align: 'center', label: 'Valor', field: row => row.valor, sortable: true }
      ],
      serverdata: []
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
