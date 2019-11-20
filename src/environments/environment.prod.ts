export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3000',
    endpoints: {
      getAll: '/user',
      oneUser: '/user/:id',
      getAllComponents: '/composant',
      getOneComponent: 'composant/:id',
      getAllConfigs: '/configuration',
      getOneConfig: '/configuration/:id',
    }
  }
};
