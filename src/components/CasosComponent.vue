<template>

  <section id="CasosExito">

    <h2>Casos de éxito</h2>

    <p>
      Conoce las experiencias de algunos de nuestros estudiantes.
    </p>


    <div class="casos-menu">

      <div
        v-for="persona in personas"
        :key="persona.id"
        class="caso-card"
      >

        <img
          :src="persona.imagen"
          :alt="persona.nombre"
        >

        <h3>
          {{ persona.nombre }}
        </h3>


        <div class="caso-info">

          <p>
            <strong>Curso tomado:</strong>
            {{ persona.curso }}
          </p>


          <h4>Éxitos</h4>

          <ul>

            <li
              v-for="exito in persona.exitos"
              :key="exito"
            >
              {{ exito }}
            </li>

          </ul>

        </div>


        <div class="caso-video">

          <iframe
            :src="persona.video"
            :title="'Video de ' + persona.nombre"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>

        </div>

      </div>

    </div>

  </section>

</template>


<script setup lang="ts">

interface Persona {

  id: number
  nombre: string
  imagen: string
  curso: string
  exitos: string[]
  video: string

}


const personas: Persona[] = [

  {
    id: 1,

    nombre: "Sofía Martínez",

    imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",

    curso: "Programación Web",

    exitos: [
      "Creó su primera página web",
      "Consiguió un proyecto freelance",
      "Mejoró sus conocimientos de programación"
    ],

    video: "https://www.youtube.com/embed/abLzChJiah0?si=iF9xs4eYAyWhXr4k&amp;start=12"

  },


  {
    id: 2,

    nombre: "Daniel López",

    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",

    curso: "Diseño Gráfico",

    exitos: [
      "Creó su propio portafolio",
      "Comenzó a trabajar como diseñador",
      "Desarrolló proyectos para pequeños negocios"
    ],

    video: "https://www.youtube.com/embed/qBpY4MJt6lc?si=Kcm_4vbfwmtEeguI"

  },


  {
    id: 3,

    nombre: "Valeria Hernández",

    imagen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",

    curso: "Marketing Digital",

    exitos: [
      "Creó campañas para redes sociales",
      "Ayudó a mejorar un emprendimiento",
      "Aprendió nuevas herramientas de marketing"
    ],

    video: "https://www.youtube.com/embed/lwwJqED7H4E?si=3LoFSxh-g_g_es6A&amp"

  },


  {
    id: 4,

    nombre: "Carlos Ramírez",

    imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

    curso: "Desarrollo de IA",

    exitos: [
      "Desarrolló su primer proyecto con IA",
      "Automatizó tareas de un proyecto",
      "Amplió sus conocimientos tecnológicos"
    ],

    video: "https://www.youtube.com/embed/zx2brXI_KOo?si=mnRo4rGHC0F9pnAW&amp"

  }

]

</script>


<style scoped>

#CasosExito {

  width: 100%;

  padding: 50px 20px;

  text-align: center;

}


#CasosExito > h2 {

  font-size: 40px;

  margin-bottom: 10px;

}


#CasosExito > p {

  font-size: 18px;

  margin-bottom: 40px;

}

.casos-menu {

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 25px;

  width: 100%;

  max-width: 1200px;

  margin: 0 auto;

}

.caso-card {

  padding: 20px;

  text-align: left;

  border-radius: 10px;

  background: #f4f4f4;

}

.caso-card > img {

  width: 100%;

  height: 220px;

  object-fit: cover;

  border-radius: 10px;

  display: block;

}

.caso-card > h3 {

  text-align: center;

  font-size: 22px;

  margin: 15px 0;

}

.caso-info {

  font-size: 16px;

}


.caso-info p {

  line-height: 1.5;

}


.caso-info h4 {

  font-size: 18px;

  margin-bottom: 8px;

}

.caso-info ul {

  padding-left: 20px;

}


.caso-info li {

  margin-bottom: 8px;

}

.caso-video {

  width: 100%;

  margin-top: 20px;

}


.caso-video iframe {

  width: 100%;

  height: 200px;

  border: none;

  border-radius: 8px;

}

@media (max-width: 1000px) {

  .casos-menu {

    grid-template-columns: repeat(2, 1fr);

  }

}

@media (max-width: 600px) {

  .casos-menu {

    grid-template-columns: 1fr;

  }

}

</style>

