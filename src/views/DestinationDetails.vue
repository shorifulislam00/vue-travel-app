<template>
    <div>
        <GoBack />

        <section class="destination">
            <h1>{{ destination.name }}</h1>
            <div class="destination-details">
                <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
                <p>{{ destination.description }}</p>
            </div>
        </section>

        <section class="experiences">
            <h2>Top experience in {{ destination.name }}</h2>

            <div class="cards">
                <div class="card" v-for="experience in destination.experiences" :key="experience.slug">
                    <router-link :to="{name: 'experienceDetails', params: {experienceSlug: experience.slug}}">
                        <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name" />

                        <span class="card__text">
                            {{ experience.name }}
                        </span>
                    </router-link>
                </div>
            </div>
            <router-view :key="$route.path" />
        </section>
    </div>
</template>

<script>
import store from "@/store.js";
import GoBack from "@/components/GoBack";

export default {
    components: {
        GoBack
    },
    data(){
        return {}
    },
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    computed: {
        destination(){
            return store.destinations.find(
                destination => destination.slug === this.slug
            )
        }
    }
}
</script>

<style scoped>
img {
    max-height: 400px;
    max-width: 600px;
    height: auto;
    width: 100%;
}

.destination-details{
    display: flex;
    justify-content: space-between;
}

p{
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
}

.experiences {
    padding: 40px 0;
}

.cards {
    display: flex;
    justify-content: space-between;
}

.cards img {
    max-height: 200px;
}

.card {
    padding: 0 20px;
    position: relative;
}

.card__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
}

</style>