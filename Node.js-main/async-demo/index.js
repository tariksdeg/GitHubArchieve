
// Asynchronous
console.log("Before");
// getUser(1, getRepositories);                                     // Görünüm sadeleşti


// getUser(1, (user) => {                                        // Bu şekilde async yapıyoruz
//     getRepositories(user.gitHubUsername,(repos)=> {
//         // console.log('Repos',repos)
//         getCommits(repos,(commits)=> {
// console.log(commits)
//         })
//     })
// });

// Promise-based approach
getUser(1)            // Promise yaptık
.then(user=>getRepositories(user.gitHubUsername))
.then(repos=>getCommits(repos[0]))
.then(commits=>console.log('commits',commits))
.catch(err=>console.log('Error',err.message))

// Async-await approach
async function displayCommits(){
    try {
    const user = await getUser(1)
    const repos = await getRepositories(user.gitHubUsername)
    const commits = await getCommits(repos[0])
    console.log(commits)  
    }
   catch(err){
    console.log('error',err.message)
   }
}

displayCommits()
console.log("After");

function getRepositories(user){
    getRepositories(user.gitHubUsername,getCommits)
}

function getCommits(repos){
    getCommits(repos,displayCommits)
}

function displayCommits(commits){
    console.log(commits)
}
//Synchronous

// console.log('Before')
// getUser(1)
// getRepositories(user.gitHubUsername)
// getCommits(repos[0])
// console.log('After')

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("Reading user from db...");
//     callback({ id: id, gitHubUsername: "Tarik" });
//   }, 2000);
// }
function getUser(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Reading user from db...");
            resolve({ id: id, gitHubUsername: "Tarik" });
          }, 2000);
    })

}

// function getRepositories(username,callback){
//     setTimeout(()=> {
// console.log('Calling Github API...')
//     callback (['repo1','repo2','repo3'])
//     },2000)
// }
// function getCommits(repo,callback){
//     setTimeout(()=> {
// console.log('Calling Github API...')
//     callback (['repo1','repo2','repo3'])
//     },2000)
// }
function getRepositories(username){
    return new Promise((resolve,reject)=> {
         setTimeout(()=> {
console.log('Calling Github API...')
    resolve (['repo1','repo2','repo3'])
    },2000)   
    })

}
function getCommits(repo){
    return new Promise((resolve,reject)=>{
           setTimeout(()=> {
console.log('Calling Github API...')
    resolve (['commit'])
    },2000) 
    })

}