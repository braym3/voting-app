<template>
    <div v-if="poll && poll.question">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
  
        <h1>{{ confirmationHeader }}</h1>
  
        <div v-for="option in sortedOptions" :key="option.optionId" class="option-button">
            <div class="option-text">{{ option.optionText }}</div>
            <span class="percentage">{{ getVotePercentage(option) }}</span>
        </div>
    </div>
</template>
  
<script src="./ConfirmationPageScript"></script>
  
<style scoped> 
.option-text {
  flex: 1; /* Take remaining space */
}
.percentage {
    font-weight: bold;
    font-size: 0.9em;
}
</style>