import AssignmentSection from "./AssignmentSection.js";
import AssignmentCreate from "./assignmentCreate";

export default {
    components: {
        AssignmentSection,
        AssignmentCreate,
    },
    template: `
        <section class="space-y-6">
            <assignment-section :assignments="filters.inProgress" title="in progress"></assignment-section>
            <assignment-section :assignments="filters.completed" title="in progress"></assignment-section>
            
            <assignment-create @add="add"></assignment-create>
        </section>
        `,

    data () {
        return {
            assignments: [
                { name: "do exams", complete: false, id: 1},
                { name: "punch teacher", complete: false, id: 2},
                { name: "do a shooting....... presentation", complete: false, id: 3},
            ],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        },
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.lenght + 1,
            });

            this.newAssignment = '';
        }
    }

}