// module.exports={
//     devServer:{
//         proxy:{
//         '/api':{
//             target:'http://39.97.33.178',
//             changeOrigin:true
//             }
//         }
//     }
// }
module.exports = {
    devServer : {
        proxy : {
            '/api' : {
                target : 'https://result.eolinker.com/5N8U18f41d102deaf41e2a0ceb526f8b679a6220abc8a84?uri=',
                // target : 'https://result.eolinker.com/5N8U18f41d102deaf41e2a0ceb526f8b679a6220abc8a84?uri=',
                // changeOrigin : true,
                // pathRewrite: {     // pathRewrite表示路径重写，key表示一个正则，value表示别名 
                //     '^/api': '/api'   // 即用 '/api'表示'http://localhost:3000/api'
                //   }
            }
        }
    }
}