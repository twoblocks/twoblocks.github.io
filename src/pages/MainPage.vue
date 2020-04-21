<template>
  <div>
    <header-block />
    <why-us-block />
  </div>
</template>

<script>
  import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
  import WhyUsBlock from "../components/WhyUsBlock/WhyUsBlock"
  export default {
  name: "App",

  components: {
    HeaderBlock,
    WhyUsBlock
  },

  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/styles/index.scss";
</style>
