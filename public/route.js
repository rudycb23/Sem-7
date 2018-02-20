(() => {
  'use strict';
  angular
    // Se inyecta el ui.router y el oclazyLoad
    .module('appRoutes', ['ui.router', 'oc.lazyLoad'])
    .config(routing);
  // Inyeccción de dependencia indirecta (tipo Angular)
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  // Forma del archivo de identificarse a sí mismo (tercer tipo de inyection por parametro)
  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html'
      });

      // Esto es para hacer otra vista que tenga controlador
      // .state('nombre', {
      //   url: '/nombre',
      //   templateUrl: 'ruta del html',
      //   resolve: {
      //     load: ['$ocLazyLoad', ($ocLazyLoad) => {
      //       return $ocLazyLoad.load('ruta del controlador')
      //     }]
      //   },
      //   controller: 'nombre del controlador',
      //   controllerAs: 'vm'
      // });

    //Por el amor de Dios si tiene errores en los scrips comenten esto primero y luego corran el código
    $urlRouterProvider.otherwise('/');
  };
})();