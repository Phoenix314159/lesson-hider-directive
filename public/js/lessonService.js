angular.module('directivePractice').service('lessonService', function ($http) {
    let serverUrl = 'http://localhost:3044';
    this.getData = function () {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/getdata'
        })
    };
    this.getLessons = function () {
        return $http({
            method:'GET',
            url: serverUrl + '/api/getlessons'
        })
    }
})
