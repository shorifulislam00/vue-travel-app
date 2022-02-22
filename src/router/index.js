import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  // {
  //   path: "/brazil",
  //   name: "Brazil",
  //   component: ()  => import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue")
  // },
  // {
  //   path: "/hawaii",
  //   name: "Hawaii",
  //   component: ()  => import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue")
  // },
  // {
  //   path: "/jamaica",
  //   name: "Jamaica",
  //   component: ()  => import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue")
  // },
  // {
  //   path: "/panama",
  //   name: "Panama",
  //   component: ()  => import(/* webpackChunkName: "panama" */ "../views/Panama.vue")
  // },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails"),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () => import(/* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes,
});

export default router;
