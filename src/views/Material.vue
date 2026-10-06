<template>
  <section id="Material" class="material">

    <h1>Material de apoyo</h1>

    <p>
      En esta sección encontrarás recursos que pueden ayudarte a complementar
      los conocimientos adquiridos durante los cursos de Colegio TecCursos.
    </p>

    <hr>

    <h2>Guías y documentos</h2>

    <p>
      Consulta materiales de apoyo para reforzar los temas vistos durante
      las clases y realizar tus actividades de aprendizaje.
    </p>

    <ul>
      <li>Guía de introducción a la programación</li>
      <li>Material de desarrollo web</li>
      <li>Guía básica de bases de datos</li>
      <li>Material de apoyo para marketing digital</li>
    </ul>

    <hr>

    <h2>Recursos en línea</h2>

    <p>
      También puedes utilizar diferentes recursos digitales para practicar
      y ampliar tus conocimientos.
    </p>

    <div class="recursos">

      <div class="recurso">
        <h3>Programación Web</h3>
        <p>
          Material para practicar HTML, CSS y JavaScript y mejorar tus
          conocimientos de desarrollo web.
        </p>
        <a href="https://developer.mozilla.org/es/" target="_blank">
          Consultar recurso
        </a>
      </div>

      <div class="recurso">
        <h3>Vue</h3>
        <p>
          Documentación y ejemplos para aprender a desarrollar aplicaciones
          utilizando Vue.
        </p>
        <a href="https://vuejs.org/" target="_blank">
          Consultar recurso
        </a>
      </div>

      <div class="recurso">
        <h3>Diseño y creatividad</h3>
        <p>
          Recursos para complementar los conocimientos adquiridos en los
          cursos de diseño gráfico y creación de contenido.
        </p>
        <a href="https://www.adobe.com/" target="_blank">
          Consultar recurso
        </a>
      </div>

    </div>

    <hr>

    <h2>Recomendaciones de estudio</h2>

    <ol>
      <li>Revisar el material antes de comenzar cada actividad.</li>
      <li>Practicar los conocimientos aprendidos durante el curso.</li>
      <li>Consultar recursos adicionales cuando exista alguna duda.</li>
      <li>Realizar las actividades y ejercicios de manera constante.</li>
      <li>Guardar los materiales utilizados para futuras consultas.</li>
    </ol>

    <hr>

    <h2>Material relacionado con los cursos</h2>

    <p>
      Puedes consultar los cursos disponibles y elegir el que mejor se adapte
      a tus intereses y necesidades de aprendizaje.
    </p>

    <RouterLink to="/inscripciones" class="boton">
      Ver cursos e inscribirme
    </RouterLink>

  </section>
</template>

<style scoped>

.material {
  width: 90%;
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
  box-sizing: border-box;
}

.material h1 {
  text-align: center;
  margin-bottom: 20px;
}

.material h2 {
  margin-top: 30px;
  margin-bottom: 15px;
}

.material h3 {
  margin-bottom: 10px;
}

.material p {
  line-height: 1.6;
}

.material ul,
.material ol {
  line-height: 1.8;
  padding-left: 25px;
}

.material hr {
  margin: 30px 0;
}

.recursos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.recurso {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
}

.recurso a {
  display: inline-block;
  margin-top: 10px;
  word-break: break-word;
}

.boton {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  box-sizing: border-box;
}

@media (max-width: 800px) {

  .material {
    width: 95%;
    margin: 30px auto;
    padding: 15px;
  }

  .recursos {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 500px) {

  .material {
    width: 100%;
    margin: 20px auto;
    padding: 15px;
  }

  .material h1 {
    font-size: 30px;
  }

  .material h2 {
    font-size: 24px;
  }

  .material h3 {
    font-size: 20px;
  }

  .material p {
    font-size: 16px;
  }

  .material ul,
  .material ol {
    padding-left: 20px;
  }

  .recurso {
    padding: 15px;
  }

  .boton {
    width: 100%;
    text-align: center;
  }

}

</style>