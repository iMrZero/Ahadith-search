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
async function displayData() {
  const searchKey = document.getElementById("key-word").value;
  const resualt = document.getElementById("result");
  const data = await fetchData(api_url + searchKey);
  const regex = /<br\/>|-*/g;
  if (searchKey == "" || searchKey.length == 3) return;
  resualt.innerHTML = data.ahadith.result.replace(regex, "");
}
searchBtn.addEventListener("click", displayData);
searchBtn.addEventListener("touchstart", displayData);
