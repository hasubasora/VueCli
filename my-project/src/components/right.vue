<template>
 <div class="right">
   {{msg}}

  </div> 
</template>

<script>
export default {
    name: 'right',

    data: function() {	
        return {
            msg:'右边',
            box:[
                {
                    a:1,
                    list:[
                        {
                            a:1,
                            b:2,
                            c:3
                        }
                    ]
                }
            ]
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>