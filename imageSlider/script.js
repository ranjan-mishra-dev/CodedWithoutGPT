const arr = ["https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1628015081036-0747ec8f077a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1467307983825-619715426c70?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmx8ZW58MHx8MHx8fDA%3D"
]

let image = document.getElementById("image");
image.src = arr[0];

let len = arr.length;
let current = 0;

document.getElementById("next").addEventListener("click", () => {
    current = (current  + 1) % len;
    image.src = arr[current];
})

document.getElementById("prev").addEventListener("click", () => {
    current = (current  - 1) % len;
    image.src = arr[current];
})