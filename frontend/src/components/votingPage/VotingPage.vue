<template>
    <div v-if="poll && poll.question">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        
        <h1>
            <span v-for="(word, index) in poll.question.split(' ')" :key="index" :class="getWordClass(word, index, poll.question.split(' '))">
                {{ index > 0 ? ' ' : '' }}{{ word }}
            </span>
        </h1>

        <div v-for="option in poll.options" :key="option.optionId" class="option-button">
            <input type="radio" :id="option.optionId" :value="option.optionId" v-model="selectedOption" style="display: none;" />
            <label :for="option.optionId">{{ option.optionText }}</label>
        </div>
        <button @click="submitVote" class="submit-button">SUBMIT</button>
    </div>
</template>

<script src="./VotingPageScript"></script>

<style scoped>
.extra-bold {
    font-weight: 800;
}

.normal {
    font-weight: 500;
}

</style>