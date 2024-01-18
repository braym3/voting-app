import { getPollById, submitVote } from '../../services/apiService';
import { isImportantWord } from '../../utils/wordProcessor';

export default {
    // props - to recieve external data
    props: {
        pollId: {
            type: Number,
            required: true,
        },
    },
    // data properties
    data() {
        return {
            // poll data will be fetched from the backend
            poll: {},
            selectedOption: null
        };
    },
    // lifecycle hook - to fetch poll data when the component is created
    created() {
        this.fetchPollData();
    },
    // watcher - to react to changes in the props
    watch: {
        pollId: 'fetchPollData',
    },
    // methods
    methods: {
        async fetchPollData() {
            try {
                // api call to get poll data
                this.poll = await getPollById(this.pollId);
            } catch (err) {
                console.error('Error fetching poll data:', err);
            }
        },
        async submitVote() {
            try {
                // make api call to submit vote
                await submitVote(this.pollId, this.selectedOption);
                // update the UI
                await this.fetchPollData();
            } catch (err) {
                console.error('Error submitting vote:', err);
            }
        },
        getWordClass(word, index, words) {
            return isImportantWord(word, index, words) ? 'extra-bold' : 'normal';
        },
    },
};