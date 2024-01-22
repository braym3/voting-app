<template>
    <div v-if="poll && poll.question">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />

        <h1>
            {{ confirmationHeader }}
        </h1>

        <div v-for="option in sortedOptions" :key="option.optionId" class="option-button">
            <input type="radio" :id="option.optionId" :value="option.optionId" v-model="selectedOption" style="display: none;" />
            <label :for="option.optionId">{{ option.optionText }}</label>
        </div>
    </div>
</template>

<script src="./ConfirmationPageScript"></script>