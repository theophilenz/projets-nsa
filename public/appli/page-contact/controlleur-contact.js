angular.module("projetsnsa").controller("controlleurContact", controlleurContact);

function controlleurContact($rootScope) {
    vm = this;
    vm.titre = "Nous Contacter";
    $rootScope.header = vm.titre;
    vm.adresse = "26 rue de Bourgogne, Lévis, QC G6J 1C6";
    vm.pays = "Canada";
    vm.tel = "418-569-8938";
    vm.rbq = "5673-2969-01";
}