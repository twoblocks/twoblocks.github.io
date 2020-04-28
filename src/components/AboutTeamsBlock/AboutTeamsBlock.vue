<template>
    <section class="about-teams-block">
        <div id="teams" class="target-class" />
        <v-container class="mxw1200">
            <v-row class="teams-head">
                <v-col class="teams-head__col">
                    <h2 class="header__text__section_block header_section_head">{{$t('aboutTeams.head')}}</h2>
                </v-col>
            </v-row>
            <v-row class="teams-carts">
                <v-col
                    cols="12"
                    md="3"
                    v-for="member in $t('aboutTeams.persons')"
                    :key="`member${member.id}`"
                    class="teams-carts__col"
                >
                    <v-card outlined class="teams-carts__item" >
                        <div class="imgSocial">
                            <v-img
                                class="imgSocial_item"
                                :src="`/img/imgComponents/AboutTeamsBlock/${member.img}.jpg`"
                                height="300px"
                            />
                            <div class="social__item">
                                <a :href="`${socialItems.link}`" target="_blank" v-for="socialItems in member.social" :key="`socialID${socialItems.id}`">
                                    <img :src="`/img/social/icon_social_${socialItems.type}.svg`">
                                </a>
                            </div>
                        </div>
                        <v-card-title>
                            {{member.name}}
                        </v-card-title>
                        <v-card-subtitle>
                            {{member.position}}
                        </v-card-subtitle>
                        <v-card-text class="text">
                            {{member.skills}}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "AboutTeamsBlock"
    }
</script>

<style lang="scss" scope>
@import "../../assets/styles/index";
.about-teams-block{
    position: relative;
    margin-top: 40px;
    .teams-carts{
        display: flex;
        justify-content: center;
        .teams-carts__col{
            display: flex;
            justify-content: center;
            max-width: 300px;
            .imgSocial{
                width: 100%;
                height: 100%;
                max-height: 300px;
                display: flex;
                position: relative;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                overflow: hidden;
                imgSocial_item {

                }
                .social__item{
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: rgb(0, 0, 0, 0.0);
                    transition: .2s;
                    opacity: 0;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    padding-bottom: 20px;
                    a {
                        margin: 5px 10px;
                    }
                    &:hover {
                        transition: .2s;
                        opacity: 1;
                        background-color: rgb(0, 0, 0, 0.4);
                    }
                }
            }
            .teams-carts__item{
                border: none;
                position: relative;
                margin: 10px 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                .text{
                    height: 120px;
                    text-align: center;
                    font-size: 15px;
                    margin-top: -10px;
                }
            }
        }
    }
}
</style>
