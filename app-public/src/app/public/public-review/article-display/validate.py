from functools import filter

def is_snake(word):
    if word[0]==word[0].capitalize():return False
    for letter in word[1:]:
    	if letter.is_upper():return True

def is_valid():
    contains = filter(statements_array,lambda line:line.contains('def'));
	for line in contains:
		word = line[line.index('def') + 1]
		if is_snake(word):
			continue
	    else:raise Exception("Word %s is not in snake case" % word);


if __name__ == '__main__':
	with open('try.txt',"r") as file:
		statements = file.readlines()
		is_valid(statements)