<template>
    <section class="advantages-block">
        <div id="advantages" class="target-class" />
        <v-container class="mxw1200">
            <v-row>
                <v-col>
                    <h2 class="advantages-block_header secondaryColor">{{ $t('advantagesBlock.skills.skillsHead') }}</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                    class="advantages-block_text secondaryColor"
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
    /*ss-ss: ;*/
    background-image: url(/img/BackgroudnBlocks.png), linear-gradient(to top left, white, #C8E6C9);
    background-position: center right 40%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 0;
    .advantages-block_header{

    }
    .advantages-block_text{
        margin-top: 5px;
        .advantages-block_text__items{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            .itemsText{
                font-size: 20px;
                text-align: center;
            }
        }
    }

}
</style>
