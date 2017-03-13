/* routes root */
import Landing from './components/Landing.vue'
import Dashboard from './components/Dashboard.vue'

/* Landing Page */
import Index from  './components/landing/Index.vue'
import About from  './components/landing/About.vue'
import Document from './components/landing/Document.vue'
import Product from './components/landing/Product.vue'
import Contact from './components/landing/Contact.vue'

/* Dashboard Page */
import DashboardIndex from './components/dashboard/Index.vue'
import DashboardIndex2 from './components/dashboard/Index2.vue'
import DashboardIndex3 from './components/dashboard/Index3.vue'

/* AdminLTE */
import ExamplesBlankPage from './components/dashboard/al/examples/BlankPage.vue'



/* 404 */
import NotFound from './components/NotFound.vue'

export const routes =[
    /* Path Landing page*/
    { path: '' , component: Landing ,children:[
        { path: '' , component: Index, name: 'landing '},
        { path: 'about' , component: About , name: 'about'},
        { path: 'document', component: Document, name: 'document' },
        { path: 'product', component: Product, name: 'product' },
        { path: 'contact', component: Contact, name: 'contact '}
    ]},
    /* Path Dashboard page*/
    { path: '/dashboard' , component: Dashboard , children:[
        { path: '' , component: DashboardIndex },
        { path: 'v2' , component: DashboardIndex2 },
        { path: 'v3' , component: DashboardIndex3 },
        /* AdminLTE*/
        { path: 'examples-blank-page', component: ExamplesBlankPage }
    ]},



    /* Path 404 page*/
    {path: '*', component: NotFound}   //404
];