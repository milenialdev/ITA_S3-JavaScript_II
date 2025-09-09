## 👤 Author

Carlos / milenialdev  
[github.com/milenialdev](https://github.com/milenialdev)


## 🔀 Branch Workflow: testing, develop and main

This project uses a branch-based workflow to organize development and code stability:

- **`testing` branch**:  
	This is the branch where daily work happens. Here, new features are developed and tested, bugs are fixed, and all ongoing changes are made. It is an active branch and may contain code that is still in progress or not fully stable.

- **`develop` branch**:  
	Only stable versions of the project are pushed to this branch. When a feature or set of changes in `testing` has been reviewed and works correctly, it is merged into `develop`. This way, `develop` always contains a functional and stable version of the project, ready for global testing.

- **`main` branch**:  
	This is the main branch and represents the final, official version of the project. Only versions that have been fully validated and are ready to be delivered or deployed are merged into `main`. The code in `main` should always be stable and production-ready.

**Workflow summary:**
1. Work and testing are done in `testing`.
2. When changes are ready and stable, they are merged into `develop`.
3. When a final version is needed, `develop` is merged into `main`.

This workflow helps keep the code organized, facilitates collaboration, and ensures that the main branch always contains a stable, deliverable version.


# 🎬 Sprint 3 IT Academy | Video Management Tool

## 🚀 Introduction

A company in the audiovisual sector requested a web application to help their employees quickly find movies from a large database, as the process was previously manual.

You are responsible for setting up the core of the application: all the logic for filtering and sorting movies. You have 2 weeks to complete this sprint.

---

## 📋 Requirements

1. Clone this repo
```bash
git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies
```

2. Unlink your repo from the itacademy repository
```bash
git remote rm origin
```

3. Link your repo to the repository you create in your GitHub account
```bash
git remote add origin <your repo name!>
```

---

## 📤 Submission

1. Upon completion, run the following commands:

```bash
git add .
git commit -m "Sprint Solution"
git push origin master
```

2. Create a Pull Request.

3. Upload the link to the virtual campus so your mentor can review and give you feedback.

---

## 🧪 Tests

```shell
npm install
npm run test:watch
```

Finally, open the generated `test-results.html` file with the "Live Server" VSCode extension to see test results.

You will know exactly what you are asked to do by looking at the file `tests/films.spec.js`, where all tests are already defined!

---

## 🛠️ Technologies Used

- **JavaScript ES6**: Modern methods like `map`, `filter`, `reduce`, `sort`, `toSorted`, etc.
- **Node.js**: To run tests and manage dependencies.
- **Jest**: Testing framework to validate the correct functioning of the functions.

## 🗂️ Structure & Solution

- All logic is in `src/films.js`.
- Movie data is in `src/data.js`.
- Automated tests are in `tests/films.spec.js`.
- Each function implements an operation on the movie array, using functional programming and ES6 array methods.
- The main goal is for all functions to pass the defined tests.

---

## 📖 Instructions

- All loops must be implemented in ES6 (using map, reduce, filter, and sort to manipulate arrays).
- As we are not consuming data from a server/API, we work with data from the `src/data.js` file (about 250 movies).
- The implementation is about processing this array of movies to display it as requested in each exercise.
- All logic should be placed in the `src/films.js` file.
- You do not need to display the result of each function on the screen. Your goal is to pass the tests. More information on test-driven programming is at the end of the document.
- Don't forget to include a screenshot of the test results in the virtual campus.


