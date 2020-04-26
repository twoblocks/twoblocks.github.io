<template>
  <section class="footer-block" >
    <v-container class="height100pr">
      <v-row class="copyright_row">
        <v-col class="copyright">
          <h4>© 2020 TwoBlocks</h4>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "FooterBlock",
  props: {

  },
  computed: {
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index";
.footer-block {
  background-color: #1B2A3B;
  width: 100%;
  height: 100px;
  .copyright_row {
    width: 100%;
    height: 100%;
    .copyright{
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      h4 {
        color: white;
      }
    }
  }
}
</style>
