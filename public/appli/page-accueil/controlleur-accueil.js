angular.module("projetsnsa").controller("controlleurAccueil", controlleurAccueil);

function controlleurAccueil() {
    var vm = this;
    vm.titre = "Le spécialiste de la rénovation résidentielle";
    vm.lead = "Profitez du savoir-faire de Projets NSA et accueillez chez-vous une équipe de professionnels qui pourra se charger de vos différents travaux de rénovation.";
}