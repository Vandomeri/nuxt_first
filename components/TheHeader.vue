<template>
    <header class="p-5 bg-amber-400">
        <div class="logo">LOGO</div>
        <nav>
            <NuxtLink to="/">Main</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/recipes">Recipes</NuxtLink>
        </nav>
    </header>

</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1000px;
    margin: auto;
}

nav {
    display: flex;
    column-gap: 20px;
}
</style>