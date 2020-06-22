const result=[]
const person={
    name:'priya',
    city:'bangalore'
}
const man={
    name:'',
    city:''
}
function getValue(person,man){
    
        let a=[...result,man,person]
        console.log(a)
        for(let i=0;i<a.length;i++){
          //  console.log('hiiiii')
        a[0].name="sona"
        a[0].city='crj'
        }
        console.log(a[0])
        console.log(a)
        

}



getValue(person,man)