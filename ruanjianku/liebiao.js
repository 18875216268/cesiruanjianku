 // Firebase配置
const firebaseConfig = {
    apiKey: "AIzaSyDk5p6EJAe02LEeqhQm1Z1dZxlIqGrRcUo",
    authDomain: "asqrt-ed615.firebaseapp.com",
    databaseURL: "https://asqrt-ed615-default-rtdb.firebaseio.com/",
    projectId: "asqrt-ed615",
    storageBucket: "asqrt-ed615.appspot.com",
    messagingSenderId: "131720495048",
    appId: "1:131720495048:web:35f43929e31c1cc3428afd",
};

// 初始化Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 从Firebase获取软件库列表并生成列表项
function loadSoftwareList() {
    const container = document.getElementById('软件库列表id');
    
    // 监听数据库中的数据变化
    database.ref('sites').on('value', (snapshot) => {
        container.innerHTML = ''; // 清空容器

        snapshot.forEach((childSnapshot) => {
            const site = childSnapshot.val();
            const div = document.createElement('div');
            div.className = '软件库块class';
            div.setAttribute('onclick', `window.open('${site.url}', '_blank')`);
            div.innerHTML = `<span class="lbk-wz-class">${site.name}</span>`;
            container.appendChild(div);
        });
    });
}

// 调用函数加载软件库列表
loadSoftwareList();
