import { createApp } from 'vue'
import App from './App.vue'
import './styles/styles.css';
import { createRouter, createWebHistory } from 'vue-router';
import VotingPage from '@/components/votingPage/VotingPage.vue';
import ConfirmationPage from '@/components/confirmationPage/ConfirmationPage.vue';

const routes = [
    { path: '/poll/:pollId', component: VotingPage },
    { path: '/confirmation/:pollId', component: ConfirmationPage },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')