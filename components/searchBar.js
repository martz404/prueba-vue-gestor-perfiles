Vue.component('searchBar', {
    data () {
        return{
            searchProfile: ''
        }
    },
    template: 
    `<div class="header">
        <input v-model="searchProfile" type="text" name="searchProfile" id="searchProfile" placeholder="Insert key to search">
        <div class="button submitButton" v-on:click="filterProfiles">Filter</div>
    </div>`,
    methods: {
        filterProfiles: () => {
            let textToFilter = searchProfile.value,
                filteredObjects = [];
                if(textToFilter === ''){
                    vm.displayedProfiles = vm.storedProfiles;
                    return
                }
                for(let profile of vm.storedProfiles){
                    let checkFiltering = Array(profile.name).filter(
                        function(o){
                        if((o.first.toLowerCase() || o.last.first.toLowerCase()).includes(textToFilter.toLowerCase())){
                            filteredObjects.push(profile);
                        }
                    })
                }
                vm.displayedProfiles = filteredObjects;
        }
    },
    name: 'searchBar'
})