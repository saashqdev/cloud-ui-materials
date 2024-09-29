# SSidebar Nestable Sidebar

```vue
<template>
<s-sidebar :config="config"></s-sidebar>
</template>
<script>
export default {
    data() {
        return {
            config: [
                {
                    title: 'Navigation 1',
                    to: '/1',
                },
                {
                    title: 'Navigation 2',
                    href: 'https://www.s3.amazonaws.com/',
                },
                {
                    title: 'Navigation 3',
                    children: [
                        {
                            title: 'Navigation 3-1',
                            to: '/3-1',
                        },
                        {
                            title: 'Navigation 3-2',
                            to: '/3-2',
                        },
                        {
                            subnav: [
                                {
                                    title: 'Navigation 3-3',
                                    children: [
                                        {
                                            title: 'Navigation 3-3-1',
                                            to: '/3-3-1',
                                        },
                                        {
                                            title: 'Navigation 3-3-2',
                                            to: '/3-3-2',
                                        },
                                        {
                                            subnav: [
                                                {
                                                    title: 'Navigation 3-3-3',
                                                    children: [
                                                        {
                                                            title: 'Navigation 3-3-3-1',
                                                            to: '/3-3-3-1',
                                                        },
                                                        {
                                                            title: 'Navigation 3-3-3-2',
                                                            to: '/',
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                '|',
                {
                    title: 'Navigation 4',
                    to: '/4',
                },
            ],
        };
    },
}
</script>
```
