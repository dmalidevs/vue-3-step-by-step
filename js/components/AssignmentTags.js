export default {
    template: `
            <div class="flex gap-2 items-center">
                <div v-for="tag in tags">
                    <button @click="$emit('update:currenttag', tag)" :key="tag.id" :class="currentTag === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'" class="px-4 py-2 rounded">
                        <span>{{ tag }}</span>
                    </button>
                </div>
            </div>
            `,
    props: {
        assignments: {
            type: Array,
            default: []
        },
        currentTag: {
            type: String,
            default: 'all'
        }
    },
    computed: {
        tags() {
            return new Set(['all', ...this.assignments.map(assignment => assignment.tags)]);
        }
    }
}