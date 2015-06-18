export default /*@ngInject*/function($scope) {
  function copyFields(fields) {
    return angular.copy(fields);
  }
  function addNew() {
    $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
    var repeatsection = $scope.model[$scope.options.key];
    var lastSection = repeatsection[repeatsection.length - 1];
    var newsection = {};
    repeatsection.push(newsection);
  }
  $scope.formOptions = {formState: $scope.formState};
  $scope.addNew = addNew;
  $scope.copyFields = copyFields;
}
