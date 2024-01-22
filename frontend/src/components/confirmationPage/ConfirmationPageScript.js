import { getPollById } from "../../services/apiService";

export default {
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
        pollId() {
            return Number(this.$route.params.pollId);
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