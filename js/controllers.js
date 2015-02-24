studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [];
  $scope.addStudent = function() {
    $scope.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  };
  $scope.deleteStudent = function(student) {
    var index = $scope.students.indexOf(student)
    $scope.students.splice(index, 1);
  };
});
studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope) {
  $scope.studentsWithPermission = [{ name: "Jane Doe"}, { name: "John Doe"}];
});
