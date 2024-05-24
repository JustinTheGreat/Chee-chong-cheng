## What it Does
SuperSiri takes in audio data and analyze them to create a set of to-do list and project tracking for work performance purposes. The audio data is first collected with wireless mic, and then stored in our database. Using an AI API, and can analyse and develop some context for the user, and then generate a to-do list based on their need exhibited from their conversation. 



## How We Built It

## Front End
For the front end of SuperSiri, we used a combination of HTML, CSS, and JavaScript to create a user-friendly interface for interacting with the application. The interface allows users to initiate audio recordings and view the generated to-do lists and project tracking information.

## Back End
The backend of SuperSiri consists of server-side code responsible for processing audio data, analyzing it using AI APIs, and generating the corresponding to-do lists and project tracking information. We used Python along with various libraries and frameworks to build the backend functionality.

## Hardware
A novel approach of connecting a Raspberry PI 0w to a rPI microphone and a LCD screen was successfully implemented to collect audio data. The rPI was connected to an external set of monitor, keyboard and mouse. Although we have the camera attached on the rPI, it was proven that either the rPI cannot handle it, or the camera is too slow for a analysis video. 



## Challenges We Ran Into

To start off, we did attempt to use a Raspberry Pi 0w for wearable technology for the user to use to make it easy to record. Due to unforeseen circumstances, we missed a few wires that are crucial to a steady connection with the rPi. After overcoming that, we had a lot of problems with performance issued such as program efficiency and latency since the rPi 0w was a minimal computer. We still make it work in the end. Due to these technical difficulties, we had to constantly update our front end. Therefore, as of time of submission, we are still endeavouring to keep a consistent set of front end features.



## What We Learned

After going through a 36 hour hackathon, we've learnt a few heartfelt things:

- Don't overstretch your team, allocate sufficient sleep
- Focus on creating the core, minimal viable product
- Don't overengineer basic steps
- Raspberry Pi 0w is a bit slow for most applications
- Don't compete in spicy ramen eating contests


## What's Next?

Super Siri is definitely what we think is one of the greatest projects we made, though there are a few features we would love to get to if we had more time to work on it. A few of these features are:

- Video recordings for further, and more accurate analysis
- AI fitness tracker
- Virtual assistant to help look back on conversations
- Conversations to image journaling
- More sophisticated front end and bot
- Using language data collected, we can implement a voice reconstruction system with generative AI to recreate a person's speech
