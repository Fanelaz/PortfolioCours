<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
      <h2>CURRICULUM VITAE</h2>
      <p class="date">Créé le 25/09/2023</p>
      <img src="../assets/CV.png" alt="image" class="CVimg" />
      <div class="exemple">
        <a
          href="https://github.com/Fanelaz/CV"
          target="_blank"
          class="github-button"
        >
          Github
        </a>
      </div>
      <div class="lang">
        <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank">
          <img src="../assets/icons8-html-50.png" alt="HTML" />
        </a>
        <a
          href="https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/CSS_basics" target="_blank"
        >
          <img src="../assets/icons8-css-50.png" alt="CSS" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modale",
  props: ["revele", "toggleModale"],
};
</script>

<style scoped>
.lang {
  display: flex;
  align-items: center;
  justify-content: center;
}
.github-button {
  background-color: #333;
  border: none;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  display: flex;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-content: center;
}

.github-button:hover {
  background-color: #444;
}

.CVimg {
  height: 300px;
}
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: absolute;
  top: 10%;
  font-family: cursive;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
  font-family: cursive;
}

.date {
  display: flex;
  justify-content: end;
  align-items: end;
  text-decoration: underline;
}
</style>
