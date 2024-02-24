# Calculator Project
This Calculator project is a web-based application developed using HTML, CSS, and JavaScript. It is designed to perform basic arithmetic operations and to provide a seamless and interactive user experience.

## Table of Contents

- [User Interface Overview](#user-interface-overview)
- [Functionality](#functionality)
- [Visual Design](#visual-design)
- [Conclusion](#conclusion)

## User Interface Overview

The Calculator project features a clean and user-friendly interface:

- **Title and Displays:**
  - The top of the calculator displays a title, appropriately named "Calculator."
  - Beneath the title, you find two displays: the main display and a smaller display. The main display shows the current input and results, while the smaller display holds additional information during complex operations.

- **Numeric Keypad:**
  - The calculator includes a well-organized numeric keypad with buttons for digits 0-9, double zeros (00), and a decimal point (.).
  - Buttons are arranged in a grid for easy accessibility.

- **Operation Buttons:**
  - The operation buttons cover basic arithmetic operations such as addition, subtraction, multiplication, division, and exponentiation. Special buttons for clearing the input, backspacing, and calculating results are also available.

## Functionality

- **Basic Arithmetic Operations:**
  - Addition, subtraction, multiplication, and division are supported. The calculator displays results instantly as you input your values.

- **Exponentiation:**
  - The calculator supports exponentiation, allowing you to calculate powers efficiently.

- **Series Operations:**
  - You can perform operations in series without the need to click the equal key after each operation. For example, if you want to perform a sum and immediately afterwards a subtraction, the sum will be executed first, and the result will be automatically used as the first element of the subsequent subtraction.

- **Repeated Equal Key:**
  - Clicking the equal key multiple times repeats the last operation on the result. This feature enhances user convenience, allowing for quick repetitive calculations without re-entering the entire expression.
    
- **Negative Numbers Support:**
  - The calculator facilitates operations with negative numbers by allowing the user to insert the minus button (-) first. When the minus button is pressed initially, only the negative sign will be inserted, enabling seamless calculations involving negative values without the need for additional input steps.
    
- **Error Handling:**
  - The calculator handles division by zero gracefully, providing a warning and clearing the input to prevent inaccurate results.
 
- **Input Restrictions:**
  - The calculator enforces input restrictions to ensure accurate and meaningful calculations.
    - Dot (Decimal Point): The dot can only be pressed once, preventing invalid numbers with multiple decimal points. If the dot is pressed when the display is blank, a leading zero will be automatically added.
    - Double Zero (00): Pressing the double zero button without any preceding input will result in only a single zero being displayed. This prevents redundant zeros at the beginning of numbers.

- **Input Validation:**
  - The calculator ensures that the entered number or result does not exceed a maximum length of 16 characters. If the limit is exceeded, a warning alerts the user that the displayed value may not be accurate.

- **Keyboard Support:**
  - For user convenience, the calculator supports keyboard input. You can press numeric keys, decimal points, and various operation keys directly on your keyboard.

## Visual Design

- **Clean, Intuitive and Responsive Design:**
  - The calculator has a clean and intuitive design, making it easy on the eyes. The layout is responsive, ensuring a seamless experience.

- **Button Interaction:**
  - Buttons respond to user interaction with a subtle scaling effect and a shadow, enhancing the visual feedback.
  
- **Color Palette:**
  - The calculator utilizes a harmonious color palette.
    - Calculator Background: `#8a8cb2`
    - Numeric Keypad Buttons: `#bdbdc8`
    - Operations Buttons: `#828193`
    - Special Functions Buttons (Equal, Clear, Backspace): `#7f91f5`
    - Display: `#d0e0df`

## Conclusion
In conclusion, the Calculator project provides a robust tool for basic arithmetic and complex mathematical operations. Its intuitive interface, responsive design, and comprehensive functionality offer users a seamless experience. This project has significantly enhanced my HTML, CSS, and JavaScript skills. The hands-on experience of designing a visually appealing and functional calculator enhanced my understanding of front-end development, providing practical insights into effective user interface design and responsive web application behavior.


