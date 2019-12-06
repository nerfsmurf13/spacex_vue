#include <iostream>
#include <string>
//#include <iomanip>

using namespace std;

//function prototype

char letterGrade(double score);

//main function

int main()

{
	char names[5][25]; //student names
	char grades[5]; //letter grades
	double scores[5][4]; //test scores
	double avgScore[5]; //average of test scores for each
	for (int i = 0; i < 5; i++)
	{

		cout << "\nEnter student " << (i + 1) << " name: ";

		cin >> names[i];

		cout << "Enter his 4 scores: ";

		for (int j = 0; j < 4; j++)

		{

			cin >> scores[i][j];

			//input validation

			while (scores[i][j] > 100 || scores[i][j] < 0)

			{

				cout << "\ntest score should between 0 and 100" << endl;

				cout << "enter test score: ";

				cin >> scores[i][j];

			}

		}
	}
	//finds the average of each score 
	//and letter grade
	// the i is to represent the test scores input
	for (int i = 0; i < 5; i++)

	{

		avgScore[i] = 0;

		for (int j = 0; j < 4; j++)

			avgScore[i] += scores[i][j];

		avgScore[i] /= 4;

		grades[i] = letterGrade(avgScore[i]);

	}

	//displaying average test score and letter grade

	cout << "\nStudent Name\tAverage Score\tLetter Grade" << endl;

	for (int i = 0; i < 5; i++)

	{

		cout << names[i] << "\t\t" << avgScore[i] << "\t\t" << grades[i] << endl;

	}
	//Left this here to prevent console from closing
	system("pause");

	return 0;

}

//return letter grade based on the test score

//passed as parameter

char letterGrade(double score)
{
	if (score >= 90 && score <= 100)
		return 'A';
	else if (score >= 80 && score < 90)
		return 'B';
	else if (score >= 70 && score < 80)
		return 'C';
	else if (score >= 60 && score < 70)
		return 'D';
	else
		return 'F';
}

