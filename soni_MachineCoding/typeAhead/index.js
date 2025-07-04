const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grapes",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Raspberry",
    "Blackberry",
    "Watermelon",
    "Cantaloupe",
    "Peach",
    "Plum",
    "Kiwi",
    "Apricot",
    "Lime",
    "Lemon",
    "Orange",
    "Pear",
    "Fig",
    "Guava",
    "Papaya",
    "Dragonfruit",
    "Lychee",
    "Pomegranate",
    "Coconut",
    "Tangerine",
    "Jackfruit",
    "Starfruit",
    "Passionfruit",
    "Persimmon",
    "Avocado",
    "Cranberry",
    "Gooseberry",
    "Honeydew",
    "Durian",
    "Mulberry",
    "Nectarine",
    "Quince",
    "Pomelo",
  ];
  const inputEle = document.getElementById("input-box");
  const resultsContainer = document.getElementById("results");
  const debounceTime = 300;
  const cache = new Map();
  
  const debounce = (mainFn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => mainFn(...args), delay);
    };
  };
  
  const fetchMockData = (query) => {
    console.log("Api hit ", query);
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(data.filter((item) => item.toLowerCase().includes(query))),
        500
      )
    );
  };
  
  const appendResults = (results) => {
    if (results.length > 0)
      resultsContainer.innerHTML = results
        .map((item) => `<div class="result-item">${item}</div>`)
        .join("");
    else
      resultsContainer.innerHTML = `<div class="n0-result-found">No results found</div>`;
  };
  
  const handleInputChange = async (event) => {
    const query = event.target.value.trim().toLowerCase();
    if (query.length == 0) {
      resultsContainer.innerHTML = "";
      return;
    }
    resultsContainer.innerHTML = `<div>Loading data.... </div>`;
    if (cache.has(query)) {
      console.log("cache hit", cache.get(query));
      appendResults(cache.get(query));
      return;
    }
    const results = await fetchMockData(query);
    cache.set(query, results);
    appendResults(results);
  };
  
  const handleItemClick = (event) => {
    if (event.target.classList.contains("result-item")) {
      inputEle.value = event.target.textContent;
      resultsContainer.innerHTML = "";
    }
  };
  
  function init() {
    inputEle.addEventListener("input", debounce(handleInputChange, debounceTime));
    resultsContainer.addEventListener("click", handleItemClick);
  }
  init();
  