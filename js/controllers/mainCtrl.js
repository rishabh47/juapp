(function() {
  var app = angular.module("juApp");

  var mainCtrl = function($scope,uiUploader,$log) {

    $scope.btn_upload = function() {
    $log.info('uploading...');
    uiUploader.startUpload({
        url: 'https://posttestserver.com/post.php',
        concurrency: 2,
        onProgress: function(file) {
            $log.info(file.name + '=' + file.humanSize);
            $scope.$apply();
        },
        onCompleted: function(file, response) {
            $log.info(file + 'response' + response);
            console.log(file+"File Uploaded"+response);
        }
    });
};
  };
  app.controller("mainCtrl", mainCtrl);


}());
