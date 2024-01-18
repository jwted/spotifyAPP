<template>
  <v-app>
    <v-card>
      <v-layout>
        <NavBar/>
        <v-container>
          <div class="quiz-container">
            <div v-if="currentQuestionIndex < questions.length">
              <h2 class="question">{{ questions[currentQuestionIndex].question }}</h2>
              <img :src="this.questions[currentQuestionIndex].image">
              <div v-for="(option, index) in questions[currentQuestionIndex].options" :key="index">
                <button
                  @click="selectOption(index)"
                  :class="{ 'selected': selectedOption === index, 'disabled': isTimeUp }"
                  class="option-btn"
                >
                  {{ option }}
                </button>
              </div>
              <div v-if="!isTimeUp">
                <p class="timer">Time remaining: {{ timerSeconds }} seconds</p>
              </div>
              <button v-if="!isTimeUp" @click="checkAnswer" class="next-btn" :disabled="isTimeUp">Next</button>
              <button v-if="isTimeUp" class="restart-btn" @click="restartQuiz">Restart</button>
            </div>
            <div v-else>
              <h2>Quiz Completed!</h2>
              <p>Your score: {{ score }}/{{ questions.length }}</p>
              <button v-if="currentQuestionIndex >= questions.length - 1" @click="restartQuiz" class="next-btn">Restart Quiz</button>
            </div>
          </div>
        </v-container>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue";
import { useUserStore } from '../stores/userStore';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      userStore: useUserStore(),
      currentQuestionIndex: 0,
      selectedOption: null,
      score: 0,
      isTimeUp: false,
      timer: null,
      timerSeconds: 10,
      questions: []
    };
  },
  methods: {
    selectOption(index) {
      if (!this.isTimeUp) {
        this.selectedOption = index;
      }
    },
    checkAnswer() {
  if (this.selectedOption !== null) {
    const selectedOptionContent = this.questions[this.currentQuestionIndex].options[this.selectedOption];
    const correctAnswerContent = this.questions[this.currentQuestionIndex].correctAnswer;

    if (selectedOptionContent === correctAnswerContent) {
      this.score++;
    }

    this.selectedOption = null;
    this.currentQuestionIndex++;
    this.resetTimer();
  } else {
    alert("Please select an option before moving to the next question.");
  }
},
shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  },
    startTimer() {
      this.isTimeUp = false;
      this.timer = setInterval(() => {
        if (this.timerSeconds > 0) {
          this.timerSeconds--;
        } else {
          this.isTimeUp = true;
          clearInterval(this.timer);
        }
      }, 1000);
    },
    resetTimer() {
      clearInterval(this.timer);
      this.timerSeconds = 15;
      this.startTimer();
    },
    restartQuiz() {
      this.currentQuestionIndex = 0;
      this.selectedOption = null;
      this.score = 0;
      this.isTimeUp = false;
      clearInterval(this.timer);
      this.fetchQuestions();
      this.resetTimer()
    },
    async fetchQuestions() {
  let albums = [];
  const artists = this.userStore.TopArtists;

  while (this.questions.length < 5) {
    const i = Math.floor(Math.random() * artists.length);

    await axios.get(`https://api.spotify.com/v1/artists/${artists[i].id}/albums?include_groups=album&offset=0&limit=5`, {
      headers: {
        'Authorization': 'Bearer ' + this.userStore.token
      }
    }).then((response) => {
      albums.push(response.data.items);
    });

    const x = Math.floor(Math.random() * albums.length)
    const singularAlbum = albums[x][Math.floor(Math.random() * albums[0].length)];

    // Check if there is no question with the same image
    if (!this.questions.some(question => question.image === singularAlbum.images[0].url)) {
      // Shuffle artists array and take the first four elements
      let artistsNames = this.shuffle(artists).slice(0, 4);

      // Generate options array
      const optionsArr = [
        singularAlbum.artists[0].name,
        artistsNames[0].name,
        artistsNames[1].name,
        artistsNames[2].name
      ];

      // Shuffle the options array
      const shuffledOptions = this.shuffle(optionsArr);

      this.questions.push({
        question: 'Who made this album',
        options: shuffledOptions,
        correctAnswer: singularAlbum.artists[0].name,
        image: singularAlbum.images[0].url
      });
    }
  }

  this.startTimer();
},
  },
  mounted() {
    this.fetchQuestions();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.quiz-container {
  text-align: center;
  margin-top: 50px;
  background-color: #000; /* Black background */
  color: #fff; /* White font color */
  padding: 20px;
  border-radius: 10px;
}

.question {
  margin-bottom: 20px;
}

.timer {
  margin-top: 10px;
  font-size: 18px;
}

.option-btn {
  width: 200px;
  height: 50px;
  margin: 10px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: #76c391; /* Spotify Green */
  color: #fff;
  cursor: pointer;
}

.next-btn {
  width: 150px;
  height: 40px;
  margin-top: 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: #76c391; /* Spotify Green */
  color: #fff;
  cursor: pointer;
}
.restart-btn {
  width: 150px;
  height: 40px;
  margin-top: 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: #76c391; /* Spotify Green */
  color: #fff;
  cursor: pointer;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.selected {
  background-color: #15f983; /* Slightly darker shade for selected option */
}
</style>