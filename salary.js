let lowerBoundary =  24001;
let lowerBoundary2 = 32333;
let personalRelief = 2400;
let nssf = 200;
// Function for calculating the net salary
function netSalary(salary, benefits = 1080){  
    // Function for calculating payee
    let payeeCalculations = () => 
    {
    const grossSalary = salary;
    let taxable = grossSalary - benefits
    
    if (salary <= 24000){
        var tax =  (24000 * 0.1) - 2400;
        return tax;
    }
    else if (taxable> 24000 && taxable <= 32333){
        const tax =  (24000 * 0.1) + (0.25 * (taxable - lowerBoundary)) - personalRelief;
        return tax;
    }
     else if (taxable > 32333){
         const tax =  2400 + ((32333 - 24000) * 0.25) + (0.3 * (taxable - lowerBoundary2)) - personalRelief;
         return tax;
     }
     
    }
    // Function to calculate NHIF and NSSF deductions according to salary range
    const nhifNssfDeductions = ()=> {
        if (salary <= 5999){
            const pay = salary - payeeCalculations() - nssf - 150;
            return pay;
        }
        else if (salary >=6000 && salary < 8000){
            const pay = salary - payeeCalculations() - nssf - 300;
            return pay;
        }
        else if (salary >=8000 && salary < 12000){
            const pay = salary - payeeCalculations() - nssf - 400;
            return pay;
        }
        else if (salary >=12000 && salary < 15000){
            const pay = salary - payeeCalculations() - nssf - 500;
            return pay;
        }
        else if (salary >=15000 && salary < 20000){
            const pay = salary - payeeCalculations() - nssf - 600;
            return pay;
        }
        else if (salary >=20000 && salary < 25000){
            const pay = salary - payeeCalculations() - nssf - 750;
            return pay;
        }
        else if (salary >=25000 && salary < 30000){
            const pay = salary - payeeCalculations() - nssf - 850;
            return pay;
        }
        else if (salary >=30000 && salary < 35000){
            const pay = salary - payeeCalculations() - nssf - 900;
            return pay;
        }
        else if (salary >=35000 && salary < 40000){
            const pay = salary - payeeCalculations() - nssf - 950;
            return pay;
        }
        else if (salary >=40000 && salary < 45000){
            const pay = salary - payeeCalculations() - nssf - 1000;
            return pay;
        }
        else if (salary >=45000 && salary < 50000){
            const pay = salary - payeeCalculations() - nssf - 1100;
            return pay;
        }
        else if (salary >=50000 && salary < 60000){
            const pay = salary - payeeCalculations() - nssf - 1200;
            return pay;
        }
        else if (salary >=60000 && salary < 70000){
            const pay = salary - payeeCalculations() - nssf - 1300;
            return pay;
        }
        else if (salary >=70000 && salary < 80000){
            const pay = salary - payeeCalculations() - nssf - 1400;
            return pay;
        }
        else if (salary >=80000 && salary < 90000){
            const pay = salary - payeeCalculations() - nssf - 1500;
            return pay;
        }
        else if (salary >=90000 && salary < 100000){
            const pay = salary - payeeCalculations() - nssf - 1600;
            return pay;
        }
        else
        {
            const pay = salary - payeeCalculations() - nssf - 1600; 
            return pay;
        }
    }
   
    const netPay =  [`Net Salary is: ${nhifNssfDeductions() + benefits} PAYE: ${payeeCalculations()}, nssf: ${nssf}`];
    return netPay; 
   
}
console.log(netSalary(980000,4600));