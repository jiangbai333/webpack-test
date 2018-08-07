<template>
    <Button type="primary" @click="renderFunc">Open notice</Button>
</template>
<script>
    export default {
        methods: {
            renderFunc () {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: 'The desc will hide when you set render.',
                    render: h => {
                        return h('span', [
                            'This is created by ',
                            h('a', 'render'),
                            ' function'
                        ])
                    }
                });
            }
        }
    }
</script>
