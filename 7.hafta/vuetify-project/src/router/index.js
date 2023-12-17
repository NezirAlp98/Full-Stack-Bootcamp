// Composables
import { createRouter, createWebHistory } from "vue-router";


//authentication işlemleri de burada route tarafında yapılır
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/settings", //layout burada da kullanmak için children kısmına ekledik.
        name: "Settings",
        component: () => import("@/views/Settings.vue"),
      },
      {
        path: "/count", //layout burada da kullanmak için children kısmına ekledik.
        name: "Count",
        component: () => import("@/views/Count.vue"),
      },
    ],
  },
  {
    path: "/sign-in", 
    name: "Signin",
    component: () => import("@/views/Settings.vue"),
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
