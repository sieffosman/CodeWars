/*
Take a Ten Minutes Walk
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
 */

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false; // If the walk is not exactly 10 minutes long, return false
  }

  let ns = 0; // Number of steps north-south
  let ew = 0; // Number of steps east-west

  // Count the steps in each direction
  for (let direction of walk) {
    switch (direction) {
      case 'n':
        ns++;
        break;
      case 's':
        ns--;
        break;
      case 'e':
        ew++;
        break;
      case 'w':
        ew--;
        break;
      default:
        return false; // Invalid direction, return false
    }
  }

  // Check if you return to the starting point
  return ns === 0 && ew === 0;
}
