<template>
    <div id="test">
    
        <h3>My Test Component</h3>
        <span>{{masg}}</span>
        <button @click.prevent="Mybutton()">Click</button>
        {{name}}
    
    </div>

</template>


<script>

    export default{

        name:'Test',
        props:['masg'],
        data(){
            return{
                 name:'Jony'
            }
        },

        methods:{
            Mybutton(){
                this.name = 'Jony isalm';
            }
        },
        updated(){
            alert('This is a Updated');
        }

    }
</script>