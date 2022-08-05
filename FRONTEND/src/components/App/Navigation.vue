<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Navigation",
    data() {
        return {
            scrolledNav: true,
            mobile: true,
            mobileNav: true,
            windowWidth: true,
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll)
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },
        checkScreen() {
            const windowWidth = window.innerWidth
            if (windowWidth <= 768) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }
})
</script>

<template>
    <header id="navigation" :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <div class="title">
                <h1>Layda</h1>
            </div>

            <ul v-show="!mobile" class="navigation">
                <li>
                    <a href="/" class="link">Home</a>
                </li>
                <li>
                    <RouterLink class="link" :to="{name: 'Projects'}">Projects</RouterLink>
                </li>
                <li>
                    <RouterLink class="link" :to="{name: 'Contact'}">Contact</RouterLink>
                </li>
            </ul>

            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars"
                    :class="{'icon-active': mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li>
                        <a href="/" class="link">Home</a>
                    </li>
                    <li>
                        <RouterLink class="link" :to="{name: 'Projects'}">Projects</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="link" :to="{name: 'Contact'}">Contact</RouterLink>
                    </li>
                </ul>
            </transition>
        </nav>
    </header>
</template>


<style lang="css">
header {
    z-index: 9999;
    position: fixed;
    display: flex;
    width: 100%;
    align-items: center;
    transition: 0.5s ease all;
    color: white;
    font-family: "poppins", sans-serif;
}

#navigation {
    background-color: #121212;
    height: 10vh;
}

.navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

nav {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 70%;
    margin: 0 auto;
}

@media (min-width: 1140px) {
    nav {
        max-width: 1140px;
    }
}

@media (max-width: 768px) {
    .dropdown-nav {
        transition: 0.3 ease;
    }

    .dropdown-nav .link {
        margin: 10rem;
    }

    .dropdown-nav li {
        margin: 5rem;
    }
}

@media (max-width: 560px) {
    .dropdown-nav {
        transition: 0.3s ease;
    }

    .dropdown-nav .link {
        margin: 6rem;
    }

    .dropdown-nav li {
        margin: 3rem;
    }
}

@media (max-width: 480px) {
    .dropdown-nav {
        transition: 0.3s ease;
    }

    .dropdown-nav .link {
        margin: 6rem;
    }

    .dropdown-nav li {
        margin: 3rem;
    }
}

@media (max-width: 380px) {
    .dropdown-nav {
        transition: 0.3s ease;
    }

    .dropdown-nav .link {
        margin: 4rem;
    }

    .dropdown-nav li {
        margin: 3rem;
    }
}

ul,
.link {
    font-weight: 500;
    color: white;
    list-style: none;
    text-decoration: none;
}

li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
}

.link {
    font-size: 13px;
    transition: 0.5 ease all;
    font-weight: 700;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

.link:hover {
    color: #00afea;
    border-color: #00afea;
}

.title {
    display: flex;
    align-content: center;
    font-size: 20px;
}

.icon {
    display: flex;
    position: absolute;
    align-items: center;
    top: 0;
    right: 24px;
    height: 100%;
}

i {
    cursor: pointer;
    font-size: 24px;
    transition: 0.8s ease all;
}

.icon-active {
    transform: rotate(180deg);
}

.dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 70%;
    height: 100%;
    background: steelblue;
    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
    top: 0;
    left: 0;
}

.dropdown-nav li {
    margin-left: 0;
}

.dropdown-nav .link {
    color: #000;
}

.scrolled-nav {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-550px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}
</style>