export default {
    template: `
    <button :class="{'text-white px-4 py-2 rounded': true, 'bg-blue-500': type === 'primary', 'bg-gray-500': type === 'secondary','isLoading':inprogress}" :disabled="inprogress"><slot/></button>
  `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        inprogress: {
            type: Boolean,
            default: false
        }
    },
}