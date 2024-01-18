<template>
    <div v-if="poll && poll.question">
        <h1>
            <span v-for="(word, index) in poll.question.split(' ')" :key="index" :class="getWordClass(word, index, poll.question.split(' '))">
                {{ index > 0 ? ' ' : '' }}{{ word }}
            </span>
        </h1>

        <div v-for="option in poll.options" :key="option.optionId">
            <input type="radio" :id="option.optionId" :value="option.optionId" v-model="selectedOption" />
            <label :for="option.optionId">{{ option.optionText }}</label>
        </div>
        <button @click="submitVote">Submit Vote</button>
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