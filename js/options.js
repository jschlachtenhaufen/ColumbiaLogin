var app = angular.module('app', []);
app.controller('optionsController', function($scope, $http) {
    $scope.optionsSubmit = function () {
        let canvasUNI = $scope.canvasUNI;
        let canvasPassword = $scope.canvasPassword;
        let confirmCanvasPassword = $scope.confirmCanvasPassword;
        if (canvasPassword !== confirmCanvasPassword)
            return swal("Oops", "Make sure your passwords match", "warning");

        chrome.storage.sync.set({canvasUNI, canvasPassword}, function() {
            swal("Nice!", "Login info saved. If you need to update, navigate back here by clicking on the extension icon", "success");
        });
    }
});
