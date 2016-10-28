angular.module("BeatupApp")

.directive("formPassword", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attr, SignupController) {
            var firstPassword = "#" + attrs.formPassword;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    var v = elem.val() === $(firstPassword).val();
                    ctrl.$setValidity('pwmatch', v);
                });
            });

        }
    }
})