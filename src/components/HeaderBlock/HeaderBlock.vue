<template>
  <section class="header-block">
    <div id="home" class="target-class" />
    <v-container class="mxw1200">
      <v-row class="header_text">
        <v-col >
          <h1 class="secondaryColor">{{ $t('header.head') }}</h1>
          <h3 class="secondaryColor">{{ $t('header.bodyText') }}</h3>
          <v-btn
            class="header-block__learnMore"
            outlined
            href="#why-us"
            color="secondaryColor"
          >
            {{ $t('header.subscribeBtn') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "HeaderBlock",
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/index";
.header-block{
  position: relative;
  height: 100vh;
  padding-top: 100px;
  border-bottom: 1px solid $primaryColor;
  background-image: url(/img/Header_block.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  .header_text{
    padding-top: 100px;
  }
  .header-block__learnMore{
    margin-top: 20px;
  }
}
</style>
