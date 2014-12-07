'use strict';

app.controller('NavCtrl', function ($scope, $location, Post) {
    $scope.post = {url: 'http://', title: ''};

    $scope.submitPost = function () {
        if($scope.post.title === ''){
            return;
        }
        Post.create($scope.post).then(function (ref) {
            $location.path('/posts/' + ref.name());
            $scope.post = {url: 'http://', title: ''};
        });
    };

});