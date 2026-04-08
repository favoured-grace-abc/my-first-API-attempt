const body = document.querySelector("body");

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/9999",
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
  } catch (error) {
    const errormessage = document.createElement("p");
    errormessage.textContent = `An error occurred: ${error.message}`;
    errormessage.className = "error- message bg-red-400 text-red-700";
    body.appendChild(errormessage);
  }
}
fetchData();
