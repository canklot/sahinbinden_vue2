import Laptop from "./Laptop"
import Emlak from "./Emlak"
import Anasayfa from "./Anasayfa"
import Hakkımızda from "./Hakkımızda"
import iletişim from "./iletişim"
import Medya from "./Medya"




export const routes= [
    {path : "", component:Anasayfa,name:"Anasayfa"},
    {path : "/Laptop", component:Laptop,name:"Laptop"},
    {path : "/Emlak", component:Emlak,name:"Emlak"},
    {path : "/Hakkımızda", component:Hakkımızda,name:"Hakkımızda"},
    {path : "/iletişim", component:iletişim,name:"iletişim"},
    {path : "/Medya", component:Medya,name:"Medya"},




]
