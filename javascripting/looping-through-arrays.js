var pets = ['cat', 'dog', 'rat'];
for (var i = 0, len = pets.length; i < len; i++) {
  pets[i] = pets[i] + 's';
}
console.log(pets);