<template>
  <div id="app">
    <VotingPage :pollId="1"  />
  </div>
</template>

<script>
import VotingPage from './components/votingPage/VotingPage.vue';

export default {
  components: {
    VotingPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
