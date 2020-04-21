<template>
  <section class="header-block">
    <v-container>
      <v-row>
        <v-col>
          <h1>{{$t('header.head')}}</h1>
          <h3>{{$t('header.bodyText')}}</h3>
          <v-btn class="header-block__learnMore" outlined>{{$t('header.subscribeBtn')}}</v-btn>
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
  height: 560px;
  padding-top: 100px;
  border-bottom: 1px solid $primaryColor;
  background-image: url(/img/Header_block.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  .header-block__learnMore{
    margin-top: 20px;
  }
}
</style>
