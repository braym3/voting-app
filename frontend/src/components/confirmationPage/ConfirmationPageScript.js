import { getPollById } from "frontend/src/services/apiService";

export default {
    props: {
        pollId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            poll: {},
        };
    },
    computed: {
        confirmationHeader() {
            return "Thank you for your response";
        },
        sortedOptions() {
            // sort the options in descending amount of votes
            return this.poll.options.sort((a, b) => b.votes - a.votes);
        },
    },
    created() {
        this.fetchPollData();
    },
    watch: {
        pollId: 'fetchPollData',
    },
    methods: {
        async fetchPollData() {
            try {
                this.poll = await getPollById(this.pollId);
            } catch (err) {
                console.error('Error fetching poll data:', err);
            }
        },
    },
};