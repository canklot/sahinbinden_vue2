import Laptop from "./Laptop"
import Emlak from "./Emlak"
import Anasayfa from "./Anasayfa"

export const routes= [
    {path : "", component:Anasayfa,name:"Anasayfa"},
    {path : "/Laptop", component:Laptop,name:"Laptop"},
    {path : "/Emlak", component:Emlak,name:"Emlak"},
]
