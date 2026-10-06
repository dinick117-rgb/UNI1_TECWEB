<template>

  <header class="header">

    <div class="header-contenido">

      <RouterLink to="/" class="logo">
        <h1>Colegio TecCusos</h1>
      </RouterLink>

      <nav class="navegacion">

        <RouterLink
          to="/"
          exact-active-class="activo"
        >
          Inicio
        </RouterLink>

        <RouterLink
          to="/inscripciones"
          exact-active-class="activo"
        >
          Inscripciones
        </RouterLink>

        <RouterLink
          to="/certificaciones"
          exact-active-class="activo"
        >
          Certificaciones
        </RouterLink>

        <RouterLink
          to="/material"
          exact-active-class="activo"
        >
          Material de apoyo
        </RouterLink>

        <RouterLink
          to="/contacto"
          exact-active-class="activo"
        >
          Contacto
        </RouterLink>

        <RouterLink
          to="/seguridad"
          exact-active-class="activo"
        >
          Seguridad y privacidad
        </RouterLink>

      </nav>

    </div>

  </header>

</template>

<script setup lang="ts">
</script>

<style scoped>

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #0c378d;
  padding: 25px 8%;
  z-index: 1000;
}

.pagina {
  padding-top: 140px;
}

.header-contenido {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.logo {
  text-decoration: none;
}

.logo h1 {
  margin: 0;
  color: white;
  font-size: 38px;
  font-weight: 600;
}

.navegacion {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.navegacion a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.navegacion a:hover {
  color: #f3e6bd;
}

.navegacion a.activo {
  color: #f3e6bd;
}

@media (max-width: 900px) {

  .header {
    padding: 20px;
  }

  .header-contenido {
    flex-direction: column;
    gap: 15px;
  }

  .logo h1 {
    font-size: 30px;
    text-align: center;
  }

  .navegacion {
    justify-content: center;
    gap: 15px;
  }

  .navegacion a {
    font-size: 16px;
  }

}

@media (max-width: 500px) {

  .header {
    padding: 15px;
  }

  .logo h1 {
    font-size: 24px;
  }

  .navegacion {
    gap: 10px;
  }

  .navegacion a {
    font-size: 14px;
  }

}
</style>