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
    <header>
        <nav>
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
                        <i v-if="hasSubmenu"
                            :class="{ 'pi pi-angle-down ml-2': root, 'pi pi-angle-right ml-auto': !root }"></i>
                    </a>
                </template>
            </Menubar>
        </nav>
    </header>
</template>
