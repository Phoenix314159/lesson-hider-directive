angular.module('directivePractice').controller('lessonCtrl', function ($scope, lessonService) {
    lessonService.getData().then(response => {
        console.log(response);
          $scope.data = response.data;
      });
    lessonService.getLessons().then(response => {
        $scope.lessons = response.data;
    });
    $scope.announceDay = function (lesson, day) {
        alert(lesson + ' is active on ' + day + '.');
    }

});
