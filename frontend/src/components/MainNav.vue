<script setup lang="ts">
import Menubar from 'primevue/menubar';
import { RouterLink } from 'vue-router'
import { PrimeIcons } from '@primevue/core/api';

const menu_items = [
    { label: "All", route: "/", icon: PrimeIcons.HOME },
    {
        label: "By Source", icon: PrimeIcons.BOOK, items: [
            { label: "WotC Published 5e", route: "/by-source/wotc-official-5e" }]
    },
    {
        label: "By Class", icon: "pi pi-crown", items: [
            { label: "Wizard", route: "/by-class/wizard" }]
    }, {
        label: "By Character", icon: PrimeIcons.USERS, items: [
            { label: "Fedele Pons Civitas", route: "/characters/fedele" }]
    }];
</script>

<template>
    <Menubar :model="menu_items">
        <template #item="{ item, props, hasSubmenu, root }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                    <i v-if="hasSubmenu"
                        :class="{ 'pi pi-angle-down ml-2': root, 'pi pi-angle-right ml-auto': !root }"></i>
                </a>
            </router-link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon"></span>
                <span class=" ml-2">{{ item.label }}</span>
                <i v-if="hasSubmenu" :class="{ 'pi pi-angle-down ml-2': root, 'pi pi-angle-right ml-auto': !root }"></i>
            </a>
        </template>
    </Menubar>
    <header>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">All</RouterLink>
                </li>
                <li>
                    By Source
                    <ul>
                        <li>
                            <RouterLink to="/by-source/wotc-official-5e">WotC Published 5e</RouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    By Class
                    <ul>
                        <li>
                            <RouterLink to="/by-class/wizard">Wizard</RouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    Characters
                    <ul>
                        <li>
                            <RouterLink to="/characters/fedele">Fedele Pons Civitas</RouterLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
