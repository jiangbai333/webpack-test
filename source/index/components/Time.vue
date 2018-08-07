<template>
    <div class='time'>{{getTime()}}</div>
</template>
<script>
    import { Rander } from '../libs/rander.js'    

    export default {
        methods: {
            getTime () {
                (function loop() {
                    document.querySelector(".time").innerHTML = new Date();
                    setTimeout(loop, 1000)
                })()
              return  '128'
            }
          }
    }
</script>
