<template>
  <section id="Inscripcion" class="inscripcion">

    <div class="formulario">

      <h1>Inscripción a cursos</h1>

      <p>
        Completa el siguiente formulario para solicitar tu inscripción.
      </p>

      <form @submit.prevent="inscribirse">

        <label>Nombre completo</label>
        <input
          type="text"
          v-model="nombre"
          placeholder="Escribe tu nombre"
          required
        >

        <label>Correo electrónico</label>
        <input
          type="email"
          v-model="correo"
          placeholder="Escribe tu correo"
          required
        >

        <label>Teléfono</label>
        <input
          type="tel"
          v-model="telefono"
          placeholder="Escribe tu teléfono"
          required
        >

        <label>Curso</label>
        <select v-model="curso" required>
          <option value="">Selecciona un curso</option>

          <option
            v-for="curso in cursos"
            :key="curso"
            :value="curso"
          >
            {{ curso }}
          </option>
        </select>

        <label>Modalidad</label>

        <div class="modalidad">
          <label>
            <input
              type="radio"
              value="Presencial"
              v-model="modalidad"
            >
            Presencial
          </label>

          <label>
            <input
              type="radio"
              value="En línea"
              v-model="modalidad"
            >
            En línea
          </label>
        </div>

        <label>Horario</label>
        <select v-model="horario" required>
          <option value="">Selecciona un horario</option>
          <option value="Matutino">Matutino</option>
          <option value="Vespertino">Vespertino</option>
          <option value="Sabados">Sábados</option>
        </select>

        <label class="terminos">
          <input
            type="checkbox"
            v-model="acepta"
            required
          >
          Acepto los términos de inscripción
        </label>

        <button type="submit">
          Inscribirme
        </button>

      </form>

      <div v-if="enviado" class="confirmacion">
        <h2>¡Solicitud enviada!</h2>

        <p>
          Gracias, {{ nombre }}. Tu solicitud de inscripción
          ha sido recibida correctamente.
        </p>

        <p>
          Curso seleccionado: {{ curso }}
        </p>

        <button @click="nuevoRegistro">
          Realizar otra inscripción
        </button>
      </div>

    </div>

    <img
      :src="imagenInscripcion"
      class="imagen-inscripcion"
      alt="Inscripción a cursos"
    >

  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import imagenInscripcion from '../assets/inscripciones.jpg'

const nombre = ref('')
const correo = ref('')
const telefono = ref('')
const curso = ref('')
const modalidad = ref('')
const horario = ref('')
const acepta = ref(false)
const enviado = ref(false)

const cursos = [
  'Programación Web',
  'Diseño Gráfico',
  'Marketing Digital',
  'Desarrollo de IA',
  'Bases de Datos',
  'Inglés',
  'Fotografía',
  'Excel Avanzado',
  'Emprendimiento',
  'Desarrollo de Aplicaciones'

]

function inscribirse() {
  enviado.value = true
}

function nuevoRegistro() {
  nombre.value = ''
  correo.value = ''
  telefono.value = ''
  curso.value = ''
  modalidad.value = ''
  horario.value = ''
  acepta.value = false
  enviado.value = false
}

</script>

<style scoped>

.inscripcion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 50px 8%;
  min-height: 600px;
}

.formulario {
  width: 50%;
}

.formulario h1 {
  margin-bottom: 10px;
}

.formulario p {
  margin-bottom: 25px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.modalidad {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}

.modalidad label {
  display: flex;
  align-items: center;
  gap: 5px;
}

.terminos {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
}

button {
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

.imagen-inscripcion {
  width: 40%;
  max-width: 450px;
  height: 450px;
  object-fit: cover;
}

.confirmacion {
  margin-top: 25px;
  padding: 25px;
  border-radius: 8px;
  background-color: #f0f0f0;
}

.confirmacion h2 {
  margin-bottom: 10px;
}

@media (max-width: 700px) {

  .inscripcion {
    flex-direction: column;
  }

  .formulario {
    width: 100%;
  }

  .imagen-inscripcion {
    width: 100%;
    height: 350px;
  }

}

</style>