<template>
  <section class="why-us-block">
    <div id="why-us" class="target-class" />
    <v-container class="mxw1200">
      <v-row>
        <v-col>
          <h2 class="header__text__section_block header_section_head">{{ $t('whyUsBlock.head') }}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">

          <v-card class="whyUsBlockText someText" elevation="16">
            <div
              v-for="(whyUsBlockItem, i) in $t('whyUsBlock.texts')"
              :key="`whyUsBlockItem${i}`"
              class="whyUsBlockText__item"
            >
              <span>{{ whyUsBlockItem.item }}</span>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="imgBlock">
            <v-img src="/img/imgComponents/WhyUsBlock/whyUsBlock_team.jpg"/>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
    export default {
        name: "WhyUsBlock"
    }
</script>

<style lang="scss" scope>
@import "../../assets/styles/index";
.why-us-block{
  position: relative;
  padding: 100px 0;
  .whyUsBlockText{
    margin-top: 50px;
    padding: 15px 35px;
    .whyUsBlockText__item{
      font-size: 20px;
      padding: 10px 0;
      max-width: 500px;
    }
  }
  .imgBlock{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
