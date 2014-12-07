'use strict';
/* global app:true */
/* exported app */
/**
 * @ngdoc overview
 * @name theNextAngNewsApp
 * @description
 * # theNextAngNewsApp
 *
 * Main module of the application.
 */
var app = angular
    .module('theNextAngNewsApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase'
    ])
    .constant('FIREBASE_URL', 'https://thenextangnewsapp.firebaseio.com/');
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        })
        .when('/posts/:postId', {
            templateUrl: 'views/showpost.html',
            controller: 'PostViewCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthCtrl',
            resolve: {
                user: function(Auth) {
                    return Auth.resolveUser();
                }
            }
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthCtrl',
            resolve: {
                user: function(Auth) {
                    return Auth.resolveUser();
                }
            }
        })
        .when('/users/:userId', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});