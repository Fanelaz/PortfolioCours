<script>
import Modale from "../components/Modale.vue";

export default {
  name: "Contenu",
  data() {
    return {
      revele: false,
    };
  },
  components: {
    modale: Modale,
  },
  methods: {
    toggleModale: function () {
      this.revele = !this.revele;
    },
  },
};
</script>

<template>
  <body>
    <h1>Projets</h1>
    <div class="container">
      <div class="CV">
        <modale :revele="revele" :toggleModale="toggleModale"></modale>
        <div v-on:click="toggleModale" class="btn">
          <h2>CURRICULUM VITAE</h2>
          <img src="../assets/CV.png" alt="image" class="cvimg" />
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
h1 {
  text-align: center;
  display: block;
}

.CV {
  display: flex;
  width: 500px;
  height: 300px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: bisque;
}

.CV:hover {
  box-shadow: 10px 5px 5px black;
  transition: 0.5s;
}

.projetsimg:hover {
  box-shadow: 10px 5px 5px black;
  transition: 0.5s;
}

.cvimg {
  height: 200px;
  border-radius: 20px;
}

h1,
h2 {
  font-family: cursive;
}

body {
  width: auto;
  height: 1080px;
}
</style>
