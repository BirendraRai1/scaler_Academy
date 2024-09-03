const customLocalStorage = {
  setItem: function (key, value, expiryTimeInMs) {
    const expiryTime = Date.now() + expiryTimeInMs;
    const item = {
      value: value,
      expiry: expiryTime,
    };
    localStorage.setItem(key, JSON.stringify(item));

    // Automatically remove the item after expiry time
    setTimeout(() => {
      localStorage.removeItem(key);
    }, expiryTimeInMs);
  },

  getItem: function (key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }

    const item = JSON.parse(itemStr);
    const now = Date.now();

    if (now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  },

  removeItem: function (key) {
    localStorage.removeItem(key);
  },

  clear: function () {
    localStorage.clear();
  },
};
