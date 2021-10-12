# Seeking Abortion 

Seeking Abortion is an app developed in response to Texas' near-total abortion ban. It provides a list of clinics offering abortions in states bordering Texas. Someone seeking an abortion or in search of information about the closest clincs can use the app to gain more information about providers. 

# Installation Guide

To install, go first to the seeking_abortion_backend, which you can access here:
https://github.com/slcsta/seeking_abortion_backend
1. Fork and clone the seeking_abortion_backend repository.
2. Change directory into seeking_abortion_backend.
3. In your terminal, run 'bundle install' to install all dependencies.
4. Run rails db:migrate to make all database migrations
5. Run rails db:seed to seed the database
6. Run rails s to start the local server
7. Open your browser of choice and enter the local url.

Once you have the backend up and running:
1. Fork and clone the seeking_abortion_frontend repository.
2. Change directory into the frontend.
3. In your terminal, run 'open index.html'.

After that, you should be able to see existing clinics, add new clinics, delete clinics, and filter clinics by state.
