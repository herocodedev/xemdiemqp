const markApt = 'http://localhost:3000/mark'


const contentEl = document.querySelector('.content')
const inputSearch = document.querySelector('.input-search')
const searchBtn = document.querySelector('.search-btn')
var bodyTable = document.querySelector('.body-table')
var backBtn = document.querySelector('.back-home')
var data

fetch(markApt)
    .then((response) => response.json())
    .then((marks) => {
        data = marks
        console.log(marks)
        renderAllStudent(marks)
    })

function renderAllStudent(obj) {
    var htmls = obj.map((item) => {
        return `
                <tr>
                    <th scope="row">${item.stt}</th>
                    <td>${item.mssv}</td>
                    <td>${item.ten}</td>
                    <td>${item.tbhp1}</td>
                    <td>Đạt</td>
                </tr>
                
        `
    })
    var html = htmls.join('')
    bodyTable.innerHTML = html
}

function renderStudent(data) {
    bodyTable.innerHTML = ''
    var html = `
         <tr>
            <th scope="row">${data.stt}</th>
            <td>${data.mssv}</td>
            <td>${data.ten}</td>
            <td>${data.tbhp1}</td>
            <td>Đạt</td>
        </tr>
            `
    console.log(data)
    bodyTable.innerHTML = html

}

searchBtn.onclick = function(e) {
    e.preventDefault()
    var studentId = inputSearch.value.trim()
    data.forEach(item => {
        var mssv = item['mssv']
        if (mssv === studentId) {
            renderStudent(item)
        }
    })
}
backBtn.onclick = function(e) {
    bodyTable.innerHTML = ''
    renderAllStudent(data)
}
