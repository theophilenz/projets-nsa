angular.module("projetsnsa").controller("controlleurProjets", controlleurProjets);

function controlleurProjets() {
    var vm = this;
    vm.titre = "Nos Réalisations";

    vm.projets = [{
            id: 1,
            description: "Description",
            lien: "#"
        },
        {
            id: 2,
            description: "Description",
            lien: "#"
        },
        {
            id: 3,
            description: "Description",
        },
        {
            id: 4,
            description: "Description",
        },
        {
            id: 5,
            description: "Description",
            lien: "#"
        },
        {
            id: 6,
            description: "Description",
        },
        {
            id: 7,
            description: "Description",
        },
        {
            id: 8,
            description: "Description",
        },
        {
            id: 9,
            description: "Description",
            lien: "#"
        },
        {
            id: 10,
            description: "Description",
            lien: "#"
        },
        {
            id: 11,
            description: "Description",
        },
        {
            id: 12,
            description: "Description",
        },
        {
            id: 13,
            description: "Description",
        }
    ]
}