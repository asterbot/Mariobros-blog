# The Mario brother blogs

This is a blog for fictional characters Mario and Luigi and their adventures in Mushroom Kingdom!

Most of the code was inspired by [the react tutorial by Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

To see my journey building this, I took notes while learning these tools [in my repo](https://github.com/asterbot/Web-Dev-notes)

## Running the program

After cloning the repository, first run 

```bash
npm install
```
if you haven't run it before already on this project.

Then open two concurrent terminal sessions to run the following from the root of the project:

```bash
npm run start
```

```bash
npx json-server --watch data/db.json --port 8000
```

This manages a JSON server, found in the [data folder](data/) it works with a local JSON server and uses API calls to fetch and push data. It is done this way since I was learning react as a primary focus of this project.

## The website

You can add new blogs by pressing "Add Blog" or delete existing blogs, and they all get stored in the JSON server and display on the home page. The only people who can add blogs are Mario and Luigi.
