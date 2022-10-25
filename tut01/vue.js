
Vue.component("Layout",{

    props:{
        ppp:{
            type: String,
            default:"no"
        }
    },

    template:`
    <div class="menu">
        <div>menu</div>
        <ul>
            <li v-for="page in pages">
                <div >
                <a v-if="page!==ppp" v-bind:href="addHtml(page)">{{page}}</a>
                <a v-else >{{page}}</a>
                </div>
            </li>      
        </ul>
    </div>
`,
    data(){
        return{

            pages:["home","chi siamo?","contatti"],
            
        }
    },
    methods:{
        addHtml(stringa){
            if(stringa=="chi siamo?"){
                return "./chisiamo.html"
            }
            return "./"+stringa+".html"
        },
    
    }
})
Vue.component("home",{  
    template:`
    <div>
        <h1 class="titolo">Home</h1>
        <div class="lorem">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius accusantium similique distinctio cum optio. Sapiente quaerat quo qui omnis maiores! Facilis necessitatibus, consectetur sapiente enim veniam hic quo sequi.
            </p>
        </div>
    </div>
    `,
    data(){
        return{
            
            
        }
    },
    methods:{
       

    }
})


Vue.component("chisiamo",{
      template:`<div>
        <h1 class="titolo">Chi siamo?</h1>
        <div class="lorem">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure fuga ab voluptatem nam error facere consectetur odit! Exercitationem dicta eligendi error laudantium nam obcaecati voluptas eos accusamus provident! Ullam?            
            </p>
        </div>
    </div>
    `,
      data(){
        return{
            
            
        }
    }
})
Vue.component("contatti",{
      template:`
      <div>
        <h1 class="titolo">Contatti</h1>
        <div class="lorem">
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, aspernatur ipsa, animi rem voluptates, amet fugiat magni non nulla incidunt consectetur sunt atque quibusdam modi a facilis enim vero sapiente.            
            </p>
        </div>
    </div>
    `,
      data(){
        return{
            
            
        }
    }
})

    var pagina = new Vue({
        
        el:'#app',
        data:{
            pagine:["home","chisiamo","contatti"]
             
        },
        methods:{
    
            getPagina(){
                return this.nomePagina()
            }
    
        }
        
    
    
    })