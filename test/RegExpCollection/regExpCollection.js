const regexURL = /((https?:|ftp:)\/\/)?|(\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/gi;
const url = ["www.baidu.com",
    "http://www.baidu.com",
    "https://www.baidu.com",
    "baidu.com",
    "test.baidu.com",
    "gds.baidu.com",
    "ftp://www.baidu.com"
];
for(let u of url){
    console.log(regexURL.test(u));
}