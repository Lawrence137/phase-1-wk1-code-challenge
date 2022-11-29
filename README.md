# phase-1-wk1-code-challenge

# Description
This is a code challenge for the end of week one of phase 1.

# Getting started
In order for you to use the content on this repo ensure you have the following:

- A computer that runs on either of the following; (Windows 7+, Linux, Mac OS)
- nodejs 9.0+

# Installation
To use this repo on your machine requires some simple steps;
- Open a terminal / command line interface on your computer
- Clone the repo by using the following:

        git clone https://github.com/Lawrence137/phase-1-wk1-code-challenge

- Be patient as it creates a copy on your local machine for you.
- Change directory to the repo folder:

        cd phase-1-wk1-code-challenge

- (Optional) Open it in ``Visual Studio Code``

        code .

- (Alternate Option) Open it in any editor of your choice.


# Running the application
Running the application is very straight forward. Run the command of the relevant .js file in the terminal;
For Toy problem 1, run the application on the live server.
For Toy problem 2, run the command gradeGenerator.js in the terminal.
For Toy problem 3, run the command salary.js in the terminal.


# challenge 1
Student Grade Generator (Toy Problem)
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
# solution
It contains a HTML button that prompts the user to input their score and outputs the grade. The HTML is linked to the gradeGenerator2.js file that contains the javascript file.


# challenge 2
Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
# solution
It contains a function that takes in speed where if speed is greater than 70, then it prints points: plus the division result. If the points exceed 12, the function returns license suspended.


# challenge 3
Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye


# Authors
This project was contributed to by;
-[Lawrence kimani]("https://github.com/Lawrence137/phase-1-wk1-code-challenge")

# License
This project is licensed under Apache 2.0.
