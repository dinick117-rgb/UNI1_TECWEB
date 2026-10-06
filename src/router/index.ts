import { createRouter, createWebHistory } from "vue-router"

import Inicio from "../views/Inicio.vue"
import Inscripciones from "../views/Inscripciones.vue"
import Certificaciones from "../views/Certificaciones.vue"
import Contacto from "../views/Contacto.vue"
import Seguridad from "../views/Seguridad.vue" 
import Material from "../views/Material.vue" 


const router = createRouter({

    history: createWebHistory(),

    routes: [

        {
            path: "/",
            name: "inicio",
            component: Inicio
        },

        {
            path: "/inscripciones",
            name: "inscripciones",
            component: Inscripciones
        },

        {
            path: "/certificaciones",
            name: "certificaciones",
            component: Certificaciones
        },

        {
            path: "/material",
            name: "material",
            component: Material
        },

        {
            path: "/contacto",
            name: "contacto",
            component: Contacto
        },

        {
            path: "/seguridad",
            name: "seguridad",
            component: Seguridad
        }

    ]

})


export default router