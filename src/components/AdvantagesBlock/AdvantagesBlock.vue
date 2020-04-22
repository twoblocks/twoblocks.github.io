<template>
    <section class="advantages-block">
        <div id="advantages" class="target-class" />
        <v-container class="mxw1200">
            <v-row>
                <v-col>
                    <h2 class="advantages-block_header header_section_head">{{ $t('advantagesBlock.skills.skillsHead') }}</h2>
                </v-col>
            </v-row>
            <v-row class="advantages-block_row">
                <v-col
                    cols="12"
                    md="6"
                    class="advantages-block_text"
                    v-for="(advantagesItem, i) in $t('advantagesBlock.skills.items')"
                    :key="`whyUsBlockItem${i}`"
                >
                    <div
                        class="advantages-block_text__items"
                        height="100px"
                    >
                        <span class="itemsText">
                            {{ advantagesItem.item }}
                        </span>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "AdvantagesBlock"
    }
</script>

<style lang="scss" scope>
@import "../../assets/styles/index";
.advantages-block{
    position: relative;
    padding: 100px 0;

    .advantages-block_header{

    }
    .advantages-block_row {
        margin-top: 40px;
        .advantages-block_text {

            .advantages-block_text__items {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                .itemsText {
                    color: white;
                    background-color: $primaryColor;
                    box-shadow: 0 4px 10px -5px $primaryColor;
                    max-width: 450px;
                    padding: 20px;
                    font-size: 18px;
                    border-radius: 5px;
                    font-weight: bold;
                }
            }
        }
    }

}
</style>
