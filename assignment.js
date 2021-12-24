const team = document.querySelector('.team');
const student = document.querySelector('.student');
const tbody = document.querySelector('.data table tbody');
devs.map(data => {
    team.innerHTML += `
    <div class="team-member">
        <img src="${data.photo}" alt="">
        <h3>id:${data.id}</h3>
        <h2>${data.name}</h2>
        <p>${data.skill}</p>
        <p>Lorem ipsum dolor, sit amet consectetur </p>
        <p>location:${data.location}</p>
   </div>
    `;
});

students.map(info => {

    student.innerHTML += `
    <div class="student-member">
        
        <img src="${info.photo}" alt="">
        <h3>roll:${info.roll}</h3>
        <h2>${info.name}</h2>
        <p>${info.group}</p>
        <p>Lorem ipsum dolor, sit amet consectetur </p>
        <p>location:${info.location}</p>
   </div>
    `;
})
family.map((phbook, index) => {
    tbody.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${phbook.name}</td>
            <td>${phbook.age}</td>
            <td>${phbook.location}</td>
            <td>${phbook.phone}</td>
            <td><img width="50px" height="50px"  src="${phbook.photo}"></td>
        </tr>
    `;
})