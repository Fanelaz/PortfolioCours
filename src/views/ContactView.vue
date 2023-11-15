<template>
  <div class="container">
    <h2>Contactez-nous</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Nom :</label>
      <input v-model="formData.name" type="text" id="name" name="name" required>

      <label for="email">Prenom</label>
      <input v-model="formData.firstname" type="text" id="firstname" name="firstname" required>

      <label for="message">Message :</label>
      <textarea v-model="formData.message" id="message" name="message" rows="4" required></textarea>

      <button type="submit">Envoyer</button>

      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
  
<div class="coor">
    <h3>Coordonées</h3>
    <div class="coo"></div>
    <a href="tel:0633264292"><p>Téléphone : 06-33-26-42-92</p></a>
    <a href="mailto:lbmickael@icloud.com"><p>Mail : lbmickael@icloud.com</p></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        firstname: '',
        message: ''
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    submitForm() {
      if (this.formData.name && this.formData.firstname && this.formData.message) {
        // Le formulaire est entièrement rempli
        this.successMessage = "Formulaire envoyé avec succès!";
        this.errorMessage = "";
        // Vous pouvez ajouter ici un code pour envoyer les données à votre backend
        // et réinitialiser le formulaire si nécessaire.
        this.$refs.contactForm.reset();
      } 
    }
  }
};
</script>

<style scoped>
body {
  width: auto;
  height: 1080px;
}

a {
  text-decoration: none;
  color: black;
}
.coor {
  display: block;
  text-align: center;
  font-family: cursive;
  font-size: xx-large;
}
.container {
  width: 1000px;
  height: 500px;
  margin: 50px auto;
  background: #333;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 200px;
}

h2 {
  font-size: 36px;
  font-family: cursive;
  color: white;
  text-decoration: underline;
  text-underline-offset: 8px;
}

label {
  color: #fff;
  font-family: cursive;
  font-size: larger;
}

label {
  display: block;
  margin-bottom: 8px;
}


input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border-radius: 10px;
}


button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

button:hover {
  background-color: #45a049;
}

.success-message {
  color: green;
  margin-top: 10px;
  font-family: cursive;
}

</style>
