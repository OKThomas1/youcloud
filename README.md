## Created By:
[@OkThomas1](https://github.com/OKThomas1) [@Esteban-Bermudez](https://github.com/Esteban-Bermudez) [@JDhillon24](https://github.com/JDhillon24) [@stejay91](https://github.com/stejay91)

## Demo
https://youtu.be/SJS_VaN-P-0

## Devpost
https://devpost.com/software/tba-b60mx1

## Inspiration

What if you could turn any computer you own into your very own cloud server, where people could host their scripts, databases and full-stack websites.

Cloud computing has become a staple in the industry and various large companies like Amazon, Google and Microsoft are providing paid subscriptions to their cloud services for hosting. We wanted to expand on the idea of running a personal Linux server to then have it so other colleagues could host their own projects securely.

"I purchased an ubuntu server so that I could run various scripts and servers for myself. One day Esteban came to me and asked how I was hosting my scripts. I told him I owned and ubuntu server and that he could use it if he wanted. I sent him my login information but I was somewhat uncomfortable, not because I thought he would maliciously attack my server, but maybe there would be a mistake, or maybe someone else would get ahold of my information through him. What I really wanted was an easy way to allow Esteban to upload his program to my server, without giving access him access to my login information" - Thomas

That's when the idea for YouCloud was born.

## What it does

YouCloud is a program that lets anyone turn their old computer into a cloud computer for others to use. Simply download the program, edit the environment variables for your system, and then create and manage as many users as you want. Currently, users have access to 3 services:

- NodeJS script hosting
- MySQL database hosting
- Static website hosting

The computer admin would download YouCloud onto their computer, change the environment variables for their system, and run the setup script which will run the frontend and backend on port 8080. From there, the admin can log into the admin page with the account information stored in the environment variables, and create and manage as many users as they want. The users can log in with the account the admin created them, and use as many services as were allocated to their account.

## How we built it

For the YouCloud program, we used the following technologies:

- Wireframing: Balsamiq
- Frontend: Svelte, Bootstrap
- Backend: Django, NodeJS
- Database: sqlite3

Our submission also includes a Todo app to demonstrate the capabilities of YouCloud, which used the following technologies:

- Frontend: Svelte, custom CSS
- Backend: Express
- Database: MySQL

## Challenges we ran into

From our past hackathon experiences, we knew how to avoid problems with software versions and merge conflicts. The main challenges we faced during this project came down to the new technologies we were learning.

## Accomplishments that we're proud of

We created exactly what we set out to create with no exceptions, and we are very proud of how it turned out visually. We were all proud of how quickly we were able to familiarize ourselves with the selected tech stack and how we were able to transfer our knowledge from other programming languages and frameworks.

## What we learned

"I had experience with vanilla web development using HTML CSS and JS, but I had never with closely with a SPA framework before. Using Svelte was strange at first but I quickly realized how intuitive and easy it made the development process." - Esteban

"This was my first time using Svelte and Express.js, so I learned quite a bit within these past 48 hours. Once I got the hang of them, both tools were straightforward to use, and Svelte was fun to experiment and play around with." - Jagdeep

"At first, I was hesitant to join the team just because I had no knowledge of working with the frameworks that we used. However, I feel like I made the right decision to join as I am now a lot more comfortable working with web frameworks compared to before." - Sagar

"I was comfortable with the technologies, but one thing I learned during this hackathon is how not to get distracted by bugs. We had a problem with importing a local image file, but I only spent 5 minutes researching before deciding to upload it to discord, use the discord url, and move on with more important tasks." - Thomas

## What's next for YouCloud

- Adding more services such as Python script hosting
- Allowing users to integrate with Github
- Proper containerization of NodeJS scripts
