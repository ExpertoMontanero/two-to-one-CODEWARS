function longest(s1, s2) {
  return result=[...new Set((s1+s2).split(""))].sort().join("");
}
