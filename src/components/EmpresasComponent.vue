<template>

  <section
    id="Empresas"
    class="empresas"
  >

    <h2>
      Empresas afiliadas
    </h2>

    <p>
      Conoce algunas de las empresas que colaboran con Colegio TecCursos.
    </p>

    <div class="contenedor">

      <article
        v-for="empresa in empresas"
        :key="empresa.id"
        class="card"
      >

        <img
          :src="empresa.imagen"
          :alt="empresa.nombre"
        >

        <h3>
          {{ empresa.nombre }}
        </h3>

        <p>
          {{ empresa.descripcion }}
        </p>

        <a
          :href="empresa.enlace"
          target="_blank"
        >
          Saber más
        </a>

      </article>

    </div>

  </section>

</template>


<script setup lang="ts">

const empresas = [

  {
    id: 1,

    nombre:
      'Microsoft',

    descripcion:
      'Empresa tecnológica dedicada al desarrollo de software, servicios digitales y soluciones empresariales.',

    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',

    enlace:
      'https://www.microsoft.com/es-mx'
  },


  {
    id: 2,

    nombre:
      'Google',

    descripcion:
      'Empresa tecnológica que ofrece servicios de internet, herramientas digitales y soluciones basadas en inteligencia artificial.',

    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',

    enlace:
      'https://about.google/intl/es_ALL/'
  },


  {
    id: 3,

    nombre:
      'Adobe',

    descripcion:
      'Empresa especializada en herramientas y programas para diseño gráfico, edición de imágenes, video y contenido digital.',

    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png',

    enlace:
      'https://www.adobe.com/mx/creativecloud/plans.html?sdid=8DN85BXY&mv=search&mv2=paidsearch&ef_id=CjwKCAjwlY3WBhANEiwApsNrLSNFHDokKz2VZ3X9ssZUkIMGYM7WSjp0LgWAcb9dCecx7ftvYc2w3RoCnBUQAvD_BwE:G:s&s_kwcid=AL!3085!3!459941996549!e!!g!!adobe!188200542!10039634022&gad_source=1&gad_campaignid=188200542&gbraid=0AAAAADxybVrY2v6J2APL36K6Hp0IuNG1Y&gclid=CjwKCAjwlY3WBhANEiwApsNrLSNFHDokKz2VZ3X9ssZUkIMGYM7WSjp0LgWAcb9dCecx7ftvYc2w3RoCnBUQAvD_BwE'
  }

]

</script>


<style scoped>

.empresas {

  padding:
    70px 8%;

  text-align:
    center;

}

.contenedor {

  display:
    grid;

  grid-template-columns:
    repeat(
      3,
      1fr
    );

  gap:
    25px;

  margin-top:
    30px;

}

.card {

  background:
    white;

  padding:
    25px;

  border-radius:
    12px;

  box-shadow:
    0 4px 15px
    rgba(0, 0, 0, 0.1);

}

.card img {

  width:
    120px;

  height:
    120px;

  object-fit:
    contain;

}

.card a {

  color:
    #31572c;

  font-weight:
    bold;

  text-decoration:
    none;

}

.card a:hover {

  text-decoration:
    underline;

}

@media (max-width: 800px) {

  .contenedor {

    grid-template-columns:
      1fr;

  }

}

</style>