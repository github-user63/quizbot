// Fragen und Antworten
var questions = [
  {
      question: "Welches Land hat die größte Fläche der Welt?",
      options: ["Russland", "China", "USA", "Kanada"],
      correctAnswer: 0
  },
  {
      question: "Wer hat das Gemälde 'Die Mona Lisa' gemalt?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
      correctAnswer: 0
  },
  {
      question: "Welches ist das längste Fluss in Afrika?",
      options: ["Nil", "Kongo", "Niger", "Sambesi"],
      correctAnswer: 0
  },
  {
      question: "Wie viele Milliarden Menschen leben derzeit auf der Erde?",
      options: ["7,8 Milliarden", "6,2 Milliarden", "9,4 Milliarden", "5,5 Milliarden"],
      correctAnswer: 0
  },
  {
      question: "Wer schrieb das Buch '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Anthony Burgess"],
      correctAnswer: 0
  },
  {
      question: "Was ist die chemische Formel für Wasser?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correctAnswer: 0
  },
  {
      question: "Welcher Planet ist der sonnennächste in unserem Sonnensystem?",
      options: ["Merkur", "Venus", "Erde", "Mars"],
      correctAnswer: 0
  },
  {
      question: "Wie viele Kontinente gibt es auf der Erde?",
      options: ["Sieben", "Fünf", "Neun", "Drei"],
      correctAnswer: 0
  },
  {
      question: "Wer malte das Gemälde 'Die Sternennacht'?",
      options: ["Vincent van Gogh", "Salvador Dalí", "Pablo Picasso", "Claude Monet"],
      correctAnswer: 0
  },
  {
      question: "Welches Tier ist das größte auf der Erde?",
      options: ["Blauwal", "Elefant", "Giraffe", "Gorilla"],
      correctAnswer: 0
  },
  // Weitere Fragen hier hinzufügen
  {
      question: "Was ist die Hauptstadt von Spanien?",
      options: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
      correctAnswer: 0
  },
  {
      question: "Wer hat das Buch 'Harry Potter' geschrieben?",
      options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
      correctAnswer: 0
  },
  {
      question: "Welcher ist der höchste Berg der Welt?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
      correctAnswer: 0
  },
  {
      question: "Was ist die Hauptstadt von Australien?",
      options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
      correctAnswer: 0
  },
  {
      question: "Welches ist das größte Riff der Welt?",
      options: ["Great Barrier Reef", "Korallenmeer-Riff", "Mesoamerikanisches Barriereriff", "Rotes Meer"],
      correctAnswer: 0
  },
  {
      question: "Wer hat die Relativitätstheorie entwickelt?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
      correctAnswer: 0
  },
  {
      question: "Welches ist das kleinste Land der Welt?",
      options: ["Vatikanstadt", "Monaco", "Nauru", "Tuvalu"],
      correctAnswer: 0
  },
  {
      question: "In welchem Jahr fand die erste bemannte Mondlandung statt?",
      options: ["1969", "1972", "1965", "1975"],
      correctAnswer: 0
  },
  {
      question: "Wer hat das Lied 'Shape of You' veröffentlicht?",
      options: ["Ed Sheeran", "Justin Bieber", "Taylor Swift", "Adele"],
      correctAnswer: 0
  },
  {
      question: "Was ist die Hauptstadt von Japan?",
      options: ["Tokio", "Kyoto", "Osaka", "Yokohama"],
      correctAnswer: 0
  },
  {
      question: "Welches ist das längste Fluss in Europa?",
      options: ["Wolga", "Donau", "Rhein", "Themse"],
      correctAnswer: 0
  },
  // Weitere Fragen hier hinzufügen
  {
      question: "Was ist die größte Wüste der Welt?",
      options: ["Antarktis", "Sahara", "Gobi", "Arktis"],
      correctAnswer: 0
  },
  {
      question: "Welches ist das größte Land in Südamerika?",
      options: ["Brasilien", "Argentinien", "Kolumbien", "Peru"],
      correctAnswer: 0
  },
  {
      question: "Wie viele Kilometer hat ein Marathon?",
      options: ["42,195 Kilometer", "40 Kilometer", "45 Kilometer", "50 Kilometer"],
      correctAnswer: 0
  },
  {
      question: "Wer hat das Buch 'Der kleine Prinz' geschrieben?",
      options: ["Antoine de Saint-Exupéry", "Mark Twain", "Jules Verne", "Victor Hugo"],
      correctAnswer: 0
  },
  {
      question: "Welche Farbe hat eine reife Banane?",
      options: ["Gelb", "Grün", "Rot", "Orange"],
      correctAnswer: 0
  },
  {
      question: "Wer hat das Gemälde 'Die Schrei' gemalt?",
      options: ["Edvard Munch", "Piet Mondrian", "Salvador Dalí", "Paul Cézanne"],
      correctAnswer: 0
  },
  {
      question: "Wie viele Spieler sind in einer Fußballmannschaft auf dem Feld?",
      options: ["11", "10", "9", "12"],
      correctAnswer: 0
  },
  {
      question: "Was ist die Hauptstadt von Kanada?",
      options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
      correctAnswer: 0
  },
  {
      question: "Wer hat das Buch 'To Kill a Mockingbird' geschrieben?",
      options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
      correctAnswer: 0
  },
  {
      question: "Wie viele Seiten hat ein Würfel?",
      options: ["6", "4", "8", "10"],
      correctAnswer: 0
  },
  {
      question: "Wer hat das Lied 'Bohemian Rhapsody' veröffentlicht?",
      options: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
      correctAnswer: 0
  },
  {
      question: "Was ist die Hauptstadt von Italien?",
      options: ["Rom", "Mailand", "Venedig", "Florenz"],
      correctAnswer: 0
  },
  {
      question: "Wie viele Oscars hat Meryl Streep gewonnen?",
      options: ["3", "2", "1", "4"],
      correctAnswer: 0
  },
  {
      question: "Was ist die Hauptstadt von Südkorea?",
      options: ["Seoul", "Busan", "Incheon", "Daegu"],
      correctAnswer: 0
  },
  {
      question: "Welches ist das längste Tier der Welt?",
      options: ["Blauer Wal", "Riesenkalmar", "Riesentintenfisch", "Seeschlange"],
      correctAnswer: 0
  },
  {
      question: "Wer hat das Buch 'Der Herr der Ringe' geschrieben?",
      options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "Stephenie Meyer"],
      correctAnswer: 0
  },
  {
      question: "Wie viele Augen hat eine Biene?",
      options: ["5", "2", "3", "4"],
      correctAnswer: 0
  },
  {
      question: "Wer hat das Gemälde 'Die Nacht' gemalt?",
      options: ["Edvard Munch", "Vincent van Gogh", "Salvador Dalí", "Claude Monet"],
      correctAnswer: 0
  },
];
  
  // Nur 10 Fragen pro Runde auswählen
  var selectedQuestions = questions.slice(0, 10);
  
  var currentQuestionIndex = 0;
  var score = 0;
  
  // Quiz initialisieren
  function initializeQuiz() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var submitButton = document.getElementById("submit-btn");
    var resultElement = document.getElementById("result");
  
    submitButton.addEventListener("click", checkAnswer);
  
    displayQuestion();
  
    // Frage anzeigen
    function displayQuestion() {
        var currentQuestion = selectedQuestions[currentQuestionIndex];
  
        questionElement.innerHTML = currentQuestion.question;
  
        optionsElement.innerHTML = "";
        for (var i = 0; i < currentQuestion.options.length; i++) {
            var option = document.createElement("div");
            option.classList.add("option");
            option.innerHTML = currentQuestion.options[i];
            option.addEventListener("click", selectOption);
            optionsElement.appendChild(option);
        }
    }
  
    // Antwort überprüfen
    function checkAnswer() {
        var selectedOption = optionsElement.querySelector(".selected");
        if (!selectedOption) {
            return;
        }
  
        var selectedOptionIndex = Array.prototype.indexOf.call(optionsElement.children, selectedOption);
        var currentQuestion = selectedQuestions[currentQuestionIndex];
  
        if (selectedOptionIndex === currentQuestion.correctAnswer) {
            score++;
            resultElement.innerHTML = "Richtig!";
        } else {
            resultElement.innerHTML = "Falsch!";
        }
  
        currentQuestionIndex++;
  
        if (currentQuestionIndex < selectedQuestions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }
  
    // Option auswählen
    function selectOption() {
        var selectedOption = optionsElement.querySelector(".selected");
  
        // Wenn bereits eine Option ausgewählt ist, Auswahl aufheben
        if (selectedOption) {
            selectedOption.classList.remove("selected");
        }
  
        // Aktuell ausgewählte Option markieren
        this.classList.add("selected");
    }
  
    // Quiz beenden und Ergebnis anzeigen
    function endQuiz() {
        questionElement.innerHTML = "Quiz beendet";
        optionsElement.innerHTML = "";
        submitButton.removeEventListener("click", checkAnswer);
        resultElement.innerHTML = "Endstand: " + score + " Punkte von " + selectedQuestions.length + " möglichen.";
    }
  }
  
  // Quiz starten, wenn das DOM vollständig geladen ist
  document.addEventListener("DOMContentLoaded", initializeQuiz);
  