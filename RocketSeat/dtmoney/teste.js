{
  properties: {
    gw_password: {
      type: 'string',
      title: 'Senha para acesso ao Gateway de API'
    },

    tamanho_pacote: {
      type: 'string',
      title: 'Tamanho do pacote:',
      enum: [
        'P'
      ]
    },
    app_http_cpu: {
      type: 'number',
      title: 'Quantidade de CPUs para o servidor HTTP:',
      enum: [
        8,
        16
      ]
    },
    app_http_mem_ram: {
      type: 'number',
      title: 'Quantidade de memoria RAM (Servidor HTTP):',
      enum: [
        16384,
        32768
      ]
    },
    app_http_disksize: {
      type: 'number',
      title: 'Tamanho do Disco Docker:',
      enum: [
        50,
        100,
        250
      ]
    },
    app_nfs_disksize: {
      type: 'number',
      title: 'Tamanho do Disco para NFS:',
      enum: [
        50,
        100,
        250
      ]
    },
    data_disksize: {
      type: 'number',
      title: 'Tamanho do Disco do banco de Dados:',
      enum: [
        50,
        100,
        250
      ]
    }
  },
  required: [
    'gw_password',
    'tamanho_pacote',
    'app_http_cpu',
    'app_http_mem_ram',
    'app_http_disksize',
    'app_nfs_disksize',
    'data_disksize'
  ],
  uischema: {
    gw_password: {
      'ui:widget': 'password'
    }
  }
}
