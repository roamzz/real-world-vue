import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
//  {
//    path: "/",
//    name: "Home",
//    component: Home
//  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
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
  {
    path: "/user/:username",
    name: "user",
    component: User,
    props: true
  },
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
