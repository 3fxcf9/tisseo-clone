<template>
    <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/schedule">Départs</router-link>
        <router-link to="/journey">Itinéraire</router-link>
        <router-link to="/lines">Lignes</router-link>
    </nav>
</template>

<style>
nav {
    border-top: 1px solid rgba(255, 255, 255, 0.87);
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>
