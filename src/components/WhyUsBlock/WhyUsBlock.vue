<template>
  <section class="why-us-block">
    <v-container>
      <v-row>
        <v-col>
          <h2>{{ $t('whyUsBlock.head') }}</h2>
          <v-divider />
          <div class="whyUsBlockText">
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
    margin: 25px 0;
    .whyUsBlockText{
        margin-top: 20px;
        .whyUsBlockText__item{
            padding: 10px 0;
        }
    }
}
</style>
