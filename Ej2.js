function wallpaper(l, w, h) {

    let rollo = (10 * 0.52);

    let h2 = (h * 0.15) + h;

    let area = 2 *((l*h2) + (w*h2));

    let r = Math.ceil(area/rollo);

    let num = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",]

    if (r > 0 && r < 21) {
    return num[r-1];
    }
        else if (r === 0) {

            return "cero";
    }
        else { 
            return r;
    }
  }
  console.log (wallpaper(4, 3.5, 3))
