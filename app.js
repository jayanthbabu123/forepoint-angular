var village=angular.module('myApp',[
    'ui.router',
    'ui.bootstrap'
]);
village.controller("homeController",function($scope){
    $scope.myInterval = 3000;
   /* $scope.slides = [
        {
            image: 'images/HR2.jpg',
        },
        {
            image: 'images/BFSI3.jpg'
        },
        {
            image: 'images/Pharma.jpg'
        },
        {
            image: 'images/Manufacturing2.jpg'
        },
        {
            image: 'images/FMCG2.jpg'
        },
        {
            image: 'images/fmcg3.jpg'
        }
    ];
    $scope.myTickerItems = [
        {
            title: 'item 1',
            copy: 'Recently we started this web page for Narsingole people '
        },
        {
            title: 'item 2',
            copy: 'we can contact us through contact us section'
        },
        {
            title: 'item 3',
            copy: 'Log in and Sign up just only for Narsingole people'
        },
        {
            title: 'item 4',
            copy: 'Here we will update the every recent information in our village'
        },
        {
            title: 'item 5',
            copy: 'The user can also update the events by authentication'
        },
        {
            title: 'item 6',
            copy: 'Profile section of user coming soon'
        }
    ]*/
});