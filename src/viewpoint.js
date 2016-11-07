var Viewpoint = function (key) {
  this.init   = init;
  this.send   = send;
  this.setKey = setKey;

  function send (name, group, params) {
    if (!name || !group) {
      return;
    }

    var requestUrl    = "http://localhost:8080/viewpoint/api/action/create";
    var requestParams = {
      "action": {
        "key": this.key,
        "name": name,
        "group": group
      }
    }

    if (params) {
      requestParams.action.parameters = params;
    }

    var request = new XMLHttpRequest();

    request.onreadystatechanged = requestStateChanged;

    request.open("POST", requestUrl, true);

    request.setRequestHeader("Content-type", "application/json;charset=UTF-8");

    request.send(JSON.stringify(requestParams));
  }

  function init (key) {
    this.key = key;
  }

  function requestStateChanged () {
    if (this.readyState === 4 && this.status === 200) {
      console.log("Event logged;");
      return;
    }

    console.log("Event logging error;")
  }

  function setKey (key) {
    this.key = key;
  }

  this.init(key);
}
