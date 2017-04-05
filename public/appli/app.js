angular.module("projetsnsa", ["ngRoute"])
    .config(configurationProjet);

function configurationProjet($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "appli/page-accueil/accueil.html",
            controller: controlleurAccueil,
            controllerAs: "vm"
        });
};