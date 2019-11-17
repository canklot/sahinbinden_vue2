import Laptop from "./Laptop"
import Emlak from "./Emlak"
import Anasayfa from "./Anasayfa"

export const routes= [
    {path : "", component:Laptop,name:"Laptop",meta:{Title:"laptop"}},
    {path : "/Emlak", component:Emlak,name:"Emlak",meta:{Title:"Emlak"}},
    {path : "/Anasayfa", component:Anasayfa,name:"Anasayfa",meta:{Title:"Anasayfa"}},
]
