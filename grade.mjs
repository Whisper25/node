function grade(mark) {
  switch (mark) {
    case 1:
    case 2:
    case 3:
      return "sho nibud'";
    case 4:
    case 5:
    case 6:
      return "задовільно";
    case 7:
    case 8:
    case 9:
      return "добре";
    case 10:
    case 11:
    case 12:
      return "відмінно";

    default:
      return "невідома оцінка";
  }
}
export default grade;
