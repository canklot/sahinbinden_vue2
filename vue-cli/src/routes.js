import Laptop from "./Laptop"
import Emlak from "./Emlak"

export const routes= [
    {path : "", component:Laptop,name:"Laptop",meta:{Title:"laptop"}},
    {path : "/Emlak", component:Emlak,name:"Emlak",meta:{Title:"Emlak"}},
]