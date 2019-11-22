import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Rocket from "@/components/Rocket";
import Rockets from "@/components/Rockets";
import Launches from "@/components/Launches";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/rockets",
      name: "Rockets",
      component: Rockets
    },
    {
      path: "/rocket/:id",
      name: "Rocket",
      component: Rocket,
      props: true
    },
    {
      path: "/launches",
      name: "Launches",
      component: Launches
    }
  ]
});
