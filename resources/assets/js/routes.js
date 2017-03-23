/* routes root */
import Landing from './components/Landing.vue'
import Dashboard from './components/Dashboard.vue'
import Auth from './components/Auth.vue'

/* Landing Page */
import Index from  './components/landing/Index.vue'
import Team from  './components/landing/Team.vue'
import Document from './components/landing/Document.vue'
import Product from './components/landing/Product.vue'
import Contact from './components/landing/Contact.vue'

/* Dashboard Page */
import DashboardIndex from './components/dashboard/Index.vue'
import DashboardIndex2 from './components/dashboard/Index2.vue'
import DashboardIndex3 from './components/dashboard/Index3.vue'
/* Dashboard Product*/
import DashboardProduct from './components/dashboard/product/Product.vue'
import DashboardProductClass from './components/dashboard/product/ProductClass.vue'

/* Dashboard Customer*/
import DashboardCustomer from './components/dashboard/customer/Customer.vue'
import DashboardCustomerClass from './components/dashboard/customer/CustomerClass.vue'


/* Dashboard Supply*/
import DashboardSupply from './components/dashboard/supply/Supply.vue'


/* Auth Page */
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

/* AdminLTE */
import ExamplesBlankPage from './components/dashboard/al/examples/BlankPage.vue'


/* 404 */
import NotFound from './components/NotFound.vue'

export const routes = [
    /* Path Landing page*/
    {
        path     : '',
        component: Landing,
        meta     : {},
        children : [
            {path: '', component: Index, name: 'landing '},
            {path: 'team', component: Team, name: 'team'},
            {path: 'document', component: Document, name: 'document'},
            {path: 'product', component: Product, name: 'product'},
            {path: 'contact', component: Contact, name: 'contact '}

        ]
    },
    /* Path Dashboard page*/
    {
        path     : '/dashboard',
        component: Dashboard,
        meta     : {
            isAuth: true
        },
        children : [
            /* dashboard */
            {path: '', component: DashboardIndex},
            {path: 'v2', component: DashboardIndex2},
            {path: 'v3', component: DashboardIndex3},
            /* product */
            {path: 'product', component: DashboardProduct},
            { path: 'productClass', component: DashboardProductClass },
            /* customer */
            {path: 'customer', component: DashboardCustomer},
            { path: 'customerClass', component: DashboardCustomerClass },
            {path: 'supply', component: DashboardSupply},
            /* AdminLTE*/
            {path: 'examples-blank-page', component: ExamplesBlankPage}
        ]
    },
    /* Path Auth page*/
    {
        path     : '/oauth',
        component: Auth,
        meta     : {
            checkLogin: true
        },
        children : [
            {
                path     : 'login',
                component: Login
            },
            {
                path     : 'register',
                component: Register,
            }
        ]
    },


    /* Path 404 page*/
    {
        path     : '*',
        component: NotFound
    }


];