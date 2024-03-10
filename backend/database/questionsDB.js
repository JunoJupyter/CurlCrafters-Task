const questions = [
  {
    questionId: 1,
    question: "What is the full form of CPU in computing?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Process Unit",
      "Computer Power Unit",
    ],
    correctAnswer: "Central Processing Unit",
  },
  {
    questionId: 2,
    question: "Which force holds the planets in orbit around the Sun?",
    options: [
      "Magnetic Force",
      "Gravitational Force",
      "Electrostatic Force",
      "Centrifugal Force",
    ],
    correctAnswer: "Gravitational Force",
  },
  {
    questionId: 3,
    question: "What is the chemical symbol for the element Iron?",
    options: ["Ir", "Fe", "In", "Fr"],
    correctAnswer: "Fe",
  },
  {
    questionId: 4,
    question: "Who is considered the founder of modern physics?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    questionId: 5,
    question:
      "Which programming language is commonly used for building web applications?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    questionId: 6,
    question: "What is the nearest star to Earth?",
    options: ["Proxima Centauri", "Alpha Centauri", "Betelgeuse", "Sirius"],
    correctAnswer: "Proxima Centauri",
  },
  {
    questionId: 7,
    question: "What is the SI unit of electric current?",
    options: ["Watt", "Volt", "Ampere", "Ohm"],
    correctAnswer: "Ampere",
  },
  {
    questionId: 8,
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Venus",
  },
  {
    questionId: 9,
    question:
      "What is the process of a liquid turning into vapor at the surface called?",
    options: ["Condensation", "Sublimation", "Evaporation", "Melting"],
    correctAnswer: "Evaporation",
  },
  {
    questionId: 10,
    question: "What is the speed of light in a vacuum?",
    options: [
      "299,792,458 meters per second",
      "300,000,000 meters per second",
      "290,000,000 meters per second",
      "302,000,000 meters per second",
    ],
    correctAnswer: "299,792,458 meters per second",
  },
  {
    questionId: 11,
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyperlink and Text Markup Language",
      "High Text Markup Language",
      "Hypertext Model Language",
    ],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    questionId: 12,
    question:
      "Which data structure follows the Last In First Out (LIFO) principle?",
    options: ["Queue", "Stack", "Heap", "Tree"],
    correctAnswer: "Stack",
  },
  {
    questionId: 13,
    question: "What is the primary function of a compiler?",
    options: [
      "Translates source code to machine code",
      "Executes machine code",
      "Optimizes code performance",
      "Handles database queries",
    ],
    correctAnswer: "Translates source code to machine code",
  },
  {
    questionId: 14,
    question:
      "Which sorting algorithm has the best time complexity in the worst-case scenario?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
    correctAnswer: "Merge Sort",
  },
  {
    questionId: 15,
    question:
      "Which programming paradigm emphasizes immutable data and pure functions?",
    options: [
      "Object-Oriented Programming",
      "Procedural Programming",
      "Functional Programming",
      "Structured Programming",
    ],
    correctAnswer: "Functional Programming",
  },
  {
    questionId: 16,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "To refer to the current class instance",
      "To refer to the parent class instance",
      "To refer to the global object",
      "To refer to the calling object",
    ],
    correctAnswer: "To refer to the calling object",
  },
  {
    questionId: 17,
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "System Query Language",
      "Standardized Query Language",
    ],
    correctAnswer: "Structured Query Language",
  },
  {
    questionId: 18,
    question: "Which data structure uses FIFO (First In First Out) principle?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    correctAnswer: "Queue",
  },
  {
    questionId: 19,
    question: "What is the purpose of an index in a database?",
    options: [
      "To speed up data retrieval",
      "To enforce data integrity",
      "To manage user permissions",
      "To store metadata",
    ],
    correctAnswer: "To speed up data retrieval",
  },
  {
    questionId: 20,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Coded Style Sheets",
      "Cascading Simple Styles",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    questionId: 21,
    question: "What is the difference between HTTP and HTTPS?",
    options: ["HTTP is secure, HTTPS is not", "HTTPS is faster than HTTP", "HTTP is stateless, HTTPS is stateful", "HTTPS encrypts data in transit"],
    correctAnswer: "HTTPS encrypts data in transit"
  },
  {
    questionId: 22,
    question: "What does the acronym 'JSON' stand for?",
    options: ["JavaScript Object Notation", "Java Serialized Object Notation", "JavaScript Object Network", "Java Serialized Object Network"],
    correctAnswer: "JavaScript Object Notation"
  },
  {
    questionId: 23,
    question: "In object-oriented programming, what is encapsulation?",
    options: ["Hiding the implementation details of an object", "Allowing an object to inherit properties from another object", "Preventing an object from being modified", "Combining data and methods into a single unit"],
    correctAnswer: "Hiding the implementation details of an object"
  },
  {
    questionId: 24,
    question: "Which of the following is not a valid programming language?",
    options: ["Python", "Ruby", "HTML", "Swift"],
    correctAnswer: "HTML"
  },
  {
    questionId: 25,
    question: "What is the purpose of a 'for' loop in programming?",
    options: ["To execute a block of code repeatedly", "To define a function", "To declare variables", "To perform arithmetic operations"],
    correctAnswer: "To execute a block of code repeatedly"
  },
  {
    questionId: 26,
    question: "What is the binary representation of the decimal number 10?",
    options: ["1010", "1100", "1111", "1001"],
    correctAnswer: "1010"
  },
  {
    questionId: 27,
    question: "Which of the following is a relational database management system?",
    options: ["MongoDB", "MySQL", "Redis", "Elasticsearch"],
    correctAnswer: "MySQL"
  },
  {
    questionId: 28,
    question: "What does the acronym 'URL' stand for?",
    options: ["Uniform Resource Locator", "Universal Record Locator", "Uniform Record Locator", "Universal Resource Locator"],
    correctAnswer: "Uniform Resource Locator"
  },
  {
    questionId: 29,
    question: "What is the purpose of a 'try...catch' block in programming?",
    options: ["To define a function", "To perform a comparison", "To handle exceptions", "To declare variables"],
    correctAnswer: "To handle exceptions"
  },
  {
    questionId: 30,
    question: "Which data structure is used to implement LIFO behavior?",
    options: ["Queue", "Stack", "Linked List", "Binary Tree"],
    correctAnswer: "Stack"
  }
];


module.exports = questions;
