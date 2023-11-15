<template>
  <footer>
    <div class="social-media">
      <a
        href="https://www.linkedin.com/in/mickaël-le-breton-b0b640293/"
        target="_blank"
        ><img src="../assets/icons8-linkedin-50.png" alt="LinkedIn Logo"
      /></a>
    </div>
    <div class="social-media">
      <a href="https://github.com/Fanelaz" target="_blank"
        ><img src="../assets/icons8-github-50.png" alt="Github Logo"
      /></a>
    </div>
    <a
      href="https://www.google.com/maps/place/Rue+Robert+Masson,+27300+Bernay/@49.0912242,0.5783382,17z/data=!4m6!3m5!1s0x47e1a3b9d6b32569:0x1814ed80898552d6!8m2!3d49.0912207!4d0.5809131!16s%2Fg%2F11hbq9gt5_?entry=ttu"
      target="_blank"
    >
      <div class="address">
        <p>Adresse:</p>
        <p>122 rue Robert Masson</p>
        <p>Bernay, France</p>
      </div>
      <img src="../assets/icons8-carte-64.png" alt="Carte Logo" class="logocarte">
    </a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #707070;
  color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  font-family: cursive;
}

.logocarte {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.address p,
.social-media p {
  margin: 0;
}

.address,
.social-media {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  color: #fff;
  font-size: large;
}
.social-media img {
  width: 50px;
  height: 50px;
  margin: 0 5px;
  border-radius: 100%;
}

.social-media img:hover {
  box-shadow: 5px 5px 5px black;
  transition: 0.5s;
}
</style>
