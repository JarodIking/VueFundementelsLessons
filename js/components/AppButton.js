export default {
    template: `
      <button 
        :class="{
            'bg-green-200 hover:bg-green-400 border rounded px-2 py-2': true,
            'bg-blue-200 hover:bg-blue-400': type == 'primary',
            'bg-red-200 hover:bg-red-400': type == 'secondary',
            'bg-gray-200 hover:bg-gray-400': type == 'muted',
            'spinner': processing,
        }"
        :disabled="processing"  
      >
        <slot/>
      </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary',
        },

        processing: {
            type: Boolean,
            default: false,
        }
    },
}