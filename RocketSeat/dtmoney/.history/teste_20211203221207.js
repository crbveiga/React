{
  properties: {
    gw_password: {
      type: 'string',
      title: 'Senha para acesso ao Gateway de API'
    },
   
  },
  required: [
    'gw_password',
    'tamanho_pacote',
    'app_http_cpu',
    'app_http_disksize',
    'app_nfs_disksize',
    'tamanho_pacote'
  ],
  uischema: {
    data_disksize: {
      'ui:widget': 'password'
    }
  }
}
