import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
//import User from "../views/User.vue";
//import EventCard from "../components/EventCard.vue";

Vue.use(VueRouter);

const routes = [
    //{
    //  path: "/",
    //  name: "event-card",
    //  component: EventCard
    //},
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true //that means the id is passing to the event compoennt as a prop that gets from url. (instead $route.params.id)
  },
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  },
//  {
//    path: "/user/:username",
//    name: "user",
//    component: User,
//    props: true
//  }
  //  {
  //    path: "/about",
  //    name: "About",
  //    // route level code-splitting
  //    // this generates a separate chunk (about.[hash].js) for this route
  //    // which is lazy-loaded when the route is visited.
  //    component: () =>
  //      import(/* webpackChunkName: "about" */ "../views/About.vue")
  //  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
