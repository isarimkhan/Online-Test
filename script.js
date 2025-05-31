const originalQuestions = [
  {
    question: "He goes to school every day. is a:",
    options: ["Complex", "Compound", "Simple", "Interrogative"],
    correct: 2
  },
  {
    question: "Which is a compound sentence?",
    options: [
      "I was late because of traffic.",
      "She opened the door and greeted me.",
      "When the bell rang, I ran.",
      "Having eaten, I slept."
    ],
    correct: 1
  },
  {
    question: "What type of sentence is 'Although it was late, we kept working.'?",
    options: ["Simple", "Compound", "Complex", "Declarative"],
    correct: 2
  },
  {
    question: "Which sentence is imperative?",
    options: [
      "Please turn off the lights.",
      "He likes football.",
      "What are you doing?",
      "How beautiful the sky is!"
    ],
    correct: 0
  },
  {
    question: "Wow! That's amazing! is a(n):",
    options: [
      "Interrogative sentence",
      "Declarative sentence",
      "Exclamatory sentence",
      "Imperative sentence"
    ],
    correct: 2
  },
  {
    question: "What type of sentence is 'Can you help me?'?",
    options: ["Exclamatory", "Declarative", "Imperative", "Interrogative"],
    correct: 3
  },
  {
    question: "A sentence with one independent clause and no dependent clause is:",
    options: ["Simple", "Compound", "Complex", "Compound-complex"],
    correct: 0
  },
  {
    question: "Identify the compound sentence:",
    options: [
      "If she comes, we'll start.",
      "She cooked dinner and he washed dishes.",
      "Before he left, he locked the door.",
      "While she sang, he played the guitar."
    ],
    correct: 1
  },
  {
    question: "Which sentence is complex?",
    options: [
      "I read books and write essays.",
      "I was tired, so I went to bed.",
      "Because he was sick, he stayed home.",
      "She came, and we left."
    ],
    correct: 2
  },
  {
    question: "I like tea, but she likes coffee. is:",
    options: ["Simple", "Complex", "Compound", "Interrogative"],
    correct: 2
  },
  {
    question: "Which is an example of a declarative sentence?",
    options: [
      "Do you like ice cream?",
      "Please pass the salt.",
      "I enjoy swimming.",
      "What a great day!"
    ],
    correct: 2
  },
  {
    question: "Do your best. is:",
    options: ["Declarative", "Interrogative", "Exclamatory", "Imperative"],
    correct: 3
  },
  {
    question: "How old are you? is:",
    options: ["Imperative", "Interrogative", "Exclamatory", "Declarative"],
    correct: 1
  },
  {
    question: "A sentence that shows emotion ends with:",
    options: ["Period", "Exclamation mark", "Question mark", "Comma"],
    correct: 1
  },
  {
    question: "He opened the window and let in fresh air. is:",
    options: ["Simple", "Compound", "Complex", "Imperative"],
    correct: 1
  },
  {
    question: "She is a BEAUTIFUL girl. The word 'beautiful' is:",
    options: ["Adverb", "Verb", "Adjective", "Noun"],
    correct: 2
  },
  {
    question: "He quickly ran to the station. The word 'quickly' is:",
    options: ["Verb", "Adverb", "Adjective", "Conjunction"],
    correct: 1
  },
  {
    question: "Which of the following is an interjection?",
    options: ["Jump", "Ouch!", "Bright", "If"],
    correct: 1
  },
  {
    question: "The cat slept under the table. The word 'under' is:",
    options: ["Verb", "Article", "Adverb", "Preposition"],
    correct: 3
  },
  {
    question: "A pronoun replaces a:",
    options: ["Verb", "Preposition", "Noun", "Adjective"],
    correct: 2
  },
  {
    question: "They in 'They are playing' is a:",
    options: ["Noun", "Pronoun", "Verb", "Adjective"],
    correct: 1
  },
  {
    question: "Choose the correct coordinating conjunction:",
    options: ["Although", "Because", "And", "Unless"],
    correct: 2
  },
  {
    question: "Which is a proper noun?",
    options: ["Country", "Dog", "India", "Girl"],
    correct: 2
  },
  {
    question: "Identify the verb in the sentence: 'He wrote a poem.'",
    options: ["He", "Poem", "A", "Wrote"],
    correct: 3
  },
  {
    question: "She is KIND. The word 'kind' is a(n):",
    options: ["Verb", "Noun", "Adjective", "Pronoun"],
    correct: 2
  },
  {
    question: "A linking verb connects:",
    options: [
      "Two verbs",
      "Subject and complement",
      "Two adjectives",
      "None of the above"
    ],
    correct: 1
  },
  {
    question: "Which of the following is an indefinite article?",
    options: ["The", "A", "An", "Both B and C"],
    correct: 3
  },
  {
    question: "Which is a demonstrative pronoun?",
    options: ["Who", "He", "This", "You"],
    correct: 2
  },
  {
    question: "Identify the abstract noun:",
    options: ["Apple", "Honesty", "Car", "Man"],
    correct: 1
  },
  {
    question: "Happily is what type of adverb?",
    options: [
      "Adverb of time",
      "Adverb of manner",
      "Adverb of place",
      "Adverb of frequency"
    ],
    correct: 1
  },
  {
    question: "I go there DAILY. The word 'daily' is:",
    options: [
      "Adverb of place",
      "Adverb of time",
      "Adverb of frequency",
      "Adverb of manner"
    ],
    correct: 2
  },
  {
    question: "Which is a reflexive pronoun?",
    options: ["Myself", "This", "Who", "Him"],
    correct: 0
  },
  {
    question: "For in 'He waited for me' is:",
    options: ["Adverb", "Conjunction", "Preposition", "Pronoun"],
    correct: 2
  },
  {
    question: "Identify the conjunction: 'He failed because he didn't study.'",
    options: ["Because", "He", "Didn't", "Study"],
    correct: 0
  },
  {
    question: "What part of speech is 'quick' in 'a quick decision'?",
    options: ["Adverb", "Verb", "Adjective", "Conjunction"],
    correct: 2
  },
  {
    question: "The book is ON the table. The word 'on' is a:",
    options: ["Preposition", "Conjunction", "Noun", "Verb"],
    correct: 0
  },
  {
    question: "Which sentence uses a definite article?",
    options: [
      "I saw a cat.",
      "He ate an apple.",
      "She closed the door.",
      "We need a plan."
    ],
    correct: 2
  },
  {
    question: "I bought _____ umbrella. Choose the correct article.",
    options: ["A", "An", "The", "No article"],
    correct: 1
  },
  {
    question: "Which of these is a preposition of place?",
    options: ["Under", "Before", "Since", "Until"],
    correct: 0
  },
  {
    question: "She arrived _____ 5 PM. Fill in the blank.",
    options: ["In", "At", "On", "To"],
    correct: 1
  },
  {
    question: "Choose the correct article: '_____ Eiffel Tower is in Paris.'",
    options: ["A", "An", "The", "No article"],
    correct: 2
  },
  {
    question: "He walked _____ the room. Best preposition:",
    options: ["Across", "Between", "Until", "Before"],
    correct: 0
  },
  {
    question: "Which preposition indicates time?",
    options: ["Under", "At", "Beside", "Over"],
    correct: 1
  },
  {
    question: "They jumped _____ the river.",
    options: ["In", "Into", "On", "By"],
    correct: 1
  },
  {
    question: "He sat beside me. The preposition is:",
    options: ["He", "Sat", "Beside", "Me"],
    correct: 2
  },
  {
    question: "The dog _____ barking loudly.",
    options: ["are", "were", "is", "be"],
    correct: 2
  },
  {
    question: "Neither the teacher nor the students _____ present.",
    options: ["is", "was", "are", "being"],
    correct: 2
  },
  {
    question: "Ten dollars _____ a high price.",
    options: ["are", "is", "were", "be"],
    correct: 1
  },
  {
    question: "Each of the boys _____ given a prize.",
    options: ["were", "are", "is", "have"],
    correct: 2
  },
  {
    question: "The news _____ true.",
    options: ["are", "is", "were", "be"],
    correct: 1
  },
  {
    question: "The team _____ winning this season.",
    options: ["are", "is", "be", "were"],
    correct: 1
  },
  {
    question: "The list of items _____ on the table.",
    options: ["are", "is", "were", "have"],
    correct: 1
  },
  {
    question: "My shoes _____ under the bed.",
    options: ["is", "are", "was", "has"],
    correct: 1
  },
  {
    question: "A number of people _____ missing.",
    options: ["is", "was", "are", "be"],
    correct: 2
  },
  {
    question: "There _____ many students in the room.",
    options: ["is", "are", "was", "be"],
    correct: 1
  },
  {
    question: "He plays football every weekend. What tense is this?",
    options: [
      "Present continuous",
      "Present perfect",
      "Simple present",
      "Past perfect"
    ],
    correct: 2
  },
  {
    question: "She is reading a book. is in:",
    options: [
      "Present continuous",
      "Present perfect",
      "Past continuous",
      "Future perfect"
    ],
    correct: 0
  },
  {
    question: "They had left before I arrived. is:",
    options: [
      "Past perfect",
      "Present perfect",
      "Simple past",
      "Future perfect"
    ],
    correct: 0
  },
  {
    question: "We will be watching a movie. is:",
    options: [
      "Simple future",
      "Future perfect",
      "Future continuous",
      "Present continuous"
    ],
    correct: 2
  },
  {
    question: "He has eaten lunch. is in:",
    options: [
      "Present continuous",
      "Present perfect",
      "Past perfect",
      "Future perfect"
    ],
    correct: 1
  },
  {
    question: "They had been waiting for hours. is:",
    options: [
      "Past continuous",
      "Past perfect continuous",
      "Present perfect continuous",
      "Future continuous"
    ],
    correct: 1
  },
  {
    question: "I was sleeping when he called. is:",
    options: [
      "Past perfect",
      "Past continuous",
      "Present continuous",
      "Simple past"
    ],
    correct: 1
  },
  {
    question: "Change to future perfect tense: 'She finishes her work.'",
    options: [
      "She will be finishing her work.",
      "She will have finished her work.",
      "She finishes her work.",
      "She has finished her work."
    ],
    correct: 1
  },
  {
    question: "Change to present perfect: 'He writes a letter.'",
    options: [
      "He is writing a letter.",
      "He will write a letter.",
      "He has written a letter.",
      "He wrote a letter."
    ],
    correct: 2
  },
  {
    question: "I will have been working here for 5 years. is:",
    options: [
      "Future continuous",
      "Present perfect continuous",
      "Future perfect continuous",
      "Past perfect"
    ],
    correct: 2
  },
  {
    question: "They are playing cricket now. is:",
    options: [
      "Present continuous",
      "Simple present",
      "Present perfect",
      "Past continuous"
    ],
    correct: 0
  },
  {
    question: "She had been living in Delhi since 2010. is:",
    options: [
      "Present perfect",
      "Past continuous",
      "Past perfect continuous",
      "Present continuous"
    ],
    correct: 2
  },
  {
    question: "Change to passive voice: 'He writes a letter.'",
    options: [
      "A letter is written by him.",
      "A letter has written by him.",
      "A letter was written by him.",
      "A letter is wrote by him."
    ],
    correct: 0
  },
  {
    question: "The cake was eaten by the children. is:",
    options: ["Active", "Passive", "Imperative", "Interrogative"],
    correct: 1
  },
  {
    question: "Change to active: 'The car was repaired by the mechanic.'",
    options: [
      "The car has repaired the mechanic.",
      "The mechanic repairs the car.",
      "The mechanic repaired the car.",
      "The mechanic was repairing the car."
    ],
    correct: 2
  },
  {
    question: "Passive of 'They will complete the project.':",
    options: [
      "The project is completed.",
      "The project will complete.",
      "The project will be completed.",
      "The project has been completed."
    ],
    correct: 2
  },
  {
    question: "Active of 'The song was sung by her':",
    options: [
      "She had sung the song.",
      "She was singing the song.",
      "She sang the song.",
      "She sings the song."
    ],
    correct: 2
  },
  {
    question: "Passive: 'They are watching a movie.'",
    options: [
      "A movie was watched by them.",
      "A movie is being watched by them.",
      "A movie has been watched by them.",
      "A movie was being watched by them."
    ],
    correct: 1
  },
  {
    question: "Active: 'The book was written by the author.'",
    options: [
      "The author has written the book.",
      "The author wrote the book.",
      "The author writes the book.",
      "The book wrote the author."
    ],
    correct: 1
  },
  {
    question: "Passive: 'He had completed the task.'",
    options: [
      "The task is completed.",
      "The task has completed.",
      "The task had been completed.",
      "The task was being completed."
    ],
    correct: 2
  },
  {
    question: "Active: 'The room is cleaned by her.'",
    options: [
      "She cleaned the room.",
      "She is cleaning the room.",
      "She has cleaned the room.",
      "She cleans the room."
    ],
    correct: 3
  },
  {
    question: "Passive: 'Someone is knocking at the door.'",
    options: [
      "The door is knocked.",
      "The door is being knocked at.",
      "The door was being knocked.",
      "The door has been knocked."
    ],
    correct: 1
  },
  {
    question: "Change to indirect: He said, 'I am hungry.'",
    options: [
      "He said that he was hungry.",
      "He said he is hungry.",
      "He says he was hungry.",
      "He said I am hungry."
    ],
    correct: 0
  },
  {
    question: "She said, 'I will go to the market.' → Indirect:",
    options: [
      "She said she will go to the market.",
      "She said she would go to the market.",
      "She said I would go to the market.",
      "She said that she had gone to the market."
    ],
    correct: 1
  },
  {
    question: "He said, 'Do you like pizza?' → Indirect:",
    options: [
      "He asked do I like pizza.",
      "He asked if I liked pizza.",
      "He asked if I like pizza.",
      "He asked that I liked pizza."
    ],
    correct: 1
  },
  {
    question: "She asked, 'What are you doing?' → Indirect:",
    options: [
      "She asked what I was doing.",
      "She asked what am I doing.",
      "She asked what I do.",
      "She asked what was I doing."
    ],
    correct: 0
  },
  {
    question: "He said, 'Close the door.' → Indirect:",
    options: [
      "He told to close the door.",
      "He said me to close the door.",
      "He told me to close the door.",
      "He said that I should close the door."
    ],
    correct: 2
  },
  {
    question: "They said, 'We have finished our homework.' → Indirect:",
    options: [
      "They said they had finished their homework.",
      "They said we had finished our homework.",
      "They said they have finished their homework.",
      "They told they finished homework."
    ],
    correct: 0
  },
  {
    question: "John said, 'I saw her yesterday.' → Indirect:",
    options: [
      "John said he had seen her the day before.",
      "John said he saw her the day before.",
      "John said that he had seen her yesterday.",
      "John said I had seen her the day before."
    ],
    correct: 0
  },
  {
    question: "He asked, 'Where do you live?' → Indirect:",
    options: [
      "He asked where I live.",
      "He asked me where did I live.",
      "He asked where I lived.",
      "He asked where did you live."
    ],
    correct: 2
  },
  {
    question: "She said, 'I can help you.' → Indirect:",
    options: [
      "She said she could help me.",
      "She said she can help me.",
      "She said she may help me.",
      "She said she will help me."
    ],
    correct: 0
  },
  {
    question: "He said to me, 'Please wait here.' → Indirect:",
    options: [
      "He requested me to wait there.",
      "He asked me to wait here.",
      "He said me to wait there.",
      "He told me wait here."
    ],
    correct: 0
  },
  {
    question: "'If I were you, I would study harder.' is:",
    options: [
      "Zero conditional",
      "First conditional",
      "Second conditional",
      "Third conditional"
    ],
    correct: 2
  },
  {
    question: "'If it rains, the ground gets wet.' is:",
    options: [
      "First conditional",
      "Zero conditional",
      "Second conditional",
      "Third conditional"
    ],
    correct: 1
  },
  {
    question: "'If she had studied, she would have passed.' is:",
    options: [
      "Second conditional",
      "Third conditional",
      "First conditional",
      "Zero conditional"
    ],
    correct: 1
  },
  {
    question: "'If I win the lottery, I will buy a car.' is:",
    options: [
      "First conditional",
      "Second conditional",
      "Third conditional",
      "Zero conditional"
    ],
    correct: 0
  },
  {
    question: "Which is a second conditional sentence?",
    options: [
      "If I saw her, I would talk to her.",
      "If you boil water, it evaporates.",
      "If she calls, I will answer.",
      "If you had tried, you would have succeeded."
    ],
    correct: 0
  },
  {
    question: "What is the correct form for third conditional?",
    options: [
      "If + past simple, would + base verb",
      "If + present, will + base verb",
      "If + past perfect, would have + past participle",
      "If + present, would + base verb"
    ],
    correct: 2
  },
  {
    question: "Identify the first conditional sentence:",
    options: [
      "If it snowed, we would stay in.",
      "If he runs, he gets tired.",
      "If you study, you will pass.",
      "If she had left, she would be here."
    ],
    correct: 2
  },
  {
    question: "Complete: 'If I had known, I _____ helped you.'",
    options: ["will have", "would have", "would", "can"],
    correct: 1
  },
  {
    question: "Direct: He said, 'I am going to the market.' Indirect:",
    options: [
      "He said he goes to the market.",
      "He said he is going to the market.",
      "He said he was going to the market.",
      "He said that I was going to the market."
    ],
    correct: 2
  },
  {
    question: "Identify the correct zero conditional sentence:",
    options: [
      "If you heat ice, it melts.",
      "If I had seen her, I would have told her.",
      "If it rains, we will stay indoors.",
      "If I saw him, I would run."
    ],
    correct: 0
  },
  {
    question: "Identify the type of sentence: 'If she comes late, she will miss the train.'",
    options: [
      "Zero conditional",
      "First conditional",
      "Second conditional",
      "Third conditional"
    ],
    correct: 1
  },
  {
    question: "Change to indirect speech: She said, 'Can you help me?'",
    options: [
      "She asked if I can help her.",
      "She asked if I could help her.",
      "She said I could help her.",
      "She told me I can help her."
    ],
    correct: 1
  },
  {
    question: "Choose the third conditional form:",
    options: [
      "If he studies, he passes.",
      "If he studied, he would pass.",
      "If he had studied, he would have passed.",
      "If he will study, he will pass."
    ],
    correct: 2
  }
];

let questions = shuffleQuestionsAndOptions(originalQuestions);

let currentIndex = 0;
let score = 0;
let selectedAnswers = [];
let timer;
let timeLeft = 60;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");

function shuffleArray(arr) {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function shuffleQuestionsAndOptions(questions) {
  return shuffleArray(questions).map(q => {
    const originalOptions = [...q.options];
    const shuffledOptions = shuffleArray(originalOptions);
    const newCorrectIndex = shuffledOptions.indexOf(originalOptions[q.correct]);
    return {
      question: q.question,
      options: shuffledOptions,
      correct: newCorrectIndex
    };
  });
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 45;
  timerEl.textContent = `Time left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectedAnswers.push(null); // no answer
      goToNext();
    }
  }, 1000);

  const q = questions[currentIndex];
  questionEl.textContent = `${currentIndex + 1}. ${q.question}`;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      document.querySelectorAll("#options button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedAnswers[currentIndex] = i;
    };
    optionsEl.appendChild(btn);
  });
}

function goToNext() {
  clearInterval(timer);
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultEl.classList.remove("hidden");

  let output = "<h2>Quiz Result</h2>";
  questions.forEach((q, i) => {
    const userAns = selectedAnswers[i];
    const correct = q.correct;
    const isCorrect = userAns === correct;
    if (isCorrect) score++;

    output += `
      <p>
        Q${i + 1}: ${q.question}<br/>
        Your answer: ${userAns !== null ? q.options[userAns] : "No answer"}<br/>
        Correct answer: ${q.options[correct]}<br/>
        <strong>${isCorrect ? "✅ Correct" : "❌ Incorrect"}</strong>
      </p>
    `;
  });

  const pass = score >= questions.length / 2;
  output += `<h3>Score: ${score}/${questions.length}</h3>`;
  output += `<h3>${pass ? "🎉 Pass" : "❌ Fail"}</h3>`;
  resultEl.innerHTML = output;
}

nextBtn.addEventListener("click", () => {
  if (selectedAnswers[currentIndex] === undefined) {
    selectedAnswers[currentIndex] = null;
  }
  goToNext();
});

loadQuestion();