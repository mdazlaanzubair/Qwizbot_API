// ====================================================
// controller that callout open ai api to get response
// ====================================================

import global_ENV from "dotenv";
global_ENV.config();

// open AI library imports
import { Configuration, OpenAIApi } from "openai";

// configurations
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// invoking open ai model
const openai = new OpenAIApi(configuration);

// function to get answers of questions asked
export const getAnswer = async (req, res) => {
  // destructuring the req.body
  const { prompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      //   prompt:
      //     'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:',
      prompt,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    console.log(response.data.choices);

    // res
    //   .status(200)
    //   .send({ response, message: "Your answer successfully responded." });
    // res
    //   .status(200)
    //   .json({
    //     text: response.choices[0].text,
    //     message: "Your answer successfully responded.",
    //   });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error, message: "An error occurred." });
  }
};

import axios from "axios"

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const getAnswer2 = async (req, res) => {
  // destructuring the req.body
  const { prompt } = req.body;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  const data = {
    model: "text-davinci-003",
    // prompt: 'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:',
    prompt,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["prompt:"],
  };

  axios
    .post("https://api.openai.com/v1/completions", data, { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
