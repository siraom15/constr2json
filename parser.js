const parser = (xmlString) => {
  const xml = new DOMParser().parseFromString(xmlString, "text/xml");
  const elms = xml.getElementsByTagName("add");
  let result = {};
  for (const key of elms) {
    let newKey = key.getAttribute("name");
    let newValue = key.getAttribute("connectionString");
    result[newKey] = newValue;
  }
  return JSON.stringify(result);
};

const parse = () => {
  let xmlInput = document.getElementById("xmlInput").value;
  let connectionString = parser(xmlInput);
  let output = document.getElementById("output");
  output.innerHTML = connectionString;
};
