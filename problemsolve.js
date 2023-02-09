// let arr = [5, 4, 1, 3, 2,];
// let sum = 0;
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     if (!map[arr[i]]) {
//         map[arr[i]] = 1;
//     }
//     else {
//         map[arr[i]] += 1
//     }
// }
// let avg = sum / arr.length;
// console.log(map[avg])
// console.log(avg)


// const numbers = [2, 4, 9, 2, 0, 16, 24];

// const smallest_number = Math.min(...numbers);
// const largest_number = Math.max(...numbers);

// console.log('Smallest Value:', smallest_number);
// console.log('Largest Value:', largest_number);


const s1 = 'abce';
const s2 = 'sdae';
let newStr = [];

for (let i = 0; i < s1.length; i++) {
    if (!s2.includes(s1[i])) {
        newStr.push(s1[i])
    }
    if (!s1.includes(s2[i])) {
        newStr.push(s2[i])
    }
}

console.log(newStr)



function del(obj) {

    Object.keys(obj).forEach(key=>{
        if(obj[key]==="N/A" || obj[key] === "" || obj[key] === "-"){
          delete obj[key];
        }
        else if(Array.isArray(obj[key])) {
          let n = obj[key].length;
          let arr = [];
          for (let i = 0; i < n; i++) {
            if (obj[key][i] === "" || obj[key][i] === "-" || obj[key][i] === "N/A")
              continue;
            let p = [obj[key][i]];
            
            if (typeof(p[0]) === 'object') {
              p[0] = del(p[0]);
            }
            
            arr = arr.concat(p);
          }
          obj[key] = arr;
        }
        else if (typeof(obj[key]) === 'object') {
          obj[key] = del(obj[key]);
        }
    })
  
    return obj;
  }

resp.on("data",(a)=>{

    let obj=(JSON.parse(a.toString()));

    // let data=a.toString("utf-8");

    obj = del(obj);



    console.log(JSON.stringify(obj))

    



  })





  query getUserInfo($name: String!) {
    user(where: {login: {_eq: $name}}) {
      profile
      login
      attrs
      auditRatio
      campus
      createdAt
      totalDown
      totalUp
      updatedAt
    }
  }

  
  const resolvers = {
    Query: {
      books: function(root, args, context, info) {
        return books;
      },
      book: (root, args, context, info) => books.find(e => e.id === args.id)
    },
    Book: {
      id: parent => parent.id,
      title: parent => parent.title,
      pages: parent => parent.pages,
      chapters: parent => parent.chapters
    }
  };