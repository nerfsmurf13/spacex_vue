import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import Rocket from "@/components/Rocket";
import Rockets from "@/pages/Rockets";
import Launches from "@/pages/Launches";
import Launch from "@/components/Launch";
import History from "@/pages/History";
import HistoryItem from "@/components/HistoryItem";
import Missions from "@/pages/Missions";
import Mission from "@/components/Mission";
import Page404 from "@/pages/Page404";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "Launches", //Temporary Home for Portfolio Purposes. Default: "Home"
      component: Launches
    },
    {
      path: "/history",
      name: "History",
      component: History
    },
    {
      path: "/history/:id",
      name: "HistoryItem",
      component: HistoryItem,
      props: true
    },
    {
      path: "/missions",
      name: "Missions",
      component: Missions
    },
    {
      path: "/missions/:id",
      name: "Mission",
      component: Mission,
      props: true
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
    },
    {
      path: "/launch/:id",
      name: "Launch",
      component: Launch,
      props: true
    },
    {
      path: "/*",
      name: "Page404",
      component: Page404
    }
  ]
});
