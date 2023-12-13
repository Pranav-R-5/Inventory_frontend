import elec1 from "@/assets/images/elec.jpeg";
import elec2 from "@/assets/images/electronic.jpeg";
import elec3 from "@/assets/images/headphones.jpeg";
import elec4 from "@/assets/images/oppo.jpeg";
import elec5 from "@/assets/images/printer.jpeg";
import elec6 from "@/assets/images/remote.jpeg";
import elec7 from "@/assets/images/iphone15.jpeg";

export default{
    data(){

        return{
            products: [
                {
                  img: elec7,
                  name: "Ipone 15",
                  price:"$60000"
                },
                {
                  img: elec6,
                  name: "Remote",
                  price:"$60"
                },
                {
                  img: elec5,
                  name: "Printer",
                  price:"$600"
                },
                {
                  img: elec4,
                  name: "Oppo",
                  price:"$2000"
                },
                {
                  img: elec3,
                  name: "Headphones",
                  price:"$20"
                },
                {
                  img: elec2,
                  name: "Audio Product",
                  price:"$900"
                },
                {
                  img: elec1,
                  name: "Oven",
                  price:"$100"
                },
              ],
        }
    },

methods:{
    showdetails(product){
        alert(product.name+" price is: "+product.price);
    }
}
}