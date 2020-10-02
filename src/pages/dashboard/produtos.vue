<template>
  <div class="q-pa-md">
  <div class="text-h4 doc-h6 q-pb-md">Produtos</div>
    <hr>
    <q-table
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
    <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            class="text-bold"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
    <template v-slot:body-cell-id="props">
        <q-td :props="props">
        <div>
             {{ props.row.id_produto }}
        </div>
        </q-td>
    </template>
    <template v-slot:body-cell-nome="props">
        <q-td :props="props">
        <div>
            {{ props.row.nome }}
        </div>
        </q-td>
        </template>
        <template v-slot:body-cell-valor="props">
        <q-td  :props="props">
        <div>
             {{ formataValor(props.row.valor) }}
        </div>
        </q-td>
        </template>
         <template v-slot:body-cell-tipo="props">
        <q-td :props="props">
        <div>
             {{ props.row.id_tipo }}
        </div>
        </q-td>
    </template>
         <template v-slot:body-cell-opcoes="props">
          <q-td :props="props">
            <q-btn dense color="primary" icon="edit"/>
            <span>
            Alterar
            </span>
          </q-td>
        </template>
      </q-table>
  </div>
</template>
<style>
.flow{
  margin-right: 30px;
}
</style>
<script>

export default {
  name: 'App',
  data () {
    return {
      sif: 'R$',
      separator: 'cell',
      columns: [
        { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true, headerClasses: 'bg-primary text-white text-h5', format: row => row.id },
        {
          name: 'nome',
          required: true,
          label: 'Nome',
          align: 'left',
          field: 'nom',
          format: row => row.nome,
          sortable: true,
          headerClasses: 'bg-primary text-white text-h5 text-uppercase'
        },
        { name: 'valor', align: 'center', label: 'Valor', field: 'val', sortable: true, headerClasses: 'bg-primary text-white text-uppercase text-h5', format: row => row.valor },
        { name: 'tipo', align: 'center', label: 'Tipo', field: 'tipo', sortable: true, headerClasses: 'bg-primary text-white text-uppercase text-h5', format: row => row.tipo },
        { name: 'opcoes', align: 'center', label: 'Opções', field: 'opcoes', sortable: true, headerClasses: 'bg-primary text-white text-uppercase text-h5' }
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
    },
    formataValor (value) {
      console.log(typeof value)
      if (typeof value !== 'number') {
      // return value comentei aqui pq o valor tá vindo como string da api, aí não ia formatar
      }
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      })
      return formatter.format(value)
    }
  },
  mounted () {
    this.obterInfo()
  }
}
</script>
