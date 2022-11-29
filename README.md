# Week One Code Challenge
***
## Table of Contents
1. [Description](#description)
    - [Student Grade Generator](student-grade-generator)
    - [Speed Detector](#speed-detector)
    - [Net Salary Calculator](net-salary-calculator)
2. [Project Setup](#project-setup)
3. [Author and License](#author-and-license)

***
## Description
Week one code challenge.
The challenges are as follows:
- Student Grade Generator
- Speed Detector
- Net Salary Calculator
## Project Setup
To access this project on your local files, you can clone it using this steps
- Open the Terminal
- Clone the repository: <a>https://github.com/the-datageek/week-1-code-challenge</a>
- Change Directory: cd code-challenges
You will need node and npm installed globally on your machine.

#### To Run Test Suite:
<code> node filename.js </code>

#### To Run Server
<code>npm install -g live-server</code>
<code>live-server</code>

#### Required Files
 - const prompt = require("prompt-sync")();
***

## Challenges
### Student Grade Generator
Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

#### Process
- Run <code>node student-grade-generator.js</code> to initiate the prompt
- When prompted, input student marks
- Output will generated the student grade


### Speed Detector
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

#### Process
- Run <code>node speed-detector.js</code> to initiate the prompt
- When prompted, input car speed in kilometers
- Output will generated your demerit status

***
### Net Salary Calculator
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.
NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

#### Process
- Run <code>node net-salary.js</code> to initiate the prompt
- When prompted, input gross monthly salary
- Another prompt will appear where you give a 'yes' or 'no' answer to having an alternative pension scheme
- Output will generated a breakdown of all the deductions and net salary

***

## Author 
This project was contributed to by:
    [Faith Moraa](https://github.com/the-datageek)

#### License
The project is licensed under ISC