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
      row-key="name"
    >
    <template v-slot:body="props">
        <q-tr v-for="(usuario, id_produto) in usuarios" :key="id_produto " :props="props">
            <q-td :key="name" :props="props">
               {{ props.row.name }}
             </q-td>
            <q-td :key="valor" :props="props">
               {{ props.row.valor }}
             </q-td>
        </q-tr>
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
      usuarios: [],
      usuario: {
        name: '',
        valor: '',
        sub: false
      },
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nome',
          align: 'center',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'valor', align: 'center', label: 'Valor', field: row => row.valor, sortable: true }
      ],
      serverdata: [
        {
          name: 'Lucas Felipe',
          valor: 2
        }
      ]
    }
  },
  methods: {
    obterInfo () {
      this.$axios.get('/get-products')
        .then((response) => {
          this.usuarios = response.data
        })
    }
  }
}
</script>
