import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import Rocket from "@/components/Rocket";
import Rockets from "@/pages/Rockets";
import Launches from "@/pages/Launches";
import Launch from "@/components/Launch";

Vue.use(Router);

export default new Router({
    routes: [{
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
        },
        {
            path: "/launch/:id",
            name: "Launch",
            component: Launch,
            props: true
        }
    ]
});