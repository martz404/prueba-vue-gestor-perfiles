Vue.component('profilesList', {
    template: 
    `<div id="profilesList">
        <div class="profileContainer">
            <div class="profile animated fadeInUp" v-for="profile in profiles">
                <div class="profile__image">
                    <img :src="profile.picture">
                </div>
                <div class="profile__main-info">
                    <div class="profile__main-info__gender">Gender: {{ profile.gender }}</div>
                    <div class="profile__main-info__age">Age: {{ 2019 - parseInt(profile.dob.slice(0,4)) }}</div>                
                </div>
                <div class="profile__data__container">
                    <div class="profile__name">{{ profile.name.fullname }}</div>
                    <div class="profile__name">{{ profile.location.street }}</div>
                    <div class="profile__name">{{ profile.location.postcode }} - {{ profile.location.city }}</div>
                    <div class="profile__name">{{ profile.location.state }}</div>                                           
                    <div class="profile__email">{{ profile.email }}</div>
                    </div>
                </div>
        </div>
    </div>`,
    props: {
        profiles: Array
    }
})