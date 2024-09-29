export default {
    data() {
        return {
            hasSubmit: false,
            form: {
                userName: '',
                position: '',
                remark: '',
            },
            tip: 'Users who use OpenID to log in to the platform for the first time need to apply for permission from the administrator. Please fill in the following information and submit',
            secondTip: 'For platform related usage, please consult: admin.kubeworkz.com'
        };
    },
    computed: {
        canSubmit() {
            return this.form.position && this.form.remark && this.form.name;
        },
    },
    created() {
    },
    methods: {
        submit() {
            this.hasSubmit = true;
            // Example
            // const params = Object.assign({}, this.form)
            // userService.apply(params).then((result) => {
            // this.hasSubmit = true;
            // });
        },
        logout() {
           // Logout processing logic
           this.hasSubmit = false;
           // Example
            // userService.logout().then((result) => {
            //     this.hasSubmit = false;
            // });
        },
    },
};