function solution(my_string, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    const substring = my_string.substring(start, end + 1);
    const reversed = substring.split("").reverse().join("");
    my_string = my_string.substring(0, start) + reversed + my_string.substring(end + 1);
  }
  return my_string;
}