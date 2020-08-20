export function getInitials(string) {
  var name = string.split(" "),
    initials = name.shift().charAt(0) + name.pop().charAt(0);
  return initials;
}

export function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}