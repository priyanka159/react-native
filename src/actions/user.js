import axios from 'axios'

export const loginAction=(name,userId,company)=>{
    return{type:'LOGIN',payload:{name,userId,company}}
}




// export const loginAction=(username,user,company)=>{
//     return {type:'LOGIN',payload:username,user,company}
// }



// export const startGetUsers=()=>{
//   return(dispatch)=>{
//     axios.post('https://timely-api.codewave.com/v1/mobilelogin',formData)
// .then(response=>{
//     console.warn(response.data)
//     const token=response.data.token
//     const user=response.data.user
//     const company=response.data.company
//     //const emailId=response.data.emailId
//     const username=response.data.username
//     console.warn(token,'hii',this.props)
//     if(token){
//         //resp.username, data.emailId, resp.user, resp.company
//         dispatch(loginAction(username,user,company))
//     //this.props.navigation.navigate('Work')
//     }
//     else{
//         alert('email or password is incorrect')
//     }
// })

// .catch(err=>{
//     console.warn(err)
// })
// }
// }