angular.module("projetsnsa").controller("controlleurProjets", controlleurProjets);

function controlleurProjets($rootScope) {
    var vm = this;
    vm.titre = "Nos Réalisations";
    $rootScope.header = vm.titre;
    vm.projets = [{
            id: 1,
            description: "Projet de patio extérieur"
        },
        {
            id: 2,
            description: "Normand et Chantale Lacroix"
        },
        {
            id: 3
        },
        {
            id: 4,
            description: "Projet Lac St-Charles : chambre de notre petite cliente Éva. En collaboration avec Claudia Berubé Designer",
            lien: "https://www.facebook.com/claudiaberubedesigner/photos/a.639835149422612.1073741829.605077039565090/1353812448024875"
        },
        {
            id: 5,
            description: "Projet de chambre des maîtres. En collaboration avec Claudia Berubé Designer",
            lien: "https://www.facebook.com/claudiaberubedesigner/photos/a.639835149422612.1073741829.605077039565090/1350054331734020"
        },
        {
            id: 6,
            description: "Modifications d'une bigénérationnelle en unifamiliale. En collaboration avec Claudia Berubé Designer",
            lien: "https://www.facebook.com/claudiaberubedesigner/photos/a.639835149422612.1073741829.605077039565090/1356213064451480"
        },
        {
            id: 7,
            description: "Projet de chambre des maîtres. En collaboration avec Claudia Berubé Designer",
            lien: "https://www.facebook.com/claudiaberubedesigner/photos/a.639835149422612.1073741829.605077039565090/1350054331734020"
        },
        {
            id: 8,
            description: "Projet Lac St-Charles : chambre de notre petite cliente Éva. En collaboration avec Claudia Berubé Designer",
            lien: "https://www.facebook.com/claudiaberubedesigner/photos/a.639835149422612.1073741829.605077039565090/1353812448024875"
        },
        {
            id: 9,
            description: "Description",
            lien: "#"
        },
        {
            id: 10,
            description: "Projet de chambre des maîtres. En collaboration avec Claudia Berubé Designer",
            lien: "https://www.facebook.com/claudiaberubedesigner/photos/a.639835149422612.1073741829.605077039565090/1350054331734020"
        },
        {
            id: 11,
            description: "Projet de chambre des maîtres. En collaboration avec Claudia Berubé Designer",
            lien: "https://www.facebook.com/claudiaberubedesigner/photos/a.639835149422612.1073741829.605077039565090/1350054331734020"
        },
        {
            id: 12,
            description: "Projet Lac St-Charles : chambre de notre petite cliente Éva. En collaboration avec Claudia Berubé Designer",
            lien: "https://www.facebook.com/claudiaberubedesigner/photos/a.639835149422612.1073741829.605077039565090/1353812448024875"
        },
        {
            id: 13,
            description: "Modifications d'une bigénérationnelle en unifamiliale. En collaboration avec Claudia Berubé Designer",
            lien: "https://www.facebook.com/claudiaberubedesigner/photos/a.639835149422612.1073741829.605077039565090/1351780034894783/"
        }
    ]
}