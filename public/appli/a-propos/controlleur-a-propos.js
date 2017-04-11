angular.module("projetsnsa").controller("controlleurApropos", controlleurApropos);

function controlleurApropos($rootScope) {
    var vm = this;
    vm.titre = "À propos de nous";
    $rootScope.header = vm.titre;
}