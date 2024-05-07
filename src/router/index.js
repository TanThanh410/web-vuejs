import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AddCategory from "@/views/Category/AddCategory.vue";
import CategoryView from "@/views/Category/CategoryView.vue";
import EditCategory from "@/views/Category/EditCategory.vue";
import ProductView from "@/views/Product/ProductView.vue";
import AddProduct from "@/views/Product/AddProduct.vue";
import EditProduct from "@/views/Product/EditProduct.vue";
import AdminView from "@/views/AdminView.vue";
import ShowDetailsView from "@/views/Product/ShowDetailsView.vue";
import ListProductView from "@/views/Category/ListProductView.vue";
import SignupView from "@/views/SignupView.vue";
import SigninView from "@/views/SigninView.vue";
import WishListView from "@/views/Product/WishListView.vue";

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'CategoryView',
    component: CategoryView
  },
  {
    path: '/admin/category/update/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/category/show/:id',
    name: 'ListProductView',
    component: ListProductView
  },
  {
    path: '/admin/product',
    name: 'ProductView',
    component: ProductView
  },
  // add product
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  // edit product
  {
    path: '/admin/product/update/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView
  },
  {
    path : '/product/show/:id',
    name : 'ShowDetails',
    component: ShowDetailsView
  },

  {
    path : '/signup',
    name : 'Signup',
    component: SignupView
  },
  {
    path : '/signins',
    name : 'SigningPage',
    component: SigninView
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
export default router
