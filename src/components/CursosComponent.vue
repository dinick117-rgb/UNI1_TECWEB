<template>

  <section id="Cursos">

    <h2>Cursos populares</h2>

    <p>Conoce algunos de los cursos más populares de Colegio TecCursos.</p>


    <div class="carrusel">

      <button @click="anterior">
        ‹
      </button>


      <div
        v-for="curso in cursosPopularesVisibles"
        :key="curso.id"
        class="curso-card"
      >

        <img
          :src="curso.imagen"
          :alt="curso.nombre"
        >

        <h3>
          {{ curso.nombre }}
        </h3>

        <p>
          {{ curso.mes }}
        </p>

      </div>


      <button @click="siguiente">
        ›
      </button>

    </div>


    <button
      class="boton-ver-mas"
      @click="mostrarCursos = !mostrarCursos"
    >
      {{ mostrarCursos ? 'Ver menos' : 'Ver más' }}
    </button>


    <div
      v-if="mostrarCursos"
      class="lista-cursos"
    >

      <h2>Todos nuestros cursos</h2>

      <ol>

        <li
          v-for="curso in cursos"
          :key="curso.id"
        >
          {{ curso.nombre }}
        </li>

      </ol>

    </div>

  </section>

</template>


<script setup lang="ts">

import { ref, computed } from "vue"


interface Curso {

  id: number
  nombre: string
  mes: string
  imagen: string

}


const posicion = ref(0)

const mostrarCursos = ref(false)

const cursos = ref<Curso[]>([

  {
    id: 1,
    nombre: "Programación Web",
    mes: "Enero",
    imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },

  {
    id: 2,
    nombre: "Diseño Gráfico",
    mes: "Febrero",
    imagen: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
  },

  {
    id: 3,
    nombre: "Marketing Digital",
    mes: "Marzo",
    imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },

  {
    id: 4,
    nombre: "Desarrollo de IA",
    mes: "Mayo",
    imagen: "https://images.unsplash.com/photo-1556761175-b413da4baf72"
  },

  {
    id: 5,
    nombre: "Bases de Datos",
    mes: "Octubre",
    imagen: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d"
  },

  {
    id: 6,
    nombre: "Inglés",
    mes: "Junio",
    imagen: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },

  {
    id: 7,
    nombre: "Fotografía",
    mes: "Julio",
    imagen: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
  },

  {
    id: 8,
    nombre: "Excel Avanzado",
    mes: "Agosto",
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },

  {
    id: 9,
    nombre: "Emprendimiento",
    mes: "Septiembre",
    imagen: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
  },

  {
    id: 10,
    nombre: "Desarrollo de Aplicaciones",
    mes: "Noviembre",
    imagen: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
  }

])

const cursosPopulares = computed(() => {

  return cursos.value.slice(0, 5)

})

const cursosPopularesVisibles = computed(() => {

  return cursosPopulares.value.slice(
    posicion.value,
    posicion.value + 3
  )

})

function siguiente() {

  if (
    posicion.value <
    cursosPopulares.value.length - 3
  ) {

    posicion.value++

  }

}

function anterior() {

  if (posicion.value > 0) {

    posicion.value--

  }

}

</script>


<style scoped>

#Cursos {

  width: 100%;

  padding: 50px 20px;

  text-align: center;

}


#Cursos > h2 {

  font-size: 40px;

  margin-bottom: 10px;

}


#Cursos > p {

  font-size: 18px;

  margin-bottom: 30px;

}

.carrusel {

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 35px;

  width: 100%;

  margin-top: 30px;

}

.curso-card {

  width: 300px;

  flex-shrink: 0;

}


.curso-card img {

  width: 300px;

  height: 300px;

  object-fit: cover;

  border-radius: 10px;

}


.curso-card h3 {

  margin: 15px 0 5px;

  font-size: 22px;

}


.curso-card p {

  margin: 0;

  font-size: 18px;

}

.carrusel > button {

  width: 55px;

  height: 55px;

  flex-shrink: 0;

  border: none;

  border-radius: 50%;

  font-size: 38px;

  cursor: pointer;

}

.boton-ver-mas {

  margin-top: 40px;

  padding: 12px 30px;

  border: none;

  border-radius: 5px;

  background-color: #1e5aa8;

  color: white;

  font-size: 17px;

  cursor: pointer;

}

.lista-cursos {

  display: flex;

  flex-direction: column;

  align-items: flex-start;

  width: 60%;

  margin-top: 40px;

  padding-left: 5%;

  text-align: left;

}


.lista-cursos h2 {

  margin-bottom: 15px;

}


.lista-cursos ol {

  padding-left: 25px;

}


.lista-cursos li {

  margin-bottom: 10px;

  font-size: 18px;

}

@media (max-width: 1100px) {

  .carrusel {
    gap: 20px;
  }

  .curso-card {
    width: 240px;
  }

  .curso-card img {
    width: 240px;
    height: 240px;
  }

}

@media (max-width: 700px) {

  .carrusel {
    gap: 10px;
  }

  .curso-card {
    width: 200px;
  }

  .curso-card img {
    width: 200px;
    height: 200px;
  }

  .carrusel > button {
    width: 40px;
    height: 40px;
    font-size: 25px;
  }

  #Cursos > h2 {
    font-size: 32px;
  }

  #Cursos > p {
    font-size: 16px;
  }

}

@media (max-width: 480px) {

  .curso-card {
    width: 170px;
  }

  .curso-card img {
    width: 170px;
    height: 170px;
  }

  .curso-card h3 {
    font-size: 18px;
  }

  .curso-card p {
    font-size: 15px;
  }

  .lista-cursos {
    width: 90%;
    padding-left: 0;
  }

}

</style>

