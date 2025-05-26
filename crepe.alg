<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="nombre_de_crepes PREND_LA_VALEUR nombre_de_crepes+1" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2" totalAffichages="1000" nbDecimales="8" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="sucre EST_DU_TYPE NOMBRE" code="1#NOMBRE#sucre"/>
        <item algoitem="rhum EST_DU_TYPE NOMBRE" code="1#NOMBRE#rhum"/>
        <item algoitem="huile EST_DU_TYPE NOMBRE" code="1#NOMBRE#huile"/>
        <item algoitem="beurre EST_DU_TYPE NOMBRE" code="1#NOMBRE#beurre"/>
        <item algoitem="oeufs EST_DU_TYPE NOMBRE" code="1#NOMBRE#oeufs"/>
        <item algoitem="farine EST_DU_TYPE NOMBRE" code="1#NOMBRE#farine"/>
        <item algoitem="lait EST_DU_TYPE NOMBRE" code="1#NOMBRE#lait"/>
        <item algoitem="nombre_de_crepes EST_DU_TYPE NOMBRE" code="1#NOMBRE#nombre_de_crepes"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Entrez la quantité de farine (en g)&quot;" code="4#Entrez la quantité de farine (en g)#0"/>
        <item algoitem="LIRE farine" code="2#farine#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez la quantité d'huile (en cuillère à soupe) &quot;" code="4#Entrez la quantité d'huile (en cuillère à soupe) #0"/>
        <item algoitem="LIRE huile" code="2#huile#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez la quantité de beurre fondu (en g)&quot;" code="4#Entrez la quantité de beurre fondu (en g)#0"/>
        <item algoitem="LIRE beurre" code="2#beurre#pasliste"/>
        <item algoitem="AFFICHER &quot;entrez la quantité de rhum (en cl)&quot;" code="4#entrez la quantité de rhum (en cl)#0"/>
        <item algoitem="LIRE rhum" code="2#rhum#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez le nombre d'oeufs&quot;" code="4#Entrez le nombre d'oeufs#0"/>
        <item algoitem="LIRE oeufs" code="2#oeufs#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez la quantité de lait (en cl)&quot;" code="4#Entrez la quantité de lait (en cl)#0"/>
        <item algoitem="LIRE lait" code="2#lait#pasliste"/>
        <item algoitem="AFFICHER &quot;Entrez quantité de sucre (en g)&quot;" code="4#Entrez quantité de sucre (en g)#0"/>
        <item algoitem="LIRE sucre" code="2#sucre#pasliste"/>
        <item algoitem="SI (farine>=300 ET sucre >=3 ET huile >=2 ET beurre >=50 ET rhum >=5 ET oeufs >=3 ET lait >=60) ALORS" code="6#farine>=300 ET sucre >=3 ET huile >=2 ET beurre >=50 ET rhum >=5 ET oeufs >=3 ET lait >=60">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Vous avez tous les ingrédients pour commencer la recette &quot;" code="4#Vous avez tous les ingrédients pour commencer la recette #0"/>
            <item algoitem="nombre_de_crepes PREND_LA_VALEUR 0" code="5#nombre_de_crepes#0#pasliste"/>
            <item algoitem="TANT_QUE (nombre_de_crepes&lt;=15) FAIRE" code="15#nombre_de_crepes&lt;=15">
                <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                <item algoitem="nombre_de_crepes PREND_LA_VALEUR nombre_de_crepes+1" code="5#nombre_de_crepes#nombre_de_crepes+1#pasliste"/>
                <item algoitem="AFFICHER nombre_de_crepes" code="3#nombre_de_crepes#0#pasliste"/>
                <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
            </item>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;Les quantités ne sont pas suffisantes &quot;" code="4#Les quantités ne sont pas suffisantes #0"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="AFFICHER &quot;Toutes les crêpes sont prêtes !&quot;" code="4#Toutes les crêpes sont prêtes !#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
