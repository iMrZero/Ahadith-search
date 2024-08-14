const api_url = "https://dorar.net/dorar_api.json?skey=";
const searchBtn = document.getElementById("search");
async function fetchData(param) {
  try {
    const respone = await fetch(param);
    const data = await respone.json();
    return data;
  } catch (error) {
    console.log(`unable to fetch date from ${param} : ${error}`);
  }
}
searchBtn.addEventListener("click", async () => {
  const searchKey = document.getElementById("key-word").value;
  const resualt = document.getElementById("result");
  const data = await fetchData(api_url + searchKey);
  resualt.innerHTML = data.ahadith.result.replace(/<br\/>|-*/g, "");
  console.log(data);
});
