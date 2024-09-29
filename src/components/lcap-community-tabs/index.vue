<template>
    <div :class="$style.root">
        <u-tabs :class="$style.tabs" appear="line" v-model="tabId">
            <u-tab :class="$style.tabCard" :value="0">
                <template slot="title">
                    <u-linear-layout direction="vertical" :class="$style.tabBox" justify="center">
                        <img :src="require('./assets/community_tab.png')" :class="$style.tabImage">
                        <u-text display="block" :class="[$style.tabText, $style.tabTextTitle]">Forum</u-text>
                        <u-text display="block" :class="[$style.tabText, $style.tabTextContent]" style="margin-top: 20px">
                            Official response, 100% answer<br>
                            Open communication to create a new generation of development model<br>
                        </u-text>
                    </u-linear-layout>
                </template>
            </u-tab>
            <u-tab :class="$style.tabCard" :value="1">
                <template slot="title">
                    <u-linear-layout direction="vertical" :class="$style.tabBox" justify="center">
                        <img :src="require('./assets/studyCenter_tab.png')" :class="$style.tabImage">
                        <u-text display="block" :class="[$style.tabText, $style.tabTextTitle]">Learning Center</u-text>
                        <u-text display="block" :class="[$style.tabText, $style.tabTextContent]" style="margin-top: 20px">
                            Customized learning routes and rich course design<br>
                            Help you master low code<br>
                        </u-text>
                    </u-linear-layout>
                </template>
            </u-tab>
            <u-tab :class="$style.tabCard" :value="2">
                <template slot="title">
                    <u-linear-layout direction="vertical" :class="$style.tabBox" justify="center">
                        <img :src="require('./assets/helpDoc_tab.png')" :class="$style.tabImage">
                        <u-text display="block" :class="[$style.tabText, $style.tabTextTitle]">Document Center</u-text>
                        <u-text display="block" :class="[$style.tabText, $style.tabTextContent]" style="margin-top: 20px">
                            Product guide, help documentation<br>
                            Functional introduction, best practices<br>
                        </u-text>
                    </u-linear-layout>
                </template>
            </u-tab>
        </u-tabs>
    
        <div :class="$style.pages">
            <u-linear-layout :style="containerStyle" type="flex" gap="none" justify="center" :class="$style.transitionAnimation">
                <div :class="$style.page" style="padding: 30px 30px 50px 30px; width: 100%">
                    <u-linear-layout style="width: 1200px; height: 380px;" justify="center" :class="$style.innerContent" display="inline">
                        <u-linear-layout direction="vertical" display="inline" style="width: 510px;" :class="$style.contentLeft">
                            <u-text display="block" :class="[$style.contentWidth, $style.contentTitle]">Developer Forum</u-text>
                            <u-text display="block" :class="[$style.contentWidth, $style.tabTextContent, $style.tabLineHeight]" overflow="break">
                                If you encounter any problems during use, you can get timely and official answers in the forum.<br>
                                The experience accumulated during use can be shared with peers in the forum.<br>
                                In the forum, make progress together with more developers.<br>
                            </u-text>
                            <u-button color="primary" :class="$style.button" @click="jumpCommunity" style="margin-top: 75px; line-height: 34px">
                                Enter the forum <img :src="require('./assets/arrow.png')" :class="$style.arrow">
                            </u-button>
                        </u-linear-layout>
                        <u-linear-layout display="inline" style="width: 500px; position: relative; top: 5.2%">
                            <img :src="require('./assets/community_content.png')" :class="$style.contentImage">
                        </u-linear-layout>
                    </u-linear-layout>
                </div>
                <div :class="$style.page" style="padding: 30px 30px 50px 30px; width: 100%">
                    <u-linear-layout style="width: 1200px; height: 380px;" justify="center" :class="$style.innerContent" display="inline">
                        <u-linear-layout direction="vertical" display="inline" style="width: 510px;" :class="$style.contentLeft">
                            <u-text display="block" :class="[$style.contentWidth, $style.contentTitle]">学习中心</u-text>
                            <u-text display="block" :class="[$style.contentWidth, $style.tabTextContent, $style.tabLineHeight]" overflow="break">
                                Comprehensive video courses, providing full-process courses from demand communication to application construction,<br>
                                Choose your learning course according to your needs and quickly unlock low-code development skills.<br>
                            </u-text>
                            <u-button color="primary" :class="$style.button" @click="jumpLearning" style="margin-top: 95px; line-height: 34px">
                                Enter the forum <img :src="require('./assets/arrow.png')" :class="$style.arrow">
                            </u-button>
                        </u-linear-layout>
                        <u-linear-layout display="inline" style="width: 500px; position: relative; top: 5.2%">
                            <img :src="require('./assets/studyCenter_content.png')" :class="$style.contentImage">
                        </u-linear-layout>
                    </u-linear-layout>
                </div>
                <div :class="$style.page" style="padding: 30px 30px 50px 30px; width: 100%">
                    <u-linear-layout style="width: 1200px; height: 380px;" justify="center" :class="$style.innerContent" display="inline">
                        <u-linear-layout direction="vertical" display="inline" style="width: 510px;" :class="$style.contentLeft">
                            <u-text display="block" :class="[$style.contentWidth, $style.contentTitle]">Document Center</u-text>
                            <u-text display="block" :class="[$style.contentWidth, $style.tabTextContent, $style.tabLineHeight]" overflow="break">
                                Rich product documentation, including user guides, FAQs, function introductions, etc.<br>
                                Provides all the guidance information on deployment, configuration, development, and launch for your convenience.<br>
                            </u-text>
                            <u-button color="primary" :class="$style.button" @click="jumpDoc" style="margin-top: 75px; line-height: 34px">
                                Check the details <img :src="require('./assets/arrow.png')" :class="$style.arrow">
                            </u-button>
                        </u-linear-layout>
                        <u-linear-layout display="inline" style="width: 500px; position: relative; top: 5.2%">
                            <img :src="require('./assets/helpDoc_content.png')" :class="$style.contentImage">
                        </u-linear-layout>
                    </u-linear-layout>
                </div>
            </u-linear-layout>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: 'lcap-community-tabs',
        data() {
            return {
                tabId: 0,
            };
        },
        computed: {
            containerStyle() {
                return {
                    transform: `translateX(-${(this.tabId) * 100 / 3}%`,
                };
            },
        },
        methods: {
            jumpCommunity() {
                window.open('/CommunityParent/Community', '_self');
            },
            jumpLearning() {
                window.open('/CommunityParent/learncenter', '_self');
            },
            jumpDoc() {
                window.open('/CommunityParent/fileIndex', '_self');
            },
        },
    };
    </script>
    
    <style module>
    .root {}
    
    .root [class^="u-tabs_head__"] {
      background-color: #FFFFFF;
    }
    .root .tabBox {
        position: relative;
    }
    .root [class^="u-tabs_tab__"] {
        margin: 0 !important;
    }
    .root .contentLeft {
        width: 300px;
        position: relative;
        top: -17%;
    }
    .root .pages {
      width: 100%;
      overflow: hidden;
      background: #F6F7FD;
    }
    .root .page {
      display: flex;
      justify-content: center;
    }
    .contentLeft .button {
        display: block;
        background: #0056FF;
        margin-left: 40px;
        border-radius: 4px;
        width: 140px;
        height: 36px;
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 500;
    }
    .root .innerContent {
        background: #ffffff;
        box-shadow: 0px 20px 60px rgba(47, 56, 111, 0.1);
        border-radius: 16px;
    }
    .root .tabCard {
        width: 400px;
        margin: 20px;
    }
    
    .root [class^="u-tabs__"] [class^="u-tabs_item__"][class]:after {
        bottom: 6px;
        height: 4px;
    }
    .root .tabs [class^="u-tabs_head__"] {
        border-bottom-width: 0;
    }
    .root .tabText {
        width: 335px;
        white-space: normal;
    }
    .root .contentWidth {
        text-align: left;
        margin-left: 40px;
    }
    .root .tabTextTitle {
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 17px;
    }
    .root .tabTextContent {
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 30px;
    }
    .root .tabLineHeight {
      line-height: 30px;
    }
    .root .contentTitle {
        font-family: 'PingFang TC';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 34px;
        color: #1F2F4D;
        padding-bottom: 10px;
    }
    .root .tabs [class^="u-tabs_scroll__"] {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .root .tabs [class^="u-tabs_nav__"] {
        height: 260px !important;
        padding-top: 30px;
    }
    .root [class^="u-tabs_body__"] {
        display: none;
    }
    .root [class^="u-tabs_item__"] {
        color: #778399;
    }
    .root [class^="u-tabs_item__"]:hover,
    .root [class^="u-tabs_item__"][selected] {
        color: #1F2F4D !important;
    }
    
    .root .contentImage {
        width: 480px;
        height: 360px;
    }
    .root .tabImage {
        width: 80px;
        height: 80px;
        margin-top: 15px;
        margin-bottom: 10px;
    }
    .root .transitionAnimation {
        transition: 0.2s ease-in-out;
        width: 300%;
        min-width: 3780px;
    }
    .root [class^="u-linear-layout__"][direction=vertical]>:not(:last-child) {
        margin-bottom: 4px;
    }
    .root .arrow {
        width: 10px;
        height: 10px;
        margin-left: 4px;
        display: inline-block;
    }
    </style>