<template>
<div style="min-width: 1200px">
    <div style="background:#343e4f">
        <u-navbar style="width: 100%;">
            <template #left>
                <u-navbar-item href="/" style="margin-left: 20px">Kubevue Low Code</u-navbar-item>
            </template>
            <u-navbar-item href="/">Products</u-navbar-item>
            <u-navbar-item href="/">About Us</u-navbar-item>
            <template #right>
                <u-navbar-item href="/dashboard" style="margin-right: 20px">Console</u-navbar-item>
            </template>
        </u-navbar>
    </div>
    <div style="background: #1c2138;">
        <u-carousel style="width: 100%; margin: 0 auto; height: 420px; text-align: center;">
            <u-carousel-item>
                <u-link>
                    <u-image style="width:100%;height:100%" src="https://static-kubevue.s3.amazonaws.com/assets/cloud-ui/1.jpg"></u-image>
                </u-link>
            </u-carousel-item>
            <u-carousel-item>
                <u-link>
                    <u-image style="width:100%;height:100%" src="https://static-kubevue.s3.amazonaws.com/assets/cloud-ui/3.jpg"></u-image>
                </u-link>
            </u-carousel-item>
        </u-carousel>
    </div>

    <u-linear-layout style="width: 1200px; margin: 0 auto;">
        <u-linear-layout style="position: relative; height: 840px; margin: 0 auto">
            <div style="position: absolute; top:80px;left:0;right:0; margin:0 auto;text-align:center;">
                <div style="color:#333;font-size:32px;line-height:45px;margin-bottom:12px;font-weight:500">Let software drive productivity</div>
                <div style="color:#687492;font-size:16px;line-height:22px;">
                    Create a more efficient software productivity platform
                </div>
            </div>

            <div style="position: absolute;top:285px;left:75px;width:288px">
                <div style="color:#333;font-size:24px;line-height:34px;margin-bottom:16px;font-weight:500">Let software drive productivity</div>
                <div style="color:#687492;font-size:16px;line-height:32px;">
                    <span style="color:#333">Service:</span> Reshape enterprises’ digital service capabilities
                    <br><span style="color:#333">Agile:</span> Agile iteration improves R&D and operation and maintenance efficiency
                    <br><span style="color:#333">Efficiency:</span> Software life cycle automation and collaboration level
                    <br><span style="color:#333">Open:</span> Create an open technology system and software architecture
                </div>
                <u-link style="margin-top:16px;font-size:16px;line-height:32px;display: block;">View details ></u-link>
                <u-button color="primary" style="margin-top:40px;height:42px;line-height:42px" href="/">Free Trial</u-button>
            </div>
            <u-image src="https://static-kubevue.s3.amazonaws.com/assets/%E5%8F%B3%E5%9B%BE%402x.png" style="position: absolute;top:240px;left:455px;width:672px;height: 400px">
            </u-image>
        </u-linear-layout>
    </u-linear-layout>

    <div style="height:320px;background: #242A38;">
        <div style="width: 1200px;margin: 0 auto;">
            <div style="position: relative;height:174px;margin:0 auto ;left:30px;right:0">
                <div style="position: absolute;top:30px;left:0">
                    <div style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">Products and Services</div>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Kubeworkz Microservice</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Kubeworkz Hybrid Cloud</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Kubeworkz Low Code</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Kubeworkz Middleware</a>
                </div>
                <div style="position: absolute;top:30px;left:217px;">
                    <div style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">About Us</div>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Company Profile</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Media Reports</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Honor and Certification</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Friendly Links</a>
                </div>
                <div style="position: absolute;top:30px;left:424px;">
                    <div style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">Resources and Documentation</div>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Newbie Help</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Product Documentation</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Developer Resources</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Recording Help</a>
                </div>
                <div style="position: absolute;top:30px;left:641px;">
                    <div style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">We Sincerely Invite Cooperation</div>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Channel Cooperation</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Community Cooperation</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Educational Cooperation</a>
                </div>
                <div style="position: absolute;top:30px;left:842px;">
                    <div style="display:block;font-size: 16px;line-height: 22px;color:#fff;margin-top:10px">Management and Support</div>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Console</a>
                    <a style="display:block;font-size: 14px;line-height: 20px;color:#999;margin-top:8px">Contact Us</a>
                </div>
                <div style="position: absolute;left:1049px;top:30px">
                    <a style=" position: relative;
display: inline-block;
width: 24px;
height: 24px;
background-size: 24px auto;
background-position: 0 -48px;
background-image: url(https://static-kubevue.s3.amazonaws.com/assets/footer-icon-sns.png);" @mouseenter="linkCode = 'weixin'" v-show="linkCode !== 'weixin'" weixin>

                    </a>
                    <a style=" position: relative;
display: inline-block;
width: 24px;
height: 24px;
background-size: 24px auto;
background-position: 0 -72px;
background-image: url(https://static-kubevue.s3.amazonaws.com/assets/footer-icon-sns.png);" @mouseenter="linkCode = 'weixin'" v-show="linkCode === 'weixin'" weixin>
                        <u-image style=" position: absolute;width: 120px;height: 120px;max-width: none;top: 30px;right: -30px;" src="https://static-kubevue.s3.amazonaws.com/assets/weixin%402x.png" fit="full"></u-image>
                    </a>
                    <a href="/" weibo style=" position: relative;
display: inline-block;
width: 24px;
height: 24px;
background-size: 24px auto;
background-position: 0 -24px;
margin-left:20px;
background-image: url(https://static-kubevue.s3.amazonaws.com/assets/footer-icon-sns.png);" @mouseenter="linkCode = 'weibo'" v-show="linkCode === 'weibo'">
                        <u-image style=" position: absolute;width: 120px;height: 120px;max-width: none;top: 30px;right: -30px;" src="https://static-kubevue.s3.amazonaws.com/assets/weibo%402x.png" fit="full"></u-image>
                    </a>
                    <a href="/" weibo style=" position: relative;
display: inline-block;
width: 24px;
height: 24px;
margin-left:20px;
background-size: 24px auto;
background-position: 0 0;
background-image: url(https://static-kubevue.s3.amazonaws.com/assets/footer-icon-sns.png);" @mouseenter="linkCode = 'weibo'" v-show="linkCode !== 'weibo'">
                    </a>
                </div>
            </div>
            <div style="margin-top: 70px;font-size: 14px;line-height: 20px;color:#999;text-align:center">
                <div>XX Company Copyright © 2023-Present </div>
                <div style="margin-top:10px">Registration Number</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            linkCode: 'weixin',
        };
    },
};
</script>
