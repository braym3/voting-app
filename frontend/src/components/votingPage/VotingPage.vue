<template>
    <div>
        <h1>{{ poll.question }}</h1>
        <div v-for="option in poll.options" :key="option.optionId">
            <input type="radio" :id="option.optionId" :value="option.optionId" v-model="selectedOption" />
            <label :for="option.optionId">{{ option.optionText }}</label>
        </div>
        <button @click="submitVote">Submit Vote</button>
    </div>
</template>

<script src="./VotingPageScript"></script>