var vm = new Vue({
    el: '#vueTestApp',
    data () { 
        return {
                displayedProfiles: [],
                storedProfiles: []
        }
    },
    methods: {
        saveProfilesToDB: (profiles) => {
            let processedProfiles = [],
            capitalize = (input) => {
                return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
            },
            concatChars = (input) => {
                let formedString = '';
                for(let item of input){
                    formedString += capitalize(item) + ' ';
                }
                return formedString
            };
            for(const [index, profile] of profiles.entries()){
                let profileDBStructure = {
                    gender: profile.gender,
                    name: {
                        title: capitalize(profile.name.title),
                        first: capitalize(profile.name.first),
                        last: capitalize(profile.name.last),
                        fullname: concatChars([profile.name.title, profile.name.first, profile.name.last])
                    },
                    location: {
                        street: profile.location.street,
                        city: capitalize(profile.location.city),
                        state: capitalize(profile.location.state),
                        postcode: profile.location.postcode
                    },
                    email: profile.email,
                    login: {
                        username: profile.login.username,
                        password: profile.login.password,
                        salt: profile.login.salt,
                        sha1: profile.login.sha1
                    },
                    dob: profile.dob.date,
                    registered: profile.registered.date,
                    phone: profile.phone,
                    cell: profile.cell,
                    dni: profile.id.value,
                    picture: profile.picture.medium,
                    nat: profile.nat
                }
                processedProfiles.push(profileDBStructure);
            }
            axios.post('http://localhost:3000/profiles', processedProfiles[0])
            .then(function(){
                vm.storedProfiles = processedProfiles;
                vm.displayedProfiles = vm.storedProfiles;
            })
            vm.storedProfiles = processedProfiles;
            vm.displayedProfiles = vm.storedProfiles;
        }
    },
    mounted () {
        axios
            .get('https://randomuser.me/api?results=200&nat=es')
            .then((request) => {
                this.saveProfilesToDB(request.data.results);
            }
        ),        
        document.addEventListener('keyup', function(e){
            if(e.keyCode === 13) document.querySelector('.submitButton').click();
        })
    },
})