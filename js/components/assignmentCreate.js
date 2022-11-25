export default {
    template: `
        <form @submit.prevent="add" class="text-black mt-5">
            <input v-model="newAssignment" class="" placeholder="new assignment...."/>
            <button class="bg-white border-l" type="submit">Add</button>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        };
    },

    methods: {
        add(e) {
            this.$emit('add', this.newAssignment)

            this.newAssignment = '';
        }
    }
}