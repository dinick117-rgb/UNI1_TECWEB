<template>

  <section id="Contacto" class="contacto">

    <div class="informacion">

      <h1>Contacto</h1>

      <p>¿Tienes alguna duda? Nuestro equipo está disponible para ayudarte.</p>

      <ul>

        <li>
          <strong>Atención General</strong>
          <p>Tél: 9991234567</p>
          <p>Correo: info@colegioteccursos.com</p>
        </li>

        <li>
          <strong>Inscripciones</strong>
          <p>Tél: 9991234568</p>
          <p>Correo: inscripciones@colegioteccursos.com</p>
        </li>

        <li>
          <strong>Soporte Técnico</strong>
          <p>Tél: 9991234569</p>
          <p>Correo: soporte@colegioteccursos.com</p>
        </li>

        <li>
          <strong>Vinculación</strong>
          <p>Tél: 9991234570</p>
          <p>Correo: vinculacion@colegioteccursos.com</p>
        </li>

      </ul>

    </div>

    <img
      :src="imagenContacto"
      class="imagen-contacto"
      alt="Colegio TecCursos"
    >

  </section>

</template>


<script setup lang="ts">

import imagenContacto from '../assets/contacto.jpg'

</script>


<style scoped>

.contacto {

  width: 100%;

  min-height: 600px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 50px 8%;

  box-sizing: border-box;

}
@media (max-width: 800px) {

  .contacto {
    flex-direction: column;
    align-items: center;
    padding: 40px 5%;
    min-height: auto;
    gap: 30px;
  }

  .informacion {
    width: 100%;
  }

  .imagen-contacto {
    width: 100%;
    max-width: 450px;
    height: 350px;
    object-fit: cover;
  }

}

@media (max-width: 500px) {

  .contacto {
    padding: 30px 5%;
  }

  .contacto h1 {
    font-size: 32px;
  }

  .contacto p {
    font-size: 16px;
  }

  .imagen-contacto {
    width: 100%;
    height: 280px;
  }

}


</style>