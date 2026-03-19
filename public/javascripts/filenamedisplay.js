
// const fileInput = document.getElementById("image");
// console.log('this is the file input element', fileInput.dataset)

// fileInput.addEventListener("change", function () {
//     if (this.files.length > 0) {
//         const names = Array.from(this.files)
//             .map(file => file.name)
//             .join(", ");

//         // Replace the default "2 files" text
//         console.log('this ', fileInput.nextElementSibling)
//         fileInput.nextElementSibling
//             ? fileInput.nextElementSibling.innerText = names
//             : fileInput.setAttribute("data-file", names);

//         // Directly update displayed value (this is the key trick)
//         this.setAttribute("title", names);
//         console.log(names)
//     }
// });
const realInput = document.getElementById("image");
const display = document.getElementById("fileNameDisplay");

realInput.addEventListener("change", function () {
    const names = Array.from(this.files)
        .map(file => file.name)
        .join(", ");
    display.value = names;
});