```vue
<template>
  <section id="Inicio" class="Inicio">

    <img
      :src="imagenFondo"
      class="imagenFondo"
      alt="Colegio TecCursos"
    >

    <h1>Bienvenidx</h1>

  </section>

  <div class="contenido">
    <h2>Colegio TecCursos</h2>
    <h3>Sobre nosotros</h3>

    <p>
      Colegio TecCursos es una institución educativa dedicada a ofrecer
      cursos de formación y capacitación para personas que desean adquirir
      nuevos conocimientos, desarrollar sus habilidades y prepararse para
      nuevos retos académicos y profesionales.
      En Colegio TecCursos creemos que el aprendizaje es un proceso
      continuo. Por ello, trabajamos para ofrecer cursos actualizados,
      instructores capacitados y herramientas que permitan a nuestros
      estudiantes fortalecer sus competencias y alcanzar sus metas.
    </p>
  </div>

  <div class="separador">
    <h2>Cursos</h2>
  </div>

  <CursosComponent />

  <div class="separador">
    <h2>Casos de éxito</h2>
  </div>

  <CasosComponent />

  <div class="separador">
    <h2>Empresas afiliadas</h2>
  </div>

  <EmpresasComponent />

</template>

<script setup lang="ts">

import imagenFondo from '../assets/fondo.png'
import CursosComponent from '../components/CursosComponent.vue'
import CasosComponent from '../components/CasosComponent.vue'
import EmpresasComponent from '../components/EmpresasComponent.vue'


</script>

<style scoped>

.Inicio {
  width: 100%;
  position: relative;
}

.imagenFondo {
  width: 100%;
  height: 600px;

  object-fit: cover;
  object-position: center;

  display: block;
}

h1 {
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  margin: 0;

  font-size: 70px;
  color: white;

  text-align: center;
}

.contenido {
  padding: 40px 10%;
}

h2 {
  text-align: center;
  font-size: 50px;
}

h3 {
  text-align: center;
  font-size: 25px;
}

p {
  text-align: center;
  font-size: 16px;
  line-height: 1.8;
}

.separador {
  width: 100%;
  background-color: #1e5aa8;
  padding: 15px 0;
  margin-top: 20px;
}

.separador h2 {
  margin: 0;
  color: white;
  font-size: 35px;
  text-align: center;
}

@media (max-width: 700px) {

  .imagenFondo {
    height: 450px;
  }

  h1 {
    font-size: 45px;
  }

  .contenido {
    padding: 30px 5%;
  }

  h2 {
    font-size: 35px;
  }

  h3 {
    font-size: 22px;
  }

  p {
    font-size: 15px;
  }

  .separador h2 {
    font-size: 28px;
  }

}

@media (max-width: 480px) {

  .imagenFondo {
    height: 350px;
  }

  h1 {
    font-size: 35px;
  }

  h2 {
    font-size: 30px;
  }

}
</style>

