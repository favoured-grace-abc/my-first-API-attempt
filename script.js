async function fetchpost() {
  const postinput = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const inputobject = await postinput.json();

 
  console.log(inputobject.title)
}
fetchpost();
