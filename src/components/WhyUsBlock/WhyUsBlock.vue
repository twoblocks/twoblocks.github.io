<template>
  <section class="why-us-block">
    <div id="why-us" class="target-class" />
    <v-container class="mxw1200">
      <v-row>
        <v-col>
          <h2 class="header__text__section_block secondaryColor">{{ $t('whyUsBlock.head') }}</h2>

          <div class="whyUsBlockText secondaryColor">
            <div
              v-for="(whyUsBlockItem, i) in $t('whyUsBlock.texts')"
              :key="`whyUsBlockItem${i}`"
              class="whyUsBlockText__item"
            >
              <span>{{ whyUsBlockItem.item }}</span>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>

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
  border-bottom: 1px solid $primaryColor;
  position: relative;
    padding: 100px 0;
    .whyUsBlockText{
        margin-top: 50px;
        .whyUsBlockText__item{
          font-size: 20px;
          text-align: center;
          padding: 10px 0;
        }
    }
}
</style>
