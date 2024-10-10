## Source Control
uses github cli
Git init
- Initializes source control
git remote add origin ....
- add the origin of your level one capstone
1. Open Github
2. Open the repository
3. Copy the repository link
git pull origin main
- Pull your original level 1 capstone from github
github 
gh
gh auth login
Create new repository
git remote set url
- change the origin
git push --set-upstream origin main
-push to the new repository

# Review
 ## How to start a new project in VS Code?
Open a folder
Create a folder
Save it as a workspace
How to set Git Bash as the default terminal in VS Code?
open the terminal
click dropdown arrow
select default profile
select Git Bash
How to use touch command to create the file git.md?
open Git Bash terminal
type touch git.md
Why did we create git.md?
to store our notes for git commands
Which extension renders a webpage?
Live Server
How do you render your webpage with Live server?
click Go Live icon at bottom of the terminal
How to terminate Live Server?
close the port by clicking the icon
__________________________________________________________________________
## VS Code Installation Review
Download & install Visual Studio Code from the web
Windows and Mac : code.visualstudio.com
Chromebooks (Linux system downloads necessary)
amd64 or arm64
Download and Install Git/Git Bash and Git CLI from the web
Git/Git Bash: https://git-scm.com/downloads
Git CLI: https://cli.github.com/
Launch VS Code once installed
_________________________________________
Source Control
create folder: Sandbox Level 2
create file: git.md 

### INSTALL GIT BASH
1. Run the command git --version
2. If there's an error, install Git Bash from https://git-scm.com/
3. Choose default options, but override the branch name with main.
4. Reload VS Code to apply changes.

### INSTALL GITHUB CLI
1. Run the command gh --version
2. If there's an error, install GitHub CLI from https://cli.github.com/
3. Choose default options.
4. Reload VS Code to apply changes.

### CONFIGURE USER NAME
1. Run the command git config user. name.
2. If it's not correct, run the command git config user. name "myUserName".

### CONFIGURE USER EMAIL
1. Run the command git config user.email.
2. If it's not correct, run the command gi config user.email "my@email.com".

### COPY THE REPOSITORY LINK
1. Open GitHub.
2. Open the repository.
3. Click on the green Code button.
4. Copy the HTTPS link.

### PULL FROM GITHUB
git init
git remote add origin https://github.com/myRepositoryLink
git pull origin main

### DELETE UNUSED FILES
1. If there are files that VS Code doesn't need (like Glitch files), delete those.  

### CREATE A NEW REPOSITORY IN GITHUB
 1. Click on the cat icon at the top left. 
 2. Click on the green new button at the top left. 
 3. Enter the repository name. 
 4. Click Create repository. 
 5. Do not change the default settings. 
 
### PUSH TO GITHUB FOR THE FIRST TIME 
gh auth login git remote set-url origin https://github.com/myRepositoryLink2 
git add . 
git commit -m "added files" 
git push --set-upstream origin main 

### PUSH TO GITHUB REGULARLY 
git add . 
git commit -m "the changes I made" 
git push
        
### COMMAND DESCRIPTIONS 
git init //Initializes source control git pull origin main //Copies files from the origin 
gh auth login //Grants authorization to push to your repository
git remote set-url origin //Sets the origin 
git push --set-upstream origin main //Pushes files to GitHub and makes origin and main the default options 
_______________________________________________________

