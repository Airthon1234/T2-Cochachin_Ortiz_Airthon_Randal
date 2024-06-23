import { Component } from '@angular/core';

@Component({
  selector: 'app-grade-calculator',
  standalone: true,
  imports: [],
  templateUrl: './grade-calculator.component.html',
  styleUrl: './grade-calculator.component.css'
})
export class GradeCalculatorComponent {

  average: string = null;

  calculateAverage(): void {
    const grade1 = parseFloat((document.getElementById('grade1') as HTMLInputElement).value);
    const grade2 = parseFloat((document.getElementById('grade2') as HTMLInputElement).value);
    const grade3 = parseFloat((document.getElementById('grade3') as HTMLInputElement).value);
    const grade4 = parseFloat((document.getElementById('grade4') as HTMLInputElement).value);

    const grades = [grade1, grade2, grade3, grade4];
    const lowestGrade = Math.min(...grades);
    const filteredGrades = grades.filter(grade => grade !== lowestGrade);
    this.average = (filteredGrades[0] * 0.2 + filteredGrades[1] * 0.3 + filteredGrades[2] * 0.5).toFixed(2);
  }
  
}
