<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container">
            <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand d-md-none d-block">
                <img src="/images/bnefit-logo-new.jpg" width="64" alt="">
            </router-link>

            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarToggler" aria-controls="navbarToggler"
                    aria-expanded="false" :aria-label="$t('toggle_navigation')"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">

                <ul class="navbar-nav ml-auto text-right">
                    <li class="nav-item mx-2">
                        <router-link :to="{ name: 'welcome' }" class="nav-link" active-class="active">
                            {{ $t('HOME') }}
                        </router-link>
                    </li>
                    <li class="nav-item mx-2 dropdown text-right">
                        <a class="nav-link dropdown-toggle"
                           href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ $t('TECHNOLOGY BUSINESS INCUBATION CENTER') }}
                        </a>

                        <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                            <li class="dropdown-item">
                                <router-link :to="{ name: 'objective' }" class="dropdown-item">
                                    {{ $t('Objective of TBIC') }}
                                </router-link>
                            </li>
                            <li class="dropdown-submenu dropdown-item">
                                <router-link :to="{ name: 'four-components' }" class="dropdown-item">
                                    {{ $t('Four Components of TBIC') }}
                                </router-link>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">
                                        <router-link :to="{ name: 'infrastructure' }" class="dropdown-item">
                                            {{ $t('Infrastructure and Facilities') }}
                                        </router-link>
                                    </li>
                                    <li class="dropdown-item">
                                        <router-link :to="{ name: 'training' }" class="dropdown-item">
                                            {{ $t('Training and Development') }}
                                        </router-link>
                                    </li>
                                    <li class="dropdown-item">
                                        <router-link :to="{ name: 'marketing' }" class="dropdown-item">
                                            {{ $t('Marketing and Management') }}
                                        </router-link>
                                    </li>

                                    <li class="dropdown-item">
                                        <router-link :to="{ name: 'technical' }" class="dropdown-item">
                                            {{ $t('Technical Support') }}
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown-item">
                                <router-link :to="{ name: 'objective' }" class="dropdown-item">
                                    {{ $t('Locators') }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item mx-2">
                        <router-link :to="{ name: 'started' }" class="nav-link" active-class="active">
                            {{ $t('HOW IT ALL STARTED') }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>