import { getPollById } from '../../services/apiService';

export default {
    data() {
        return {
            poll: {},
        };
    },
    computed: {
        confirmationHeader() {
            return 'Thank you for your response';
        },
        sortedOptions() {
            // sort the options in descending amount of votes
            return this.poll.options.sort((a, b) => b.votes - a.votes);
        },
        pollId() {
            return Number(this.$route.params.pollId);
        },
        totalVotes() {
            // sum up each option's votes to calculate total votes
            return this.poll.options.reduce((total, option) => total + option.votes, 0);
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
        getVotePercentage(option) {
            // calculate and return the vote percentage of an option
            if (this.totalVotes > 0) {
                const percentage = (option.votes / this.totalVotes) * 100;
                return `${Math.round(percentage)}%`;
            }
            return '0%';
        },
    },
};