var app= new Vue(
    {
        el: "#root",
        data:{
            array:[],
            
        },

        created(){
            let array2=[]
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res)=>{
                    console.log(res.data.response)
                    this.array.push(res.data.response)
                });  
                
            }
            console.log(this.array)
        },
        methods:{
            
        }
    }
  

)