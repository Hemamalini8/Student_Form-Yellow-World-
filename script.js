var btn = document.getElementById("btn")
btn.addEventListener("click", function (event) {
    event.preventDefault()
    var name = document.getElementById("name")
    var age = document.getElementById("age")
    var course = document.getElementById("course")
    var mail = document.getElementById("mail")
    var container = document.getElementById("container")
    var col = document.createElement("tr")
    var genderselect = document.querySelector(`input[name="Gender"]:checked`)
    var gendervalue = genderselect ? genderselect.value : ""
    if (name.value.trim() === "" || age.value.trim() === "" || course.value.trim() === "" || mail.value.trim() === "" || gendervalue.trim() === "") {
        alert("Please fill out all fields before saving.")
        return
    }
    col.innerHTML =
        `<td class="p-3">${name.value}</td>
        <td class="p-3">${age.value}</td>
        <td class="p-3">${gendervalue}</td>
        <td class="p-3">${course.value}</td>
        <td class="p-3">${mail.value}</td>
        <button class="bg-yellow-600 p-3 rounded-lg mt-1 mb-1" onclick="delete1(event)">Delete</button>
    `
    container.append(col)
})
function delete1(event) {
    event.target.parentElement.remove()
}


