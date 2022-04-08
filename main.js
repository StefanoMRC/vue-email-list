var app= new Vue(
    {
        el: "#root",
        data:{
            array:[],
            prova : null
        },
        created(){
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res)=>{
                    console.log(res.data.response)
                    this.prova=res.data.response
                    this.array.push(this.prova)
                });  
                
            }
            console.log(this.array)
        },
        methods:{
            
        }
    }
  

)