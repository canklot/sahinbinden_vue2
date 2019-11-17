import Laptop from "./Laptop"
import Emlak from "./Emlak"
import Anasayfa from "./Anasayfa"
import Hakkımızda from "./Hakkımızda"


export const routes= [
    {path : "", component:Anasayfa,name:"Anasayfa"},
    {path : "/Laptop", component:Laptop,name:"Laptop"},
    {path : "/Emlak", component:Emlak,name:"Emlak"},
    {path : "/Hakkımızda", component:Hakkımızda,name:"Hakkımızda"},
]
