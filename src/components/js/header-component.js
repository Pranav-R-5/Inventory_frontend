import logo from "@/assets/images/bliblilogo.jpeg"
export default{
    props:['title'],
    emit:['alertmessage'],
    data(){
        return{
            message:'Logging in...',
            msg:'searching...',
            logo:logo,
        }
    },
    methods:{
        login(message) {
          alert(this.message)
        },
        search(msg){
          alert(this.msg)
        }
      }
}