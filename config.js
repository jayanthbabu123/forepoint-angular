village.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('marketing', {
                url: '/marketing',
                templateUrl: 'views/marketing.html'
            })
            .state('staffing', {
                url: '/staffing',
                templateUrl: 'views/staffing.html'
            })

    });