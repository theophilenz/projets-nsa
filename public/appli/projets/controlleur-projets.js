angular.module("projetsnsa").controller("controlleurProjets", controlleurProjets);

function controlleurProjets() {
    var vm = this;
    vm.titre = "Nos Réalisations";

    vm.projets = [{
            id: 1,
            titre: "Titre du projet",
            description: "Description",
        },
        {
            id: 2,
            titre: "Titre du projet",
            description: "Description",
        },
        {
            id: 3,
            titre: "Titre du projet",
            description: "Description",
        },
        {
            id: 4,
            titre: "Titre du projet",
            description: "Description",
        }
    ]
}