<template>
<div style="width :500px;height:300px">
    <Row>
        <Col span="12">
            {{test}}
            <Time></Time>
        </Col>
        <Col span="12"><Button></Button></Col>
    </Row>
    <br>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
    </Row>
</div>
</template>
<script>
    import Button from './Button.vue'
    import Time from './Time.vue'


    export default {
        data () {
            return {test: 'hello vue'}
        },
        components: {
            Button,
            Time 
        }
        
    }
</script>

