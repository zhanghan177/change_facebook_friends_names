#include<iostream>
#include<string>
#include<fstream>

using namespace std;

int main() {
	ifstream ifs;
	string filename = "input.txt";
	ifs.open(filename);

	string firstname, lastname_comma;
	while(ifs >> firstname >> lastname_comma) {
		// extract the comma
		int length = lastname_comma.length();

		string lastname = lastname_comma.substr(0, length - 1);

		cout << '\'' << firstname << " " << lastname << "\'," << endl;
	}

	return 0;
}