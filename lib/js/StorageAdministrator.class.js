class StorageAdministrator {
  key;

  constructor(key, defaultValue = '') {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, defaultValue);
    }
    this.key = key;
  }

  getValue() {
    return localStorage.getItem(this.key);
  }

  setValue(value) {
    localStorage.setItem(this.key, value)
  }
}

export default StorageAdministrator;
