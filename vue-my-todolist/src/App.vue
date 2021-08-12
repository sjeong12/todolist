<template>
  <div id="main">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: 'Hello World',
    };
  },
};
</script>

<style>
#main {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
}
</style>