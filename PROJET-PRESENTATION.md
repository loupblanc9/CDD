# Projet dépannsan - Site Vitrine pour Service de Dépannage Automobile

## Contexte et Problématique

Un entrepreneur dans le secteur du dépannage automobile souhaitait développer sa présence en ligne pour attirer de nouveaux clients dans les régions du Val-d'Oise (95), de l'Oise (60) et de l'Eure (27). Le client avait besoin d'un site vitrine optimisé pour le référencement local permettant de présenter ses services de dépannage, remorquage et enlèvement d'épaves, tout en facilitant la prise de contact rapide en situation d'urgence.

## Objectif du Projet

L'objectif principal était de créer un site web moderne, rapide et optimisé pour le SEO qui permettrait de se positionner en première page des résultats Google sur les recherches locales liées au dépannage automobile. Le site devait également intégrer un calculateur de devis automatique permettant aux clients d'estimer rapidement le coût d'une intervention en fonction de leurs adresses de prise en charge et de dépôt. L'interface devait être intuitive, accessible sur tous les appareils, et inciter à l'appel immédiat grâce à des éléments visuels stratégiques.

## Réalisations Concrètes

Le site vitrine a été entièrement développé avec Next.js et Tailwind CSS pour garantir des performances optimales et un design responsive. La structure du site comprend plusieurs pages clés : une page d'accueil présentant les services principaux, une page dédiée aux zones d'intervention détaillant les départements et villes couvertes, une page de contact, et une page services avec descriptions complètes des prestations proposées. 

L'architecture de navigation a été pensée pour le SEO avec une hiérarchie de titres H1, H2, H3 structurée autour de mots-clés stratégiques comme "dépannage auto 95", "remorquage voiture Île-de-France" et "enlèvement d'épave gratuit Val-d'Oise". Chaque page dispose de métadonnées optimisées pour améliorer le taux de clics dans les résultats de recherche.

Le design suit une identité visuelle forte avec une palette de couleurs distinctive : bleu nuit pour inspirer confiance et jaune or pour évoquer l'urgence. L'image d'une dépanneuse jaune professionnelle a été intégrée en arrière-plan de la section hero avec un overlay pour garantir la lisibilité du texte. Des appels à l'action ont été stratégiquement placés, notamment une bannière fixe en bas de page avec un bouton "APPELEZ MAINTENANT" animé qui reste visible en permanence lors du défilement.

Un calculateur de devis minimaliste a été développé avec une interface graphique épurée. L'outil permet aux utilisateurs de saisir une adresse de prise en charge et une adresse de dépôt, puis calcule automatiquement la distance entre les deux points et génère un devis basé sur une formule tarifaire (49,99€ de base plus 1€ par kilomètre). Le système détecte également si l'intervention a lieu en période d'urgence (soir, weekend ou jour férié) et l'indique dans le résultat. La validation des adresses a été rendue flexible pour accepter différents formats tout en guidant l'utilisateur avec des exemples clairs.

## Technologies et Outils Utilisés

Le projet repose sur Next.js avec le Pages Router pour la structure des pages et l'API de calcul de devis. Tailwind CSS a été utilisé pour le styling avec un système de design tokens personnalisés définis dans le fichier de configuration. React a servi pour la création des composants réutilisables comme le header, le footer, les cartes de service et le calculateur de devis. Des hooks personnalisés ont été développés pour gérer l'affichage responsive et les interactions utilisateur.

Le SEO technique a été implémenté via le système de métadonnées de Next.js avec des titles et descriptions optimisés pour chaque page. Les images utilisent le composant Image de Next.js pour l'optimisation automatique et le lazy loading. Des animations CSS personnalisées ont été créées pour attirer l'attention sur les boutons d'appel à l'action, notamment une animation de pulsation sur le CTA principal.

## État Actuel et Résultat

Le site est entièrement fonctionnel avec toutes les pages principales développées et optimisées pour le SEO. L'interface est responsive et s'adapte parfaitement aux écrans mobiles et desktop. Le calculateur de devis est opérationnel avec sa logique de calcul de prix et sa validation d'adresses. Cependant, l'intégration complète avec les API Google Maps pour la géolocalisation précise et le calcul de distance réel n'a pas été finalisée car le client n'a pas donné suite au projet après les premières livraisons. Le calculateur fonctionne actuellement avec une simulation de calcul de distance basée sur les codes postaux, mais aurait nécessité une clé API Google Maps pour être pleinement opérationnel en production.

Le projet est configuré pour être déployé sur Vercel avec les fichiers de configuration Next.js appropriés. La structure du code est propre, modulaire et documentée, permettant une reprise facile si le client décide de relancer le développement. Les fondations techniques sont solides et le site pourrait être mis en ligne rapidement après l'ajout des derniers ajustements comme l'intégration des API de géolocalisation réelles et l'ajout d'un vrai numéro de téléphone.

## Compétences Utilisées

Ce projet a mobilisé des compétences en développement frontend avec React et Next.js, incluant la création de composants réactifs, la gestion d'état avec hooks, et la structuration d'une application multi-pages. Le travail sur l'optimisation SEO a nécessité une compréhension approfondie des bonnes pratiques de référencement naturel, de la structure sémantique HTML, et de la configuration des métadonnées. 

L'utilisation de Tailwind CSS a demandé une maîtrise du système de classes utilitaires et de la configuration de thèmes personnalisés. La création d'animations CSS et la gestion du responsive design ont également été des aspects importants du développement. Sur le plan fonctionnel, le développement du calculateur de devis a impliqué la mise en place de validation de formulaires, de logique de calcul, et de manipulation de dates pour la détection des périodes d'urgence.

## Compétences Développées et Apprentissages

Ce projet a été l'occasion de renforcer mes compétences en optimisation SEO local, un domaine crucial pour les entreprises de services avec une zone géographique définie. J'ai approfondi ma compréhension de la façon dont structurer le contenu et les métadonnées pour cibler des recherches locales spécifiques. 

La conception d'une expérience utilisateur adaptée au contexte d'urgence a été un apprentissage clé : comprendre comment placer stratégiquement des appels à l'action, utiliser les couleurs pour transmettre des émotions (confiance et urgence), et créer des parcours utilisateur simples pour convertir rapidement les visiteurs en clients. Le développement du calculateur de devis m'a permis de mieux comprendre les enjeux de validation de données côté client et de conception d'interfaces minimalistes qui restent fonctionnelles.

Un apprentissage important a également été la gestion d'un projet client qui s'interrompt : savoir livrer un travail professionnel et documenté même lorsque le projet n'arrive pas à terme, et structurer le code de manière à ce qu'il puisse être repris facilement par un autre développeur ou par le client lui-même. Cette expérience m'a appris l'importance de la documentation, de la modularité du code, et de la communication claire sur l'état d'avancement et les dépendances techniques comme l'intégration des API tierces.

Enfin, ce projet a renforcé ma capacité à traduire des besoins métier concrets en fonctionnalités techniques, à prendre des décisions de design et d'architecture adaptées au contexte, et à livrer un produit qui, bien qu'incomplet côté backend, reste utilisable et présente bien le professionnalisme du client.
