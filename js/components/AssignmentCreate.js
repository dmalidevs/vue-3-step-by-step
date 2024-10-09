export default {
    template: `<form @submit.prevent="addAssignment">
            New: <input type="text" class="border border-black" v-model="newAssignment">
        </form>
        `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        addAssignment() {
            this.$emit('createAssignment', this.newAssignment)
            this.newAssignment = ''
        }
    }
}