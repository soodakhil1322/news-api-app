import Header from "./Header"

function Headercomp(){


const userdata =[
    "AJJTAKK",
    "LALLANTOP",
    "",
    "BUSINESS TODAY",
    "BANGLA",
    "MALYALAM",
    "NORTEAST",
    "BTBAZAR",
    "SPORTS TAK"
]
return (<div>
    <Header userdata={userdata}></Header>
</div>)
}
export default Headercomp