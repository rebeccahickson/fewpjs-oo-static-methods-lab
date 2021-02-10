class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z\ \'\-]/gm, "");
  }
  static titleize(string) {
    const arr = string.split(" ");
    let answer = `${this.capitalize(arr[0])}`;
    const smallWordArr = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    arr.forEach((word, i) => {
      if (i === 0) {
        return;
      } else if (smallWordArr.includes(word)) {
        answer += ` ${word}`;
      } else {
        answer += ` ${this.capitalize(word)}`;
      }
    });
    return answer;
  }
}
