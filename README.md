# Notes-NodeJS

A CLI tool to store notes in a JSON file.

# Installation
```
git clone https://github.com/zdahmed93/notes-cli-with-nodejs.git
```
```
cd notes-cli-with-nodejs
```
```
npm install
```


## Usage

```
$ node app.js --help
app.js

Commands:
  app.js add     Add a new note
  app.js list    List all notes
  app.js read    Read a note
  app.js remove  Remove a note

Options:
  --help     Show help                        
```

### Example

```
$ node app.js add -t "To do" -b "Push my repo to Github"
Note created
===
Title: To do
Body: Push my repo to Github

$ node app.js list
Printing 1 note(s).
===
Title: To do
Body: Push my repo to Github

$ node app.js read -t "To do"
Note found
===
Title: To do
Body: Push my repo to Github

$ node app.js remove -t "To do"
Note removed!

$ node app.js list
Printing 0 note(s).
```

