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

// 加载软件库列表
function loadSoftwareList() {
    database.ref('sites').once('value').then((snapshot) => {
        const softwareListContainer = document.getElementById('软件库列表id');
        softwareListContainer.innerHTML = ''; // 清空现有列表

        snapshot.forEach((childSnapshot) => {
            const site = childSnapshot.val();
            const div = document.createElement('div');
            div.className = '软件库块class';
            div.setAttribute('onclick', `window.open('${site.url}', '_blank')`);
            div.innerHTML = `<span class="lbk-wz-class">${site.name}</span>`;
            softwareListContainer.appendChild(div);
        });
    }).catch((error) => {
        console.error("Error loading software list: ", error);
    });
}

// 调用函数加载软件库列表
loadSoftwareList();
