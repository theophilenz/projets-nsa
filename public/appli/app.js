angular.module("projetsnsa", ["ngRoute"])
    .config(configurationProjet);

function configurationProjet($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "appli/page-accueil/accueil.html",
            controller: controlleurAccueil,
            controllerAs: "vm"
        })
        .when("/a-propos", {
            templateUrl: "appli/a-propos/a-propos.html",
            controller: controlleurApropos,
            controllerAs: "vm"
        }).when("/projets", {
            templateUrl: "appli/projets/projets.html",
            controller: controlleurProjets,
            controllerAs: "vm"
        }).when("/contact", {
            templateUrl: "appli/page-contact/contact.html",
            controller: controlleurContact,
            controllerAs: "vm"
        });
};